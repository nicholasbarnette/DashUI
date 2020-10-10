import React from 'react';
import { MessageStrip } from '../../MessageStrip';

export default {
	component: MessageStrip,
	title: 'Components/MessageStrip',
};

export const Basic = () => {
	return (
		<div>
			<MessageStrip>
				Basic message strip with a short message.
			</MessageStrip>
			<MessageStrip variant="information">
				Basic message strip with a short message.
			</MessageStrip>
			<MessageStrip variant="error">
				Basic message strip with a short message.
			</MessageStrip>
			<MessageStrip variant="warning">
				Basic message strip with a short message.
			</MessageStrip>
			<MessageStrip variant="success">
				Basic message strip with a short message.
			</MessageStrip>
		</div>
	);
};

export const Wrapping = () => {
	return (
		<MessageStrip variant="information">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			culpa qui officia deserunt mollit anim id est laborum.
		</MessageStrip>
	);
};
