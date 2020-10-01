import React, { FC, useState, useRef } from 'react';
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

	return (
		<div
			className={cx(cn.container, props.className)}
			style={props.style}
			data-testid={props.testId}
			aria-label={props.label}
			ref={tabbarRef}
			onKeyDown={(event) => {
				switch (event.which) {
					case event.shiftKey && 9: // reverse tab
					case 9: // tab
						// Signifies user has tabbed away from tabs
						setFocusedIdx(-1);
						return;
					case 37: // left
						if (focusedIdx === -1) {
							setFocusedIdx(
								selectedTab - 1 <= 0 ? 0 : selectedTab - 1,
							);
						} else {
							setFocusedIdx(
								focusedIdx - 1 <= 0 ? 0 : focusedIdx - 1,
							);
						}
						return;
					case 39: // right
						if (focusedIdx === -1) {
							setFocusedIdx(
								selectedTab + 1 >= props.tabs.length
									? props.tabs.length
									: selectedTab + 1,
							);
						} else {
							setFocusedIdx(
								focusedIdx + 1 >= props.tabs.length
									? focusedIdx
									: focusedIdx + 1,
							);
						}
						return;
					default:
						return;
				}
			}}
		>
			<div className={cn.tabs} role='tablist'>
				{props.tabs.map((tab, idx) => {
					return (
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
