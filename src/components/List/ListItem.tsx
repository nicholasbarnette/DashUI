import React, { FC } from 'react';

// Styles
import cx from 'classnames';
import cn from './List.scss';

export interface ListItem {
	key?: string | number;
	text: string;
	description?: string;
}

export interface ListItemProps {
	className?: string;
	testId?: string;
	onPress?: (key?: string | number) => void;
	item: ListItem;
	interactable?: boolean;
}

export const ListItem: FC<ListItemProps> = (props) => {
	return (
		<li
			data-testid={props.testId}
			key={props.item.key}
			className={cx(
				cn.item,
				props.interactable && cn.interactable,
				props.className,
			)}
			onKeyPress={() => {
				props.onPress?.(props.item.key);
			}}
			onClick={() => {
				props.onPress?.(props.item.key);
			}}
			tabIndex={0}
		>
			<span className={cn.text} title={props.item.text}>
				{props.item.text}
			</span>
			{props.item.description && (
				<span className={cn.description} title={props.item.description}>
					{props.item.description}
				</span>
			)}
		</li>
	);
};
