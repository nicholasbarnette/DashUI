import React from 'react';
import { AppRoot } from '../../AppRoot';

export default {
	component: AppRoot,
	title: 'AppRoot',
};

export const Basic = () => {
	return (
		<AppRoot>
			<h1>This is my test app.</h1>
		</AppRoot>
	);
};
