import React, { FC, KeyboardEvent } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Badge.scss';

export interface BadgeProps extends Component {
	variant?: 'neutral' | 'primary' | 'secondary';
	children: string;
	disabled?: boolean;
	onPress?: () => void;
}

export const Badge: FC<BadgeProps> = (props) => {
	return (
		<div
			data-testid={props.testId}
			className={cx(
				cn.badge,
				cn[props.variant ?? 'neutral'],
				props.onPress && cn.clickable,
				props.className,
			)}
			style={{ ...props.style }}
			title={props.children}
			onClick={() => {
				!props.disabled && props.onPress?.();
			}}
			onKeyPress={(event: KeyboardEvent) => {
				(event.which === 13 || event.which === 32) &&
					!props.disabled &&
					props.onPress?.();
			}}
		>
			<span className={cn.text}>{props.children}</span>
		</div>
	);
};
