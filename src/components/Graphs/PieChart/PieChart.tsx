import React, {
	CSSProperties,
	FC,
	ReactElement,
	RefObject,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { Component } from '../../../types';

// Styles
import * as cn from './PieChart.scss';

export interface PieChartProps extends Component {
	data: {
		total: number;
		slices: { title?: string; value: number; color?: string }[];
	};
	// title: string;
	// xAxisTitle: string;
	// yAxisTitle: string;
	size?: number;
	containerRef: RefObject<HTMLDivElement>;
}

export const PieChart: FC<PieChartProps> = (props) => {
	const [width, setWidth] = useState('240px');

	const updatePieChartSize = () => {
		if (props.containerRef) {
			setWidth(
				`${
					props.containerRef.current?.getBoundingClientRect().width
				}px` ?? '240px',
			);
		}
	};

	// Sort data smallest to largest
	const conicGradient = useMemo(() => {
		return `conic-gradient(${(() => {
			let slices: string[] = [];
			let start = 0;
			props.data.slices.map((s) => {
				slices.push(
					`${s.color} ${start}deg ${
						start + Math.floor((s.value / props.data.total) * 360)
					}deg`,
				);
				start += Math.floor((s.value / props.data.total) * 360);
			});
			return slices.join(', ');
		})()})`;
	}, [props.data]);

	useEffect(() => {
		window.addEventListener('resize', updatePieChartSize);
		return () => {
			window.removeEventListener('resize', updatePieChartSize);
		};
	}, []);

	useEffect(() => {
		updatePieChartSize();
	}, [props.containerRef]);

	return (
		<div
			className={cn.chart}
			style={{
				...({
					'--chart-text-scalar': parseInt(width, 10) / 240,
					'--chart-size': width,
				} as CSSProperties),
				...props.style,
			}}
			data-testid={props.testId}
			role="figure"
		>
			<div
				style={{
					background: conicGradient,
					height: '100%',
					width: '100%',
					borderRadius: '100%',
				}}
			>
				{(() => {
					let titles: ReactElement[] = [];
					let start = 0;
					props.data.slices.map((s, idx) => {
						titles.push(
							<span
								key={idx}
								className={cn.text}
								style={{
									transform: `rotate(${Math.floor(
										start +
											(s.value / props.data.total) * 180,
									)}deg)`,
									...({
										'--slice-text-scalar':
											2 + s.value / props.data.total - 1,
									} as CSSProperties),
								}}
							>
								{s.value > 0
									? `${Math.floor(
											(s.value / props.data.total) * 100,
									  )}%`
									: ''}
							</span>,
						);
						start += Math.floor((s.value / props.data.total) * 360);
					});
					return titles;
				})()}
			</div>
		</div>
	);
};
