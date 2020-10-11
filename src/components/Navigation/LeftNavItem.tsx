import React, {
	FC,
	useRef,
	useEffect,
	ReactElement,
	KeyboardEvent,
} from 'react';
import { Component } from '../../types';
import { SVGType, SVG } from '../SVG';

// Styles
import cx from 'classnames';
import cn from './LeftNavigation.scss';

export interface LeftNavigationItem {
	svg?: SVGType;
	text: string;
	content: ReactElement;
	hidden?: boolean;
}

export interface LeftNavItemProps extends Component {
	item: LeftNavigationItem & { id: number };
	isFocused?: boolean;
	selected?: boolean;
	onPress?: (idx: number) => void;
}

export const LeftNavItem: FC<LeftNavItemProps> = (props) => {
	const itemRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (props.isFocused) {
			itemRef.current?.focus();
		}
	}, [props.isFocused, itemRef]);

	return (
		<li
			style={props.style}
			className={cx(
				cn.item,
				props.selected && cn.selected,
				props.className,
			)}
			ref={itemRef}
			tabIndex={props.selected && props.isFocused ? 0 : -1}
			title={props.item.text}
			onClick={() => {
				props.onPress?.(props.item.id);
			}}
			onKeyPress={(event: KeyboardEvent) => {
				(event.which === 13 || event.which === 32) &&
					props.onPress?.(props.item.id);
			}}
		>
			<div className={cn.iconContainer}>
				{props.item.svg ? (
					<SVG
						svg={props.item.svg}
						tooltip=""
						className={cn.icon}
						customColor={{
							default: props.selected
								? 'var(--background-navigation)'
								: 'var(--text-inverse)',
							inverse: props.selected
								? 'var(--text-inverse)'
								: 'var(--background-navigation)',
						}}
					/>
				) : (
					<span
						className={cn.textIcon}
						style={{
							color: props.selected
								? 'var(--text-default)'
								: 'var(--text-inverse)',
						}}
					>
						{props.item.text.slice(0, 1)}
					</span>
				)}
			</div>
			<span>{props.item.text}</span>
		</li>
	);
};
