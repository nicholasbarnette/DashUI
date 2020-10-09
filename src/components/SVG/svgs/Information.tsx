import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

import cx from 'classnames';
import * as cn from '../SVG.scss';

export const Information: SVGType = {
	name: 'Information',
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
				<circle
					cx="16"
					cy="16"
					r="13.5"
					className={cx(cn.stroke, cn.noFill)}
				/>
				<circle
					cx="16"
					cy="10.5"
					r="1.5"
					transform="rotate(-180 16 10.5)"
				/>
				<path d="M17 22C17 22.5523 16.5523 23 16 23V23C15.4477 23 15 22.5523 15 22L15 14C15 13.4477 15.4477 13 16 13V13C16.5523 13 17 13.4477 17 14L17 22Z" />
			</svg>
		);
	},
};

export default Information;
