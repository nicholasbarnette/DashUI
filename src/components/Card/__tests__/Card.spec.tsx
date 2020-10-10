import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Card } from '..';
import { HeartFilled } from '../../SVG';

afterEach(cleanup);

describe('standard card', () => {
	it('renders', () => {
		const { getByText } = render(
			<Card variant={{ type: 'standard', title: 'Card Title' }} />,
		);
		expect(getByText('Card Title')).toBeTruthy();
	});

	it('displays description', () => {
		const { getByText } = render(
			<Card
				variant={{
					type: 'standard',
					title: 'Card Title',
					description: 'This is a description.',
				}}
			/>,
		);
		expect(getByText('This is a description.')).toBeTruthy();
	});

	it('displays icon', () => {
		const { getByRole } = render(
			<Card
				variant={{
					type: 'standard',
					title: 'Card Title',
					description: 'This is a description.',
					icon: { svg: HeartFilled },
				}}
			/>,
		);
		expect(getByRole('img')).toBeTruthy();
	});
});

describe('data card', () => {
	it('renders', () => {
		const { getByText } = render(
			<Card
				variant={{ type: 'data', title: 'Card Title', value: 'Value' }}
			/>,
		);
		expect(getByText('Card Title')).toBeTruthy();
	});

	it('displays description', () => {
		const { getByText } = render(
			<Card
				variant={{
					type: 'data',
					title: 'Card Title',
					value: 'Value',
					description: 'This is a description.',
				}}
			/>,
		);
		expect(getByText('This is a description.')).toBeTruthy();
	});

	it('displays icon', () => {
		const { getByRole } = render(
			<Card
				variant={{
					type: 'data',
					title: 'Card Title',
					value: 'Value',
					description: 'This is a description.',
					icon: { svg: HeartFilled },
				}}
			/>,
		);
		expect(getByRole('img')).toBeTruthy();
	});
});

describe('image card', () => {
	it('renders', () => {
		const { getByText } = render(
			<Card variant={{ type: 'image', title: 'Card Title' }} />,
		);
		expect(getByText('Card Title')).toBeTruthy();
	});

	it('displays description', () => {
		const { getByText } = render(
			<Card
				variant={{
					type: 'image',
					title: 'Card Title',
					description: 'This is a description.',
				}}
			/>,
		);
		expect(getByText('This is a description.')).toBeTruthy();
	});

	it('displays icon', () => {
		const { getByRole } = render(
			<Card
				variant={{
					type: 'image',
					title: 'Card Title',
					description: 'This is a description.',
					icon: { svg: HeartFilled },
				}}
			/>,
		);
		expect(getByRole('img')).toBeTruthy();
	});

	it('displays image', () => {
		const { getByRole, getByLabelText } = render(
			<Card
				variant={{
					type: 'image',
					title: 'Card Title',
					description: 'This is a description.',
					imageAlt:
						'Landscape image of fields with a mountain range in the background.',
					image:
						'https://images.ctfassets.net/u0haasspfa6q/2sMNoIuT9uGQjKd7UQ2SMQ/1bb98e383745b240920678ea2daa32e5/sell_landscape_photography_online',
				}}
			/>,
		);
		expect(getByRole('img')).toBeTruthy();
		expect(
			getByLabelText(
				'Landscape image of fields with a mountain range in the background.',
			),
		).toBeTruthy();
	});
});
