import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Home: SVGType = {
	name: 'Home',
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
				<path d="M6.25 16.75L16 8.5L25.75 16.75V28.75H18.25V21.25H13.75V28.75H6.25V16.75Z" />
				<path d="M4.75582 15.2558C4.34678 14.8468 4.36908 14.1771 4.80442 13.7961L15.3415 4.57619C15.7185 4.24629 16.2815 4.24629 16.6585 4.57619L27.1956 13.7961C27.6309 14.1771 27.6532 14.8468 27.2442 15.2558L27.1548 15.3452C26.7853 15.7147 26.1936 15.7374 25.7969 15.3973L16.6508 7.55782C16.2763 7.23683 15.7237 7.23683 15.3492 7.55782L6.2031 15.3973C5.80636 15.7374 5.21469 15.7147 4.8452 15.3452L4.75582 15.2558Z" />
				<path d="M19.75 5C19.75 4.44772 20.1977 4 20.75 4H21.75C22.3023 4 22.75 4.44772 22.75 5V10H20.75C20.1977 10 19.75 9.55228 19.75 9V5Z" />
			</svg>
		);
	},
};

export default Home;
