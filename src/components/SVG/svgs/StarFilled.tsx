import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

import * as cn from '../SVG.scss';

export const StarFilled: SVGType = {
	name: 'StarFilled',
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
					className={cn.stroke}
					d="M16 3L13 12H2L11 18L8 28L16 21L25 28L21 18L30 12H19L16 3Z"
				/>
			</svg>
		);
	},
};

export default StarFilled;
