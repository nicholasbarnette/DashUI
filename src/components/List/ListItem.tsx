import React, { FC } from 'react';

import { Text } from '../Text';

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
	const interactable = props.interactable ?? true;
	return (
		<li
			data-testid={props.testId}
			key={props.item.key}
			className={cx(
				cn.item,
				interactable && cn.interactable,
				props.className,
			)}
			onKeyPress={(event) => {
				(event.which === 13 || event.which === 32) &&
					interactable &&
					props.onPress?.(props.item.key);
			}}
			onClick={() => {
				interactable && props.onPress?.(props.item.key);
			}}
			tabIndex={0}
		>
			<Text className={cn.text} title={props.item.text}>
				{props.item.text}
			</Text>
			{props.item.description && (
				<Text className={cn.description} title={props.item.description}>
					{props.item.description}
				</Text>
			)}
		</li>
	);
};
