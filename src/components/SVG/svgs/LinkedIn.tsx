import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const LinkedIn: SVGType = {
	name: 'LinkedIn',
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
				<path d='M18.3798 15.3038C18.3798 15.3038 19.4051 13.2532 22.481 12.5696C25.557 11.8861 27.9494 14.6202 27.9494 14.6202C27.9494 14.6202 29.7452 16.3291 29.7452 18.038V30H24.1899V20.0151C24.1899 20.0151 23.8481 17.0127 21.4557 17.0127C19.0633 17.0127 18.3798 19.7468 18.3798 19.7468V15.3038Z' />
				<path d='M3.34176 12.9114H9.49366V30H3.34176V12.9114Z' />
				<path d='M12.9114 12.9114H18.3797V30H12.9114V12.9114Z' />
				<path d='M9.83544 6.41772C9.83544 8.30528 8.30528 9.83544 6.41772 9.83544C4.53017 9.83544 3 8.30528 3 6.41772C3 4.53017 4.53017 3 6.41772 3C8.30528 3 9.83544 4.53017 9.83544 6.41772Z' />
			</svg>
		);
	},
};

export default LinkedIn;
