import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const TriangleDown: SVGType = {
	name: 'TriangleDown',
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
				<path
					d="M16.3536 22.6464C16.1583 22.8417 15.8417 22.8417 15.6464 22.6464L5.53984 12.5398C5.22486 12.2249 5.44795 11.6863 5.8934 11.6863L26.1066 11.6863C26.5521 11.6863 26.7751 12.2249 26.4602 12.5398L16.3536 22.6464Z"
				/>
			</svg>
		);
	},
};

export default TriangleDown;
