import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Plus: SVGType = {
	name: 'Plus',
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
				<path d="M2.49994 15.5C2.49995 14.9477 2.94766 14.5 3.49994 14.5L14.4999 14.5L14.4999 3.50006C14.4999 2.94778 14.9476 2.50006 15.4999 2.50006L16.5 2.50006C17.0522 2.50006 17.5 2.94778 17.5 3.50006L17.4999 14.5L28.4999 14.5C29.0522 14.5 29.4999 14.9477 29.4999 15.5V16.5C29.4999 17.0523 29.0522 17.5 28.4999 17.5L17.4999 17.5L17.4999 28.5001C17.4999 29.0523 17.0522 29.5001 16.4999 29.5001L15.5 29.5001C14.9477 29.5 14.5 29.0523 14.5 28.5001L14.4999 17.5L3.49994 17.5C2.94765 17.5 2.49994 17.0523 2.49994 16.5L2.49994 15.5Z" />
			</svg>
		);
	},
};

export default Plus;
