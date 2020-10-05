import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const SnowmanVertical: SVGType = {
	name: 'SnowmanVertical',
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
				<path d="M18.1613 23.4194C18.1613 24.8446 17.0059 26 15.5806 26C14.1554 26 13 24.8446 13 23.4194C13 21.9941 14.1554 20.8387 15.5806 20.8387C17.0059 20.8387 18.1613 21.9941 18.1613 23.4194Z" />
				<path d="M18.1613 15.6774C18.1613 17.1027 17.0059 18.2581 15.5806 18.2581C14.1554 18.2581 13 17.1027 13 15.6774C13 14.2522 14.1554 13.0968 15.5806 13.0968C17.0059 13.0968 18.1613 14.2522 18.1613 15.6774Z" />
				<path d="M18.1613 8.58065C18.1613 10.0059 17.0059 11.1613 15.5806 11.1613C14.1554 11.1613 13 10.0059 13 8.58065C13 7.15539 14.1554 6 15.5806 6C17.0059 6 18.1613 7.15539 18.1613 8.58065Z" />
			</svg>
		);
	},
};

export default SnowmanVertical;
