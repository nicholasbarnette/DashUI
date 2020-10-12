import React, {
	CSSProperties,
	FC,
	RefObject,
	useEffect,
	useState,
} from 'react';
import { Component } from '../../../types';
import { Divider } from '../../Divider';
import { Bar } from './Bar';

// Styles
import * as cn from './BarChart.scss';

export interface BarChartProps extends Component {
	data: {
		min: number;
		max: number;
		bars: { title?: string; value: number; color?: string }[];
	};
	title: string;
	xAxisTitle: string;
	yAxisTitle: string;
	size?: number;
	containerRef: RefObject<HTMLDivElement>;
}

export const BarChart: FC<BarChartProps> = (props) => {
	const [width, setWidth] = useState('480px');

	const updateBarChartSize = () => {
		if (props.containerRef) {
			setWidth(
				`${
					props.containerRef.current?.getBoundingClientRect().width
				}px` ?? '480px',
			);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', updateBarChartSize);
		return () => {
			window.removeEventListener('resize', updateBarChartSize);
		};
	}, []);

	useEffect(() => {
		updateBarChartSize();
	}, [props.containerRef]);

	return (
		<div
			className={cn.chart}
			style={{
				...({
					'--chart-text-scalar': parseInt(width, 10) / 480,
					'--chart-size': width,
					'--chart-title-size': `${
						(2 * parseInt(width, 10)) / 480
					}rem`,
				} as CSSProperties),
				...props.style,
			}}
			data-testid={props.testId}
			role="figure"
		>
			<h1 className={cn.title} title={props.title}>
				{props.title}
			</h1>

			<div className={cn.body}>
				<span className={cn.yAxis} title={props.yAxisTitle}>
					{props.yAxisTitle}
				</span>
				<Divider
					orientation="vertical"
					style={{
						height: '100%',
						maxHeight: '100%',
						margin: 0,
						width: '100%',
					}}
				/>
				<div
					className={cn.bars}
					style={{
						gridTemplateColumns: `repeat(${props.data.bars.length}, auto)`,
					}}
				>
					{props.data.bars.map((d, idx) => {
						return (
							<Bar
								key={idx}
								{...d}
								min={props.data.min}
								max={props.data.max}
								index={idx}
							/>
						);
					})}
				</div>
			</div>

			<Divider orientation="horizontal" className={cn.xAxisDivider} />

			<span className={cn.xAxis} title={props.xAxisTitle}>
				{props.xAxisTitle}
			</span>
		</div>
	);
};
