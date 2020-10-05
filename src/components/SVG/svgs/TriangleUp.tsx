import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const TriangleUp: SVGType = {
	name: 'TriangleUp',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d="M15.6464 9.35355C15.8417 9.15829 16.1583 9.15829 16.3536 9.35355L26.4602 19.4602C26.7751 19.7751 26.5521 20.3137 26.1066 20.3137L5.8934 20.3137C5.44795 20.3137 5.22486 19.7751 5.53984 19.4602L15.6464 9.35355Z" />
			</svg>
		);
	},
};

export default TriangleUp;
