import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Minus: SVGType = {
	name: 'Minus',
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
				<path d="M3 14C3 13.4477 3.44772 13 4 13H28C28.5523 13 29 13.4477 29 14V18C29 18.5523 28.5523 19 28 19H4C3.44772 19 3 18.5523 3 18V14Z" />
			</svg>
		);
	},
};

export default Minus;
