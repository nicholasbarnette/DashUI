import React, { FC, ReactNode, useRef, useEffect, KeyboardEvent } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Tabbar.scss';

export interface Tab {
	id: string | number;
	title: string | number;
	content: ReactNode;
	hidden?: boolean;
}

export interface TabProps extends Component {
	tab: Tab;
	selected: boolean;
	isFocused: boolean;
	onPress: () => void;
}

export const Tab: FC<TabProps> = (props) => {
	const itemRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (props.isFocused) {
			itemRef.current?.focus();
		}
	}, [props.isFocused, itemRef]);

	return (
		<button
			role='tab'
			id={`${props.tab.id}`}
			aria-selected={props.selected}
			tabIndex={props.selected ? 0 : -1}
			ref={itemRef}
			onClick={() => {
				props.onPress();
			}}
			onKeyPress={(event: KeyboardEvent) => {
				event.preventDefault();
				(event.which === 13 || event.which === 32) && props.onPress();
			}}
			className={cx(cn.tab, props.selected && cn.selected)}
		>
			{props.tab.title}
		</button>
	);
};
