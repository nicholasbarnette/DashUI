import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const ChevronDown: SVGType = {
	name: 'ChevronDown',
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
				<path d="M4.67854 12.2068C4.30158 11.8141 4.30792 11.1921 4.69282 10.8072L6.2547 9.2453C6.65982 8.84018 7.32183 8.85759 7.7051 9.28344L14.5134 16.8482C15.3079 17.731 16.6921 17.731 17.4866 16.8482L24.2949 9.28344C24.6782 8.85759 25.3402 8.84018 25.7453 9.2453L27.3072 10.8072C27.6921 11.1921 27.6984 11.8141 27.3215 12.2068L17.4428 22.4971C16.6557 23.317 15.3443 23.317 14.5572 22.4971L4.67854 12.2068Z" />
			</svg>
		);
	},
};

export default ChevronDown;
