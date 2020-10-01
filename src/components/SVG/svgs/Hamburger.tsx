import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Hamburger: SVGType = {
	name: 'Hamburger',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width='36'
				height='36'
				viewBox='0 0 36 36'
				xmlns='http://www.w3.org/2000/svg'
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d='M31 25H5V31H31V25Z' />
				<path d='M31 15H5V21H31V15Z' />
				<path d='M31 5H5V11H31V5Z' />
			</svg>
		);
	},
};

export default Hamburger;
