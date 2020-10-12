import React, { FC, useState, KeyboardEvent } from 'react';
import { Component } from '../../types';

// Styles
import cn from './VerticalTabs.scss';
import cx from 'classnames';
import { VerticalTab } from './VerticalTab';

export interface VerticalTabsProps extends Component {
	tabs: VerticalTab[];
}

export const VerticalTabs: FC<VerticalTabsProps> = (props) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [focusedIdx, setFocusedIdx] = useState(0);

	const calculateFocus = (event: KeyboardEvent) => {
		let newIdx = focusedIdx;
		switch (event.which) {
			case 9: // tab
			case event.shiftKey && 9: // reverse tab
				setFocusedIdx(selectedTab);
				return;
			case 38: // up
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
			case 40: // down
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
			data-testid={props.testId}
			className={cx(cn.tabs, props.className)}
			style={props.style}
		>
			<ul
				className={cn.tabList}
				onKeyDown={(event: KeyboardEvent) => {
					calculateFocus(event);
				}}
			>
				{props.tabs.map((tab, idx) => {
					const { content, ...restProps } = tab;
					return (
						!tab.hidden && (
							<VerticalTab
								key={idx}
								testId={props.testId && `${props.testId}${idx}`}
								{...restProps}
								isFocused={idx === focusedIdx}
								selected={selectedTab === idx}
								onPress={() => setSelectedTab(idx)}
							/>
						)
					);
				})}
			</ul>
			<div className={cn.content}>{props.tabs[selectedTab].content}</div>
		</div>
	);
};
