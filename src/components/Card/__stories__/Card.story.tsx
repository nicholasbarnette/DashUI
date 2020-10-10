import React from 'react';
import { Instagram } from '../../SVG';
import { Card } from '../Card';

export default {
	component: Card,
	title: 'Card',
};

export const StandardCard = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<Card
				variant={{
					type: 'standard',
					title: 'Testing',
				}}
			/>
			<Card
				variant={{
					type: 'standard',
					title: 'Testing',
					description: 'Value',
				}}
			/>
			<Card
				variant={{
					type: 'standard',
					title: 'Testing',
					description: 'Value',
					icon: { svg: Instagram },
				}}
			/>
		</div>
	);
};

export const DataCard = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<Card
				variant={{
					type: 'data',
					value: 'Value',
					title: 'Testing',
				}}
			/>
			<Card
				variant={{
					type: 'data',
					value: 'Value',
					title: 'Testing',
					color: 'var(--color-graph1)',
					description: 'This is a description.',
				}}
			/>
			<Card
				variant={{
					type: 'data',
					value: 'Value',
					title: 'Testing',
					color: 'var(--color-graph2)',
					description: 'This is a description.',
					icon: { svg: Instagram },
				}}
			/>
			<Card
				variant={{
					type: 'data',
					value: 'Value',
					title: 'Testing',
					color: 'var(--color-graph3)',
					description: 'This is a description.',
					icon: { svg: Instagram },
				}}
			/>
			<Card
				variant={{
					type: 'data',
					value: 'Value',
					title: 'Testing',
					color: 'var(--color-graph4)',
					description: 'This is a description.',
					icon: { svg: Instagram },
				}}
			/>
			<Card
				variant={{
					type: 'data',
					value: 'Value',
					title: 'Testing',
					color: 'var(--color-graph5)',
					description: 'This is a description.',
					icon: { svg: Instagram },
				}}
			/>
		</div>
	);
};

export const ImageCard = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<Card variant={{ type: 'image', title: 'Testing' }} />
			<Card
				variant={{
					type: 'image',
					title: 'Testing',
					icon: { svg: Instagram },
					description: 'This is a description.',
				}}
			/>
			<Card
				variant={{
					type: 'image',
					title: 'Testing',
					icon: { svg: Instagram },
					description: 'This is a description.',
					imageAlt:
						'Landscape image of fields with a mountain range in the background.',
					image:
						'https://images.ctfassets.net/u0haasspfa6q/2sMNoIuT9uGQjKd7UQ2SMQ/1bb98e383745b240920678ea2daa32e5/sell_landscape_photography_online',
				}}
			/>
		</div>
	);
};
