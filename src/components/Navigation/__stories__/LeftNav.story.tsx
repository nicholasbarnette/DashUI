import React from 'react';
import { LeftNavigation } from '../';
import { Home, Profile, Document } from '../../SVG';

export default {
	component: LeftNavigation,
	title: 'LeftNavigation',
};

export const Basic = () => {
	return (
		<LeftNavigation
			items={[
				{ svg: Home, text: 'Item 1', content: <p>Content 1</p> },
				{ svg: Profile, text: 'Item 2', content: <p>Content 2</p> },
				{ svg: Document, text: 'Item 3', content: <p>Content 3</p> },
				{ text: 'My Item', content: <p>Content 4</p> },
				{
					text: 'My Item with a longer name',
					content: <p>Content 5</p>,
				},
			]}
		/>
	);
};
