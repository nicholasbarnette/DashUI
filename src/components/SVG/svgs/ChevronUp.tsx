import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const ChevronUp: SVGType = {
	name: 'ChevronUp',
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
				<path d="M27.3215 19.7932C27.6984 20.1859 27.6921 20.8079 27.3072 21.1928L25.7453 22.7547C25.3402 23.1598 24.6782 23.1424 24.2949 22.7166L17.4866 15.1518C16.6921 14.269 15.3079 14.269 14.5134 15.1518L7.7051 22.7166C7.32183 23.1424 6.65982 23.1598 6.2547 22.7547L4.69282 21.1928C4.30792 20.8079 4.30157 20.1859 4.67854 19.7932L14.5572 9.50289C15.3443 8.68298 16.6557 8.68298 17.4428 9.50289L27.3215 19.7932Z" />
			</svg>
		);
	},
};

export default ChevronUp;
