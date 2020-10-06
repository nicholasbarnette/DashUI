import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

import * as cn from '../SVG.scss';

export const HeartFilled: SVGType = {
	name: 'HeartFilled',
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
					d="M4.10397 18.3333C-0.95159 10.5556 4.10397 1.99998 8.77064 2C13.4373 2.00002 15.3817 6.27781 15.3817 6.27781C15.3817 6.27781 17.3262 2.00001 21.9929 2C26.6595 1.99999 32.4928 9.77773 26.6595 18.3333C20.8262 26.8889 15.3817 30 15.3817 30C15.3817 30 9.15953 26.1111 4.10397 18.3333Z"
				/>
			</svg>
		);
	},
};

export default HeartFilled;
