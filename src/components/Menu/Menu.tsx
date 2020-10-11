import React, {
	FC,
	useEffect,
	useState,
	RefObject,
	KeyboardEvent,
} from 'react';
import { Component } from '../../types';

// Components
import { Divider } from '../Divider';
import { MenuItem } from '.';

// Styles
import cx from 'classnames';
import cn from './Menu.scss';

export interface MenuProps extends Component {
	items: MenuItem[];
	onPress?: (id: string) => void;
	isOpen?: boolean;
	originRef?: RefObject<HTMLElement>;
	menuId?: string;
	onClose?: () => void;
}

export const Menu: FC<MenuProps> = (props) => {
	const [position, setPosition] = useState({
		top: -1,
		right: -1,
		bottom: -1,
		left: -1,
	});
	const [focusedIdx, setFocusedIdx] = useState(0);

	useEffect(() => {
		if (props.isOpen) {
			setFocusedIdx(0);
		} else {
			setFocusedIdx(-1);
		}
	}, [props.isOpen]);

	useEffect(() => {
		if (!props.items || !props.isOpen) return;
		let hasSet = false;
		props.items.map((item, idx) => {
			if (!hasSet && item.type === 'text' && !item.hidden) {
				setFocusedIdx(idx);
				hasSet = true;
			}
		});
	}, [props.items, props.isOpen]);

	const calculateFocus = (event: KeyboardEvent) => {
		let newIdx = focusedIdx;
		switch (event.which) {
			case event.shiftKey && 9: // reverse tab
				if (newIdx - 1 < 0) {
					props.onClose?.();
					return;
				}
			case 38: // up
				while (newIdx - 1 >= -1) {
					newIdx--;
					if (newIdx <= -1) {
						newIdx = 0;
						break;
					}
					if (
						!props.items[newIdx].hidden &&
						props.items[newIdx].type !== 'divider'
					) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			case 9: // tab
			case 40: // down
				while (newIdx + 1 <= props.items.length) {
					newIdx++;
					if (newIdx >= props.items.length) {
						newIdx = focusedIdx;
						break;
					}
					if (
						!props.items[newIdx].hidden &&
						props.items[newIdx].type !== 'divider'
					) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			case 27:
				props.onClose?.();
				return;
			default:
				return;
		}
	};

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
			role="menu"
			aria-labelledby={props.menuId}
			onKeyDown={(event: KeyboardEvent) => {
				calculateFocus(event);
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
									hidden={item.hidden}
								/>
							)
						);
					case 'divider':
						return (
							<Divider
								key={`divider${idx}`}
								className={cn.divider}
							/>
						);
					default:
						return;
				}
			})}
		</ul>
	);
};
