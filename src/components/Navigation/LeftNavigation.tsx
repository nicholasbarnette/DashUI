import React, { FC, useState, KeyboardEvent } from 'react';
import { Component } from '../../types';
import { LeftNavigationItem, LeftNavItem } from './LeftNavItem';
import { SVG, ChevronRight, ChevronLeft } from '../SVG';

// Styles
import cx from 'classnames';
import cn from './LeftNavigation.scss';

export interface LeftNavigationProps extends Component {
	items: LeftNavigationItem[];
	/**
	 * Desired width of the left navigation when it is open in pixels.
	 * Default: `15rem`.
	 */
	width?: number;
}

export const LeftNavigation: FC<LeftNavigationProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [focusedIdx, setFocusedIdx] = useState(0);
	const [selectedItem, setSelectedItem] = useState(0);

	const calculateFocus = (event: KeyboardEvent) => {
		let newIdx = focusedIdx;
		switch (event.which) {
			case 9: // tab
			case event.shiftKey && 9: // reverse tab
				setFocusedIdx(selectedItem);
				return;
			case 38: // up
				while (newIdx - 1 >= -1) {
					newIdx--;
					if (newIdx <= -1) {
						newIdx = 0;
						break;
					}
					if (!props.items[newIdx].hidden) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			case 40: // down
				while (newIdx + 1 <= props.items.length) {
					newIdx++;
					if (newIdx >= props.items.length) {
						newIdx = focusedIdx;
						break;
					}
					if (!props.items[newIdx].hidden) {
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
			data-testid={props.testId}
			style={props.style}
		>
			<div
				className={cn.leftNav}
				style={{
					width: isOpen
						? !!props.width
							? `${props.width}px`
							: '15rem'
						: 'calc(var(--spacing-md) * 3)',
				}}
			>
				<ul
					className={cn.list}
					onKeyDown={(event: KeyboardEvent) => {
						calculateFocus(event);
					}}
				>
					{props.items.map((itm, idx) => {
						return (
							!itm.hidden && (
								<LeftNavItem
									key={idx}
									item={{ ...itm, id: idx }}
									isFocused={idx === focusedIdx}
									selected={selectedItem === idx}
									onPress={(idx: number) =>
										setSelectedItem(idx)
									}
								/>
							)
						);
					})}
				</ul>
				<div
					className={cn.expandContainer}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
					onKeyPress={(event: KeyboardEvent) => {
						(event.which === 13 || event.which === 32) &&
							setIsOpen(!isOpen);
					}}
					tabIndex={0}
					title={`${isOpen ? 'Collapse' : 'Expand'} Menu`}
				>
					<SVG
						svg={isOpen ? ChevronLeft : ChevronRight}
						tooltip={`${
							isOpen ? 'Collapse' : 'Expand'
						} left navigation`}
						className={cn.expandIcon}
						design="inverted"
					/>
					<span>{`${isOpen ? 'Collapse' : 'Expand'} Menu`}</span>
				</div>
			</div>
			<div className={cn.content}>
				{props.items[selectedItem].content}
			</div>
		</div>
	);
};
