import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const TriangleLeft: SVGType = {
	name: 'TriangleLeft',
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
				<path d="M9.35355 16.3536C9.15829 16.1583 9.15829 15.8417 9.35355 15.6464L19.4602 5.53984C19.7751 5.22486 20.3137 5.44795 20.3137 5.8934L20.3137 26.1066C20.3137 26.5521 19.7751 26.7751 19.4602 26.4602L9.35355 16.3536Z" />
			</svg>
		);
	},
};

export default TriangleLeft;
