import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const ChevronLeft: SVGType = {
	name: 'ChevronLeft',
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
				<path d="M19.7932 4.67854C20.1859 4.30158 20.8079 4.30792 21.1928 4.69282L22.7547 6.2547C23.1598 6.65982 23.1424 7.32183 22.7166 7.7051L15.1518 14.5134C14.269 15.3079 14.269 16.6921 15.1518 17.4866L22.7166 24.2949C23.1424 24.6782 23.1598 25.3402 22.7547 25.7453L21.1928 27.3072C20.8079 27.6921 20.1859 27.6984 19.7932 27.3215L9.50289 17.4428C8.68298 16.6557 8.68298 15.3443 9.50289 14.5572L19.7932 4.67854Z" />
			</svg>
		);
	},
};

export default ChevronLeft;
