import React, { CSSProperties, FC } from 'react';
import { Component } from '../../types';
import { SVG, SVGProps, SVGType } from '../SVG';
import { useTruncateText } from '../../hooks';

// Styles
import cn from './DataCard.scss';
import cx from 'classnames';

export interface DataCardProps extends Component {
	icon?: { svg: SVGType } & SVGProps;
	title: string;
	value?: string;
	description?: string;
	color?: string;
}

export const DataCard: FC<DataCardProps> = (props) => {
	const description = useTruncateText(props.description ?? '', 128);

	return (
		<div
			data-testid={props.testId}
			className={cx(cn.card, props.className)}
			style={{
				...({
					'--card-accent': props.color || 'var(--color-graph5)',
				} as CSSProperties),
				...props.style,
			}}
		>
			<div
				className={cn.content}
				style={{
					gridTemplateColumns: !!props.icon
						? 'minmax(1rem, 1fr) var(--font-size-xl)'
						: 'minmax(1rem, 1fr)',
				}}
			>
				<div className={cn.textContainer}>
					<span className={cn.title} title={props.title}>
						{props.title}
					</span>
					{!!props.value ? (
						<span className={cn.value} title={props.value}>
							{props.value}
						</span>
					) : null}
					{!!description ? (
						<span className={cn.description}>{description}</span>
					) : null}
				</div>
				{!!props.icon ? (
					<SVG
						tooltip=""
						customColor={{ default: 'var(--text-placeholder)' }}
						{...props.icon}
						className={cx(cn.icon, props.icon.className)}
					/>
				) : null}
			</div>
		</div>
	);
};
