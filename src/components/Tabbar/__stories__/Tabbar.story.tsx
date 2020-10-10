import React from 'react';
import { Tabbar } from '../Tabbar';

export default {
	component: Tabbar,
	title: 'Components/Tabbar',
};

export const Basic = () => {
	return (
		<Tabbar
			tabs={[
				{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				},
				{
					id: 1,
					title: 'Tab 2',
					content: <p>Tab 2 Content</p>,
					hidden: true,
				},
				{
					id: 2,
					title: 'Tab 3',
					content: <p>Tab 3 Content</p>,
				},
			]}
			label="tabbar"
		/>
	);
};
