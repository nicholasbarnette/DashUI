import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Moon: SVGType = {
	name: 'Moon',
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
				<path d="M13 19C20.1837 26.263 26.7962 21.1488 28.6545 20.9997C28.869 20.9825 28.9642 21.2021 28.8942 21.4056C27.3931 25.7724 19.311 32.9205 9.36592 26.9534C-1.64569 20.3465 5.54755 3.18461 12.3094 2.05824C12.6461 2.00216 12.8886 2.33439 12.7853 2.65967C10.6134 9.50001 10.1902 16.1591 13 19Z" />
			</svg>
		);
	},
};

export default Moon;
