import React, { FC, useRef, useEffect } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Menu.scss';

export interface MenuItem {
	type: 'text' | 'divider';
	id?: string;
	value?: string;
	hide?: boolean;
}

export interface MenuItemProps extends Component {
	item: MenuItem;
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
				props.onPress?.(props.item.id || `${props.idx}`);
			}}
			onKeyPress={(event) => {
				event.preventDefault();
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
