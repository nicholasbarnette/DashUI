import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Pause: SVGType = {
	name: 'Pause',
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
				<path d="M8 29C7.44772 29 7 28.5523 7 28V4C7 3.44772 7.44772 3 8 3H12C12.5523 3 13 3.44772 13 4V28C13 28.5523 12.5523 29 12 29H8Z" />
				<path d="M20 29C19.4477 29 19 28.5523 19 28V4C19 3.44772 19.4477 3 20 3H24C24.5523 3 25 3.44772 25 4V28C25 28.5523 24.5523 29 24 29H20Z" />
			</svg>
		);
	},
};

export default Pause;
