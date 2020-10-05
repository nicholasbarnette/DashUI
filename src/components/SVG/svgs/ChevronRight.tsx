import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const ChevronRight: SVGType = {
	name: 'ChevronRight',
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
				<path d="M12.2068 27.3215C11.8141 27.6984 11.1921 27.6921 10.8072 27.3072L9.2453 25.7453C8.84018 25.3402 8.85759 24.6782 9.28344 24.2949L16.8482 17.4866C17.731 16.6921 17.731 15.3079 16.8482 14.5134L9.28344 7.7051C8.85759 7.32183 8.84018 6.65982 9.2453 6.2547L10.8072 4.69282C11.1921 4.30792 11.8141 4.30157 12.2068 4.67854L22.4971 14.5572C23.317 15.3443 23.317 16.6557 22.4971 17.4428L12.2068 27.3215Z" />
			</svg>
		);
	},
};

export default ChevronRight;
