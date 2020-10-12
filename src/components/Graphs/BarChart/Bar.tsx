import React, { FC } from 'react';

// Styles
import * as cn from './Bar.scss';

export interface BarProps {
	color?: string;
	value: number;
	max: number;
	min: number;
	index: number;
	title?: string;
}

export const Bar: FC<BarProps> = (props) => {
	return (
		<div className={cn.container}>
			<div
				className={cn.bar}
				style={{
					backgroundColor:
						props.color ??
						`var(--color-graph${
							Math.floor(Math.random() * 5) + 1
						})`,
					height: `${
						((props.value - props.min) / (props.max - props.min)) *
						100
					}%`,
				}}
			>
				{!!props.value ? (
					<span className={cn.value} title={props.title}>
						{props.value}
					</span>
				) : null}
			</div>
		</div>
	);
};
