import React, { CSSProperties, FC } from 'react';
import { Component } from '../../types';
import { SVG, SVGProps, SVGType } from '../SVG';
import { useTruncateText } from '../../hooks';

// Styles
import cn from './ImageCard.scss';
import cx from 'classnames';

export interface ImageCardProps extends Component {
	icon?: { svg: SVGType } & SVGProps;
	title: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	color?: string;
}

export const ImageCard: FC<ImageCardProps> = (props) => {
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
			{!!props.image ? (
				<div
					style={{ backgroundImage: `url(${props.image}` }}
					className={cn.image}
					role="img"
					aria-label={props.imageAlt}
				/>
			) : null}
			<div
				className={cn.content}
				style={{
					gridTemplateColumns: !!props.icon
						? 'minmax(1rem, 1fr) var(--font-size-lg)'
						: 'minmax(1rem, 1fr)',
				}}
			>
				<div className={cn.textContainer}>
					<span className={cn.title} title={props.title}>
						{props.title}
					</span>
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
