import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const SnowmanHorizontal: SVGType = {
	name: 'SnowmanHorizontal',
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
				<path d="M23.4194 13.8387C24.8446 13.8387 26 14.9941 26 16.4193C26 17.8446 24.8446 19 23.4194 19C21.9941 19 20.8387 17.8446 20.8387 16.4193C20.8387 14.9941 21.9941 13.8387 23.4194 13.8387Z" />
				<path d="M15.6774 13.8387C17.1027 13.8387 18.2581 14.9941 18.2581 16.4193C18.2581 17.8446 17.1027 19 15.6774 19C14.2522 19 13.0968 17.8446 13.0968 16.4193C13.0968 14.9941 14.2522 13.8387 15.6774 13.8387Z" />
				<path d="M8.58065 13.8387C10.0059 13.8387 11.1613 14.9941 11.1613 16.4193C11.1613 17.8446 10.0059 19 8.58065 19C7.15539 19 6 17.8446 6 16.4193C6 14.9941 7.15539 13.8387 8.58065 13.8387Z" />
			</svg>
		);
	},
};

export default SnowmanHorizontal;
