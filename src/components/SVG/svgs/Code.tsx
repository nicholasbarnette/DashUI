import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Code: SVGType = {
	name: 'Code',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width='150'
				height='150'
				viewBox='0 0 150 150'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d='M42.1875 46.875H51.5625L23.4375 75L51.5625 103.125H42.1875L14.0625 75L42.1875 46.875Z' />
				<path d='M107.812 103.125H98.4375L126.562 75L98.4375 46.875L107.812 46.875L135.938 75L107.812 103.125Z' />
				<path d='M78.125 37.5H84.375L72.2917 112.5H65.625L78.125 37.5Z' />
			</svg>
		);
	},
};

export default Code;
