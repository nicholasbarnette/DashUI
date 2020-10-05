import { FC, SVGProps as ReactSVGProps, CSSProperties } from 'react';
import { Component } from '../../types';

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

const GenerateRandomId = () => {
	let id = '';
	for (let i = 0; i < 10; i++) {
		id += Math.floor(Math.random() * 16)
			.toString(16)
			.toUpperCase();
	}
	return id;
};

export type SVGDesign = 'inverted' | 'alternate' | 'default';

export type SVGProps = ReactSVGProps<SVGSVGElement> & {
	svg: SVGType;
	design?: SVGDesign;
	tooltip: string;
	fillOverride?: { default: string; inverse: string };
} & Component;

export const SVG: FC<SVGProps> = (props) => {
	const { svg, className, design, fillOverride, style, ...restProps } = props;
	return svg.render({
		role: 'img',
		label: svg.name + GenerateRandomId(),
		style: {
			...({
				'--svg-fill': fillOverride?.default,
				'--svg-fill-inverse': fillOverride?.inverse,
			} as CSSProperties),
			...style,
		},
		className: cx(
			cn.svg,
			fillOverride?.default && cn.customColor,
			getDesignClassName(design),
			className,
		),
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
