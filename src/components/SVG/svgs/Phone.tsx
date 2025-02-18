import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Phone: SVGType = {
	name: 'Phone',
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
				<path d="M5.54677 6.74223C6.26026 6.02874 7.15775 5.52723 8.13934 5.29351L9.32735 5.01065C9.49412 4.97095 9.66728 5.04459 9.75437 5.19225L12.2168 9.36756C12.5958 10.0102 12.492 10.8279 11.9644 11.3555L10.419 12.9009C10.0106 13.3093 9.87625 13.9176 10.0747 14.46C11.2228 17.5981 13.5921 20.138 16.643 21.5012L18.5175 22.3387L20.5331 20.323C21.1781 19.6781 22.1777 19.5512 22.9633 20.0145L26.8958 22.3336C27.0434 22.4207 27.1171 22.5939 27.0774 22.7606L26.7791 24.0132C26.5555 24.9526 26.0755 25.8115 25.3927 26.4943C23.9592 27.9278 21.8247 28.4049 19.9649 27.5979C16.882 26.2601 12.2468 23.9877 9.7493 21.4902C7.32472 19.0656 5.43033 14.9443 4.32587 12.1132C3.59688 10.2445 4.12841 8.16059 5.54677 6.74223Z" />
			</svg>
		);
	},
};

export default Phone;
