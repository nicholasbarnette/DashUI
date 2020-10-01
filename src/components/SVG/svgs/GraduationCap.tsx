import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const GraduationCap: SVGType = {
	name: 'GraduationCap',
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
				<path d='M28.625 72.0038C28.625 71.6235 29.0327 71.3824 29.366 71.5657L74.2771 96.2668C74.7272 96.5144 75.2728 96.5144 75.7229 96.2668L120.634 71.5657C120.967 71.3824 121.375 71.6235 121.375 72.0038V116.188C121.375 116.464 121.151 116.688 120.875 116.688H29.125C28.8489 116.688 28.625 116.464 28.625 116.188V72.0038Z' />
				<path d='M14.5625 86.5751C14.5625 85.7467 15.2341 85.0751 16.0625 85.0751H21.4375C22.2659 85.0751 22.9375 85.7467 22.9375 86.5751V107.513H14.5625V86.5751Z' />
				<circle cx='18.75' cy='82.2314' r='4.1875' />
				<path d='M25.7812 60.9375H30.4688L21.0938 79.6875H16.4062L25.7812 60.9375Z' />
				<path d='M15.3457 58.5938L75 33.3554L134.654 58.5938L75 83.8321L15.3457 58.5938Z' />
			</svg>
		);
	},
};

export default GraduationCap;
