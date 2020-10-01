import React from 'react';
import { SVGObjectProps, SVGType } from '..';

export const YouTube: SVGType = {
	name: 'Twitter',
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
				<mask
					id='mask0'
					mask-type='alpha'
					maskUnits='userSpaceOnUse'
					x='2'
					y='0'
					width='31'
					height='32'
				>
					<rect
						x='15.8613'
						y='0.841797'
						width='18.7025'
						height='10.7376'
						transform='rotate(30 15.8613 0.841797)'
						fill='#C4C4C4'
					/>
					<rect
						x='10.6042'
						y='21.8546'
						width='17.471'
						height='11.5667'
						transform='rotate(-30 10.6042 21.8546)'
						fill='#C4C4C4'
					/>
					<rect
						x='2'
						y='26.0004'
						width='20'
						height='11'
						transform='rotate(-90 2 26.0004)'
						fill='#C4C4C4'
					/>
					<rect
						x='21'
						y='26'
						width='20'
						height='9'
						transform='rotate(-90 21 26)'
						fill='#C4C4C4'
					/>
				</mask>
				<g mask='url(#mask0)'>
					<path
						d='M7.79311 6.00043L16.0005 6.00042L24.2069 6.00037C24.2069 6.00037 28.069 6.00042 29.0345 7.99993C29.0345 7.99993 30 9.00011 30 15.4998C30 23.0001 29.0345 24.0001 29.0345 24.0001C28.069 25.9998 24.2069 26.0004 24.2069 26.0004H16.0005L7.79311 25.9998C7.79311 25.9998 3.93104 26 2.96552 23.9998C2.96552 23.9998 2 21.9995 2 15.4998C2 9.00011 2.96552 7.99993 2.96552 7.99993C3.93104 6.00042 7.79311 6.00043 7.79311 6.00043Z'
						fill='white'
					/>
				</g>
			</svg>
		);
	},
};
