import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

import cx from 'classnames';
import * as cn from '../SVG.scss';

export const Warning: SVGType = {
	name: 'Warning',
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
				<ellipse cx="16" cy="22.4062" rx="1.5" ry="1.59375" />
				<path d="M15 8C15 7.44772 15.4477 7 16 7V7C16.5523 7 17 7.44772 17 8V18.75C17 19.3023 16.5523 19.75 16 19.75V19.75C15.4477 19.75 15 19.3023 15 18.75V8Z" />
			</svg>
		);
	},
};

export default Warning;
