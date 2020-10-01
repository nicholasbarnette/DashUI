import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Instagram: SVGType = {
	name: 'Instagram',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width='32'
				height='32'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d='M2 8C2 4.68629 4.68629 2 8 2H24C27.3137 2 30 4.68629 30 8V24C30 27.3137 27.3137 30 24 30H8C4.68629 30 2 27.3137 2 24H4.5C4.5 25.933 6.067 27.5 8 27.5H23.5C25.7091 27.5 27.5 25.7091 27.5 23.5V8.5C27.5 6.29086 25.7091 4.5 23.5 4.5H8.5C6.29086 4.5 4.5 6.29086 4.5 8.5V24H2V8Z' />
				<path d='M9 16C9 12.134 12.134 9 16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23C12.134 23 9 19.866 9 16H11.5C11.5 18.6796 13.8095 20.7758 16.4766 20.5168C21.9427 19.9861 21.9427 12.0139 16.4766 11.4832C13.8095 11.2242 11.5 13.3204 11.5 16H9Z' />
				<path d='M25.3332 8.43678C25.3332 9.41439 24.5407 10.2069 23.5631 10.2069C22.5855 10.2069 21.793 9.41439 21.793 8.43678C21.793 7.45917 22.5855 6.66667 23.5631 6.66667C24.5407 6.66667 25.3332 7.45917 25.3332 8.43678Z' />
			</svg>
		);
	},
};

export default Instagram;
