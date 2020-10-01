import React, { FC } from 'react';
import { Component } from '../../types';

// Components
import { Notification } from '.';

// Styles
import cx from 'classnames';
import cn from './Notification.scss';

export interface NotificationContainerProps extends Component {
	notifications?: Notification[];
	removeNotification?: (notification: Notification) => void;
	timeout?: number;
}

export const NotificationContainer: FC<NotificationContainerProps> = (
	props,
) => {
	return (
		<div
			className={cx(cn.container, props.className)}
			style={props.style}
			data-testid={props.testId}
		>
			{props.notifications?.map((item, idx) => {
				return (
					<Notification
						key={item.id}
						testId={item.id}
						onClose={() => {
							props.removeNotification?.(item);
						}}
						timeout={props.timeout}
						className={item.type && cn[item.type]}
					>
						{item.notification}
					</Notification>
				);
			})}
		</div>
	);
};
