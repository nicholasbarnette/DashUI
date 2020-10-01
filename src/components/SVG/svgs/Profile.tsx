import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

export const Profile: SVGType = {
	name: 'Profile',
	render: (props: SVGObjectProps) => {
		const { tooltip, label, ...restProps } = props;
		return (
			<svg
				{...restProps}
				aria-labelledby={`${label}SVG`}
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<title id={`${label}SVG`}>{props.tooltip}</title>
				<path d='M28.0946 28H2.90536C2.40596 28 1.98963 27.6322 2.00274 27.1329C2.06654 24.7024 3.3445 18 15.5 18C27.6555 18 28.9335 24.7024 28.9973 27.1329C29.0104 27.6322 28.594 28 28.0946 28Z' />
				<path d='M15.5 16C19.0899 16 22 13.0899 22 9.5C22 5.91015 19.0899 3 15.5 3C11.9101 3 9 5.91015 9 9.5C9 13.0899 11.9101 16 15.5 16Z' />
			</svg>
		);
	},
};

export default Profile;
