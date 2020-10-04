import React from 'react';
import { LeftNavigation } from '../';
import { Instagram } from '../../SVG';

export default {
	component: LeftNavigation,
	title: 'LeftNavigation',
};

export const Basic = () => {
	return (
		<LeftNavigation
			items={[
				{ svg: Instagram, text: 'Item 1', content: <p>Content 1</p> },
				{ svg: Instagram, text: 'Item 2', content: <p>Content 2</p> },
				{ svg: Instagram, text: 'Item 3', content: <p>Content 3</p> },
				{ text: 'My Item', content: <p>Content 4</p> },
			]}
		/>
	);
};
