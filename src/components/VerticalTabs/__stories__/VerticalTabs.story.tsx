import React from 'react';
import { VerticalTabs } from '../VerticalTabs';

export default {
	component: VerticalTabs,
	title: 'Components/VerticalTabs',
};

export const Basic = () => {
	return (
		<VerticalTabs
			tabs={[
				{ title: 'Tab 1', content: <p>Content 1</p> },
				{ title: 'Tab 2', content: <p>Content 2</p> },
				{
					title: 'Tab 3 has a really really long name',
					description: 'This is a very very ver long description',
					content: <p>Content 3</p>,
				},
				{
					title: 'Tab 4',
					description: 'This is a description',
					content: <p>Content 4</p>,
				},
			]}
		/>
	);
};

export const ManyTabs = () => {
	return (
		<VerticalTabs
			tabs={[
				{
					title: 'Tab 1',
					content: (
						<div>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
							<p>Content 1</p>
						</div>
					),
				},
				{ title: 'Tab 2', content: <p>Content 2</p> },
				{
					title: 'Tab 3 has a really really long name',
					description: 'This is a very very ver long description',
					content: <p>Content 3</p>,
				},
				{
					title: 'Tab 4',
					description: 'This is a description',
					content: <p>Content 4</p>,
				},
				{ title: 'Tab 5', content: <p>Content 5</p> },
				{ title: 'Tab 6', content: <p>Content 6</p> },
				{ title: 'Tab 7', content: <p>Content 7</p> },
				{
					title: 'Tab 8',
					content: <p>Content 8</p>,
				},
			]}
			style={{ height: '10rem' }}
		/>
	);
};
