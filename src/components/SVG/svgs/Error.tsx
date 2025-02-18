import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

import cx from 'classnames';
import * as cn from '../SVG.scss';

export const Error: SVGType = {
	name: 'Error',
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
				<path d="M10.8536 9.64645C10.6583 9.45118 10.3417 9.45118 10.1464 9.64645C9.95118 9.84171 9.95118 10.1583 10.1464 10.3536L10.8536 9.64645ZM22.1464 22.3536C22.3417 22.5488 22.6583 22.5488 22.8536 22.3536C23.0488 22.1583 23.0488 21.8417 22.8536 21.6464L22.1464 22.3536ZM22.8536 10.3536C23.0488 10.1583 23.0488 9.84171 22.8536 9.64645C22.6583 9.45118 22.3417 9.45118 22.1464 9.64645L22.8536 10.3536ZM10.1464 21.6464C9.95118 21.8417 9.95118 22.1583 10.1464 22.3536C10.3417 22.5488 10.6583 22.5488 10.8536 22.3536L10.1464 21.6464ZM16.5 16L16.8536 16.3536L16.5 16ZM10.1464 10.3536L22.1464 22.3536L22.8536 21.6464L10.8536 9.64645L10.1464 10.3536ZM10.8536 22.3536L16.8536 16.3536L16.1464 15.6464L10.1464 21.6464L10.8536 22.3536ZM16.8536 16.3536L22.8536 10.3536L22.1464 9.64645L16.1464 15.6464L16.8536 16.3536ZM29 16C29 23.1797 23.1797 29 16 29V31C24.2843 31 31 24.2843 31 16H29ZM16 29C8.8203 29 3 23.1797 3 16H1C1 24.2843 7.71573 31 16 31V29ZM3 16C3 8.8203 8.8203 3 16 3V1C7.71573 1 1 7.71573 1 16H3ZM16 3C23.1797 3 29 8.8203 29 16H31C31 7.71573 24.2843 1 16 1V3Z" />
			</svg>
		);
	},
};

export default Error;
