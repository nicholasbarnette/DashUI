import { FC, SVGProps as ReactSVGProps, CSSProperties } from 'react';
import { Component } from '../../types';
import { useGenerateUniqueId } from '../../hooks';

// Styles
import cx from 'classnames';
import cn from './SVG.scss';

export type SVGObjectProps = {
	tooltip: string;
	role: string;
	label: string;
} & ReactSVGProps<SVGSVGElement> &
	Component;

export interface SVGType {
	name: string;
	render: (props: SVGObjectProps) => JSX.Element;
}

export type SVGDesign = 'inverted' | 'alternate' | 'default';

export type SVGProps = ReactSVGProps<SVGSVGElement> & {
	svg: SVGType;
	design?: SVGDesign;
	tooltip?: string;
	customColor?: { default: string; inverse?: string };
	/**
	 * Pixel based number size
	 */
	size?: number;
} & Component;

export const SVG: FC<SVGProps> = (props) => {
	const {
		svg,
		className,
		design,
		customColor,
		style,
		size,
		...restProps
	} = props;

	const id = useGenerateUniqueId(svg.name, 16);

	return svg.render({
		role: 'img',
		label: id,
		style: {
			...({
				'--svg-custom-color': customColor?.default,
				'--svg-custom-color-inverse':
					customColor?.inverse ?? customColor?.default,
			} as CSSProperties),
			...style,
			...(!!size ? { height: `${size}px`, width: `${size}px` } : {}),
		},
		className: cx(
			cn.svg,
			customColor?.default && cn.customColor,
			getDesignClassName(design),
			className,
		),
		tooltip: '',
		...restProps,
	});
};

const getDesignClassName = (design?: SVGDesign) => {
	switch (design) {
		case 'inverted':
			return cn.inverted;
		case 'alternate':
			return cn.alternate;
		case 'default':
		default:
			return null;
	}
};
