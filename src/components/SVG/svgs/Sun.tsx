import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Sun: SVGType = {
	name: 'Sun',
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
				<circle cx="16" cy="16" r="10" />
				<rect x="15.5" y="1" width="1" height="4" rx="0.5" />
				<rect
					x="27"
					y="16.5"
					width="1"
					height="4"
					rx="0.5"
					transform="rotate(-90 27 16.5)"
				/>
				<rect
					x="1"
					y="16.5"
					width="1"
					height="4"
					rx="0.5"
					transform="rotate(-90 1 16.5)"
				/>
				<rect
					x="3.60767"
					y="4.31479"
					width="1"
					height="6"
					rx="0.5"
					transform="rotate(-45 3.60767 4.31479)"
				/>
				<rect
					x="24"
					y="24.7071"
					width="1"
					height="6"
					rx="0.5"
					transform="rotate(-45 24 24.7071)"
				/>
				<rect
					x="23.7071"
					y="7.94974"
					width="1"
					height="6"
					rx="0.5"
					transform="rotate(-135 23.7071 7.94974)"
				/>
				<rect
					x="4.70709"
					y="28.9497"
					width="1"
					height="6"
					rx="0.5"
					transform="rotate(-135 4.70709 28.9497)"
				/>
				<rect x="15.5" y="27" width="1" height="4" rx="0.5" />{' '}
			</svg>
		);
	},
};

export default Sun;
