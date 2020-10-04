import React, { FC, useRef, useEffect } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Menu.scss';

export interface MenuTextItem {
	type: 'text';
	id?: string;
	value: string;
	hidden?: boolean;
}

export interface MenuDividerItem {
	type: 'divider';
	hidden?: boolean;
}

export type MenuItem = MenuTextItem | MenuDividerItem;

export interface MenuItemProps extends Component {
	item: MenuTextItem;
	onPress?: (id: string) => void;
	isFocused?: boolean;
	idx: number;
	hidden?: boolean;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
	const itemRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (props.isFocused) {
			itemRef.current?.focus();
		}
	}, [props.isFocused, itemRef]);

	return (
		<li
			className={cx(cn.item, props.hidden && cn.hidden)}
			key={props.item.id || props.idx}
			onClick={(event) => {
				event.preventDefault();
				event.stopPropagation();
				props.onPress?.(props.item.id || `${props.idx}`);
			}}
			onKeyPress={(event) => {
				event.preventDefault();
				event.stopPropagation();
				(event.which === 13 || event.which === 32) &&
					props.onPress?.(props.item.id || `${props.idx}`);
			}}
			title={props.item.value}
			role='menuitem'
			ref={itemRef}
			tabIndex={0}
			style={props.style}
		>
			{props.item.value}
		</li>
	);
};
