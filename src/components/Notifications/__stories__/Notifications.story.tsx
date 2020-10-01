import React, { useState } from 'react';
import { Notification, NotificationContainer } from '..';

export default {
	component: Notification,
	title: 'Notification',
};

export const Basic = () => {
	return <Notification>This is my notification.</Notification>;
};

export const longNotification = () => {
	return (
		<Notification>
			This is my super super super super super super super super super
			super super super super super notification.
		</Notification>
	);
};

export const multipleNotifications = () => {
	return (
		<NotificationContainer
			timeout={-1}
			notifications={[
				{
					notification: 'My custom notification.',
					id: 'notification1',
				},
				{
					notification: 'I have another notification.',
					id: 'notification2',
				},
				{
					notification: 'This is a crazy notification!!',
					id: 'notification3',
				},
				{
					notification:
						'What more could you ever expect from a notification?',
					id: 'notification4',
				},
			]}
		></NotificationContainer>
	);
};

export const close = () => {
	const [notifications, setNotifications] = useState([
		{
			notification: 'My custom notification.',
			id: 'notification1',
		},
		{
			notification: 'I have another notification.',
			id: 'notification2',
		},
		{
			notification: 'This is a crazy notification!!',
			id: 'notification3',
		},
		{
			notification:
				'What more could you ever expect from a notification?',
			id: 'notification4',
		},
	]);

	return (
		<NotificationContainer
			timeout={-1}
			notifications={notifications}
			removeNotification={(notification: Notification) => {
				const newNotifications = [];
				for (let itm of notifications) {
					itm.id !== notification.id && newNotifications.push(itm);
				}
				setNotifications(newNotifications);
			}}
		></NotificationContainer>
	);
};
