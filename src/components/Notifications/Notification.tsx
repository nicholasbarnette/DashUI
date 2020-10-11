import React, { FC, useEffect } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Notification.scss';
import { Close } from '../SVG';
import { Button } from '../Button';

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
			role="alert"
		>
			<span className={cn.text} title={props.children}>
				{props.children}
			</span>
			<Button
				icon={{
					svg: Close,
					customColor: { default: 'var(--text-inverse)' },
				}}
				tooltip="Close notification"
				onPress={props.onClose}
				className={cn.closeButton}
				variant="lightweight"
			/>
		</div>
	);
};
