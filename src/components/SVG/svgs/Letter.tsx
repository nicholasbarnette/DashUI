import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Letter: SVGType = {
	name: 'Letter',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width='150'
				height='150'
				viewBox='0 0 150 150'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d='M14.0625 43.1875C14.0625 42.6352 14.5102 42.1875 15.0625 42.1875H16.0837C16.2934 42.1875 16.4978 42.2534 16.668 42.376L74.4157 83.9543C74.7647 84.2056 75.2353 84.2056 75.5843 83.9543L133.332 42.376C133.502 42.2534 133.707 42.1875 133.916 42.1875H134.938C135.49 42.1875 135.938 42.6352 135.938 43.1875V106.812C135.938 107.365 135.49 107.812 134.938 107.812H15.0625C14.5102 107.812 14.0625 107.365 14.0625 106.812V43.1875Z' />
				<path d='M20.7149 37.5H130.25C130.802 37.5 131.25 37.9477 131.25 38.5V39.3266C131.25 39.651 131.093 39.9552 130.828 40.1427L75.578 79.2781C75.2317 79.5234 74.7683 79.5234 74.422 79.2781L19.172 40.1427C18.9073 39.9552 18.75 39.651 18.75 39.3266V38.5C18.75 37.9477 19.1977 37.5 19.75 37.5H20.7149Z' />
			</svg>
		);
	},
};

export default Letter;
