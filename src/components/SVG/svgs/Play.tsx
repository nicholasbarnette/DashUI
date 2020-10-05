import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Play: SVGType = {
	name: 'Play',
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
				<path d="M25.1056 15.0528C25.4741 15.237 25.4741 15.763 25.1056 15.9472L9.72361 23.6382C9.39116 23.8044 9 23.5627 9 23.191V7.80902C9 7.43733 9.39116 7.19558 9.72361 7.3618L25.1056 15.0528Z" />
			</svg>
		);
	},
};

export default Play;
