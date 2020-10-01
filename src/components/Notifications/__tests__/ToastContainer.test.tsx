import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { NotificationContainer, Notification } from '..';

afterEach(cleanup);

describe('basic switch', () => {
	it('renders', () => {
		const notifications = [
			{
				notification: 'My custom notification.',
				id: 'notification1',
			},
		];
		const { getByTestId } = render(
			<NotificationContainer
				timeout={-1}
				testId="toast"
				notifications={notifications}
			></NotificationContainer>,
		);
		expect(getByTestId('toast')).toBeTruthy();
	});

	it('renders toasts', () => {
		const notifications = [
			{
				notification: 'My custom notification.',
				id: 'notification1',
			},
			{
				notification: 'My custom notification.',
				id: 'notification2',
			},
		];
		const { getAllByText } = render(
			<NotificationContainer
				timeout={-1}
				notifications={notifications}
			></NotificationContainer>,
		);
		expect(getAllByText('My custom notification.').length).toBe(2);
	});

	it('closes notification', () => {
		let notifications = [
			{
				notification: 'My custom notification.',
				id: 'notification1',
			},
			{
				notification: 'My custom notification.',
				id: 'notification2',
			},
		];
		const { getAllByRole } = render(
			<NotificationContainer
				timeout={-1}
				notifications={notifications}
				removeNotification={(notification: Notification) => {
					const newNotifications = [];
					for (let itm of notifications) {
						itm.id !== notification.id &&
							newNotifications.push(itm);
					}
					notifications = newNotifications;
				}}
			></NotificationContainer>,
		);
		expect(notifications.length).toBe(2);
		fireEvent.click(getAllByRole('button')[0]);
		expect(notifications.length).toBe(1);
		expect(notifications[0].id).toBe('notification2');
	});
});
