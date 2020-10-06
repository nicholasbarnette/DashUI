import React, { FC, MouseEvent, KeyboardEvent, CSSProperties } from 'react';
import { Component } from '../../types';
import { SVG, SVGProps, SVGType } from '../SVG';

// Styles
import cx from 'classnames';
import cn from './Button.scss';

export type ButtonVariant = 'primary' | 'neutral' | 'lightweight';
export type ButtonShape = 'default' | 'pill';

export interface ButtonProps extends Component {
	className?: string;
	testId?: string;
	tooltip: string;
	onPress?: (event: MouseEvent | KeyboardEvent) => void;
	type?: 'submit' | 'button';
	variant?: ButtonVariant;
	shape?: ButtonShape;
	disabled?: boolean;
	style?: CSSProperties;
	icon?: { svg: SVGType } & SVGProps;
}

export const Button: FC<ButtonProps> = (props) => {
	return (
		<button
			className={cx(
				cn.button,
				getVariantClassName(props.variant),
				getShapeClassName(props.shape),
				props.disabled && cn.disabled,
				props.className,
			)}
			title={props.tooltip}
			tabIndex={0}
			data-testid={props.testId}
			onClick={(event: MouseEvent) => {
				!props.disabled && props.onPress?.(event);
			}}
			onKeyPress={(event: KeyboardEvent) => {
				(event.which === 13 || event.which === 32) &&
					!props.disabled &&
					props.onPress?.(event);
			}}
			type={props.type || 'button'}
			aria-label={props.tooltip}
			disabled={props.disabled}
			style={props.style}
		>
			{props.icon ? (
				<SVG
					{...props.icon}
					svg={props.icon.svg}
					tooltip=""
					customColor={{
						default: getIconColor(props.variant),
						...props.icon.customColor,
					}}
					style={{
						marginInlineEnd: 'var(--spacing-xs)',
						...props.icon.style,
					}}
				/>
			) : null}
			{props.children}
		</button>
	);
};

export const getIconColor = (variant?: ButtonVariant) => {
	switch (variant) {
		case 'primary':
			return 'var(--pattern-primary-normal-fg)';
		case 'lightweight':
			return 'var(--text-default)';
		default:
			return 'var(--pattern-neutral-normal-fg)';
	}
};

export const getShapeClassName = (shape?: ButtonShape) => {
	switch (shape) {
		case 'pill':
			return cn.pill;
		default:
			return cn.default;
	}
};

export const getVariantClassName = (variant?: ButtonVariant) => {
	switch (variant) {
		case 'primary':
			return cn.primary;
		case 'lightweight':
			return cn.lightweight;
		default:
			return cn.neutral;
	}
};
