import React, { FC, CSSProperties } from 'react';
import * as d3 from 'd3';
import { Component } from '../../../types';

// Styles
import * as cn from './Pie.scss';

export interface PieProps extends Component {
	data: number[];
	radius: number;
	colors?: string[];
	labels?: string[];
}

interface ArcProps {
	data: any;
	index: number;
	createArc: d3.Arc<any, d3.DefaultArcObject>;
	colors: d3.ScaleOrdinal<string, string>;
	format: (
		n:
			| number
			| {
					valueOf(): number;
			  },
	) => string;
	label?: string;
	radius: number;
}

const Arc: FC<ArcProps> = ({
	data,
	index,
	createArc,
	colors,
	format,
	label,
	radius,
}) => (
	<g key={index} className='arc'>
		<path
			className='arc'
			d={createArc(data) || undefined}
			fill={colors(`${index}`)}
		/>
		<text
			transform={`translate(${createArc.centroid(data)})`}
			textAnchor='middle'
			alignmentBaseline='middle'
			className={cn.text}
			fontSize={`${radius / 10}px`}
		>
			{data.value > 0 &&
				((label && label.substring(0, 20)) || format(data.value))}
		</text>
	</g>
);

export const Pie: FC<PieProps> = (props) => {
	const createPie = d3
		.pie()
		.value((d) => d.valueOf())
		.sort(null);
	const createArc = d3.arc().innerRadius(0).outerRadius(props.radius);
	const colors = d3.scaleOrdinal(props.colors || d3.schemeCategory10);
	const format = d3.format('d');
	const data = createPie(props.data);

	return (
		<svg
			data-testid={props.testId}
			style={{
				width: props.radius * 2,
				height: props.radius * 2,
				border: '2px solid var(--background-overlay-neutral)',
				borderRadius: '100%',
				...props.style,
			}}
			role='figure'
			className={props.className}
		>
			<g transform={`translate(${props.radius} ${props.radius})`}>
				{data.map((d, i) => (
					<Arc
						key={i}
						data={d}
						index={i}
						createArc={createArc}
						colors={colors}
						format={format}
						label={props.labels && props.labels[i]}
						radius={props.radius}
					/>
				))}
			</g>
		</svg>
	);
};
