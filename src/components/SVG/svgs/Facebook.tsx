import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Facebook: SVGType = {
	name: 'Facebook',
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
				<path d="M9 17.6301V12.8621H13.1053V9.19436C13.1053 4.42633 17.2105 3.32601 17.2105 3.32601C19.0766 2.59248 23.1818 3.32603 23.1818 3.32603V7.36051H21.3301C19.6733 7.36051 18.3301 8.70366 18.3301 10.3605V12.8621H22.8086L22.0622 17.6301H18.3301V29H13.1053V17.6301H9Z" />
			</svg>
		);
	},
};

export default Facebook;
