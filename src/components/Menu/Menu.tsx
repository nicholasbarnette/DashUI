import React, { FC, useEffect, useState, RefObject } from 'react';
import { Component } from '../../types';

// Components
import { Divider } from '../Divider';
import { MenuItem } from '.';

// Styles
import cx from 'classnames';
import cn from './Menu.scss';

export interface MenuProps extends Component {
	items?: MenuItem[];
	onPress?: (id: string) => void;
	isOpen?: boolean;
	originRef?: RefObject<HTMLElement>;
	menuId?: string;
}

export const GenerateMenuId = () => {
	let id = '';
	for (let i = 0; i < 10; i++) {
		id += Math.floor(Math.random() * 16)
			.toString(16)
			.toUpperCase();
	}
	return id;
};

export const Menu: FC<MenuProps> = (props) => {
	const [position, setPosition] = useState({
		top: -1,
		right: -1,
		bottom: -1,
		left: -1,
	});
	const [focusedIdx, setFocusedIdx] = useState(0);

	useEffect(() => {
		setFocusedIdx(0);
	}, [props.isOpen]);

	useEffect(() => {
		if (!props.items || !props.isOpen) return;
		let hasSet = false;
		props.items.map((item, idx) => {
			if (!hasSet && item.type === 'text' && !item.hide) {
				setFocusedIdx(idx);
				hasSet = true;
			}
		});
	}, [props.items, props.isOpen]);

	useEffect(() => {
		if (props.originRef) {
			const bounds = props.originRef.current?.getBoundingClientRect()!;
			setPosition({
				top:
					bounds.top <= window.screen.height / 2
						? bounds.bottom - bounds.top
						: -1,
				right: bounds.left > window.screen.width / 2 ? 0 : -1,
				bottom:
					bounds.top > window.screen.height / 2
						? bounds.bottom - bounds.top
						: -1,
				left: bounds.left <= window.screen.width / 2 ? 0 : -1,
			});
		}
	}, [props.originRef]);

	return (
		<ul
			data-testid={props.testId}
			className={cx(cn.menu, !props.isOpen && cn.closed, props.className)}
			data-menuid={props.menuId}
			style={{
				top: position.top !== -1 ? position.top : undefined,
				right: position.right !== -1 ? position.right : undefined,
				bottom: position.bottom !== -1 ? position.bottom : undefined,
				left: position.left !== -1 ? position.left : undefined,
				...props.style,
			}}
			role='menu'
			aria-labelledby={props.menuId}
			onKeyDown={(event) => {
				if (!props.items) return;
				let curIdx = focusedIdx;
				switch (event.which) {
					case 27: // escape
						props.onPress?.('');
						return;
					case event.shiftKey && 9: // reverse tab
					case 38: // up
						while (curIdx >= -1) {
							curIdx -= 1;
							if (
								props.items[curIdx] &&
								!props.items[curIdx].hide &&
								props.items[curIdx].type === 'text'
							) {
								break;
							}
						}
						setFocusedIdx(curIdx <= -1 ? focusedIdx : curIdx);
						return;
					case 9: // tab
					case 40: // down
						while (curIdx <= props.items.length) {
							curIdx += 1;
							if (
								props.items[curIdx] &&
								!props.items[curIdx].hide &&
								props.items[curIdx].type === 'text'
							) {
								break;
							}
						}
						setFocusedIdx(
							curIdx >= props.items.length ? focusedIdx : curIdx,
						);
						return;
					default:
						return;
				}
			}}
		>
			{props.items?.map((item, idx) => {
				switch (item.type) {
					case 'text':
						return (
							item.value && (
								<MenuItem
									key={item.id || idx}
									item={item}
									idx={idx}
									isFocused={
										props.isOpen && focusedIdx === idx
									}
									onPress={props.onPress}
									hidden={item.hide}
								/>
							)
						);
					case 'divider':
						return (
							<Divider
								key={`divider${idx}`}
								className={cn.divider}
								variant='dark'
							/>
						);
					default:
						return;
				}
			})}
		</ul>
	);
};
