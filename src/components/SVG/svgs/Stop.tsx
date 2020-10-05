import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Stop: SVGType = {
	name: 'Stop',
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
				<path d="M7 26C6.44772 26 6 25.5523 6 25V7C6 6.44772 6.44772 6 7 6H25C25.5523 6 26 6.44772 26 7V25C26 25.5523 25.5523 26 25 26H7Z" />
			</svg>
		);
	},
};

export default Stop;
