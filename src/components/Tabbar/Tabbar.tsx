import React, { FC, useState, useRef, KeyboardEvent } from 'react';
import { Component } from '../../types';

// Components
import { Tab } from './Tab';

// Styles
import cx from 'classnames';
import cn from './Tabbar.scss';

export interface TabbarProps extends Component {
	tabs: Tab[];
	label: string;
}

export const Tabbar: FC<TabbarProps> = (props) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [focusedIdx, setFocusedIdx] = useState(0);
	const tabbarRef = useRef<HTMLDivElement>(null);
	const [renderedTabs, setRenderedTabs] = useState<{
		[key: string]: boolean;
	}>(() => {
		return { [`${props.tabs[0].id}`]: true };
	});

	const calculateFocus = (event: KeyboardEvent) => {
		let newIdx = focusedIdx;
		switch (event.which) {
			case event.shiftKey && 9: // reverse tab
			case 9: // tab
				setFocusedIdx(selectedTab);
				return;
			case 37: // left
				while (newIdx - 1 >= -1) {
					newIdx--;
					if (newIdx <= -1) {
						newIdx = 0;
						break;
					}
					if (!props.tabs[newIdx].hidden) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			case 39: // right
				while (newIdx + 1 <= props.tabs.length) {
					newIdx++;
					if (newIdx >= props.tabs.length) {
						newIdx = focusedIdx;
						break;
					}
					if (!props.tabs[newIdx].hidden) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			default:
				return;
		}
	};

	return (
		<div
			className={cx(cn.container, props.className)}
			style={props.style}
			data-testid={props.testId}
			aria-label={props.label}
			ref={tabbarRef}
			onKeyDown={(event: KeyboardEvent) => {
				calculateFocus(event);
			}}
		>
			<div className={cn.tabs} role='tablist'>
				{props.tabs.map((tab, idx) => {
					return (
						!tab.hidden && (
							<Tab
								key={tab.id || idx}
								tab={tab}
								selected={idx === selectedTab}
								isFocused={idx === focusedIdx}
								onPress={() => {
									setRenderedTabs(
										(() => {
											const newRenderedTabs = renderedTabs;
											newRenderedTabs[tab.id] = true;
											return newRenderedTabs;
										})(),
									);
									setSelectedTab(idx);
								}}
							/>
						)
					);
				})}
			</div>
			{props.tabs.map((tab, idx) => {
				return (
					renderedTabs[tab.id] && (
						<div
							key={tab.id}
							role='tabpanel'
							className={cn.content}
							style={{
								display: idx === selectedTab ? 'block' : 'none',
							}}
						>
							{tab.content}
						</div>
					)
				);
			})}
		</div>
	);
};
