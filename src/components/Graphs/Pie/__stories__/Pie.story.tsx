import React from 'react';
import { Pie } from '../Pie';

export default {
	component: Pie,
	title: 'Components/Graph/Pie',
};

export const Basic = () => {
	return (
		<Pie
			data={[100, 200, 400, 150, 150]}
			style={{
				marginLeft: '1rem',
				marginBottom: '2rem',
			}}
			labels={['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']}
			colors={[
				'var(--color-graph1)',
				'var(--color-graph2)',
				'var(--color-graph3)',
				'var(--color-graph4)',
				'var(--color-graph5)',
			]}
			radius={100}
		/>
	);
};
