import React, { FC, useEffect } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Notification.scss';

export interface Notification {
	id: string;
	type?: 'error' | 'warning' | 'success' | 'information';
	notification: string;
}

export interface NotificationProps extends Component {
	children: string;
	onClose?: () => void;
	timeout?: number;
}

export const Notification: FC<NotificationProps> = (props) => {
	useEffect(() => {
		// If timeout is -1 don't close automatically
		if (props.timeout !== -1) {
			const timer = setTimeout(() => {
				props.onClose?.();
			}, props.timeout || 4000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, []);

	return (
		<div
			className={cx(cn.toast, props.className)}
			data-testid={props.testId}
			style={props.style}
			role='alert'
		>
			<span className={cn.text}>{props.children}</span>
			{/* TODO: Convert this to an icon */}
			<span
				tabIndex={0}
				className={cn.closeButton}
				onClick={() => {
					props.onClose?.();
				}}
				onKeyPress={(event) => {
					(event.which === 13 || event.which === 32) &&
						props.onClose?.();
				}}
				aria-label='Close notification'
				role='button'
			>
				X
			</span>
		</div>
	);
};
