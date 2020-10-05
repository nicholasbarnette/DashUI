import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const TriangleRight: SVGType = {
	name: 'TriangleRight',
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
				<path d="M22.6464 15.6464C22.8417 15.8417 22.8417 16.1583 22.6464 16.3536L12.5398 26.4602C12.2249 26.7751 11.6863 26.5521 11.6863 26.1066L11.6863 5.8934C11.6863 5.44795 12.2249 5.22486 12.5398 5.53984L22.6464 15.6464Z" />
			</svg>
		);
	},
};

export default TriangleRight;
