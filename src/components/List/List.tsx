import React, { FC } from 'react';
import { Component } from '../../types';

// Components
import { ListItem } from '.';

// Styles
import cx from 'classnames';
import cn from './List.scss';

export interface ListProps extends Component {
	items: ListItem[];
	display?: number;
	onPress?: (key?: string | number) => void;
	increaseDisplay?: () => void;
	selectedKey?: string | number;
	interactable?: boolean;
}

export const List: FC<ListProps> = (props) => {
	return (
		<ul
			data-testid={props.testId}
			className={cx(cn.list, props.className)}
			style={props.style}
		>
			{props.items.map((item, idx) => {
				if (props.display && idx > props.display) return;
				return (
					<ListItem
						key={idx}
						className={cx({
							[cn.selected]:
								`${props.selectedKey}` === `${item.key}`,
						})}
						interactable={props.interactable}
						testId={props.testId && `${item.key}`}
						item={{ key: idx, ...item }}
						onPress={(key?: string | number) => {
							props.onPress?.(key);
						}}
					/>
				);
			})}
			{props.display && props.items.length > props.display && (
				<li
					key='showmore'
					className={cx(cn.item, cn.interactable)}
					onKeyPress={() => {
						props.increaseDisplay?.();
					}}
					onClick={() => {
						props.increaseDisplay?.();
					}}
					tabIndex={0}
				>
					Show More...
				</li>
			)}
		</ul>
	);
};
