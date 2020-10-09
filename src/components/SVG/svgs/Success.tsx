import React from 'react';
import { SVGType, SVGObjectProps } from '../SVG';

import cx from 'classnames';
import * as cn from '../SVG.scss';

export const Success: SVGType = {
	name: 'Success',
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
				<path d="M9.79963 15.922C9.60437 15.7267 9.28779 15.7267 9.09252 15.922C8.89726 16.1173 8.89726 16.4338 9.09252 16.6291L9.79963 15.922ZM13.6615 21.1981C13.8568 21.3934 14.1734 21.3934 14.3686 21.1981C14.5639 21.0028 14.5639 20.6862 14.3686 20.491L13.6615 21.1981ZM13.7079 20.4767C13.5127 20.672 13.5127 20.9886 13.7079 21.1839C13.9032 21.3791 14.2198 21.3791 14.415 21.1839L13.7079 20.4767ZM23.553 12.0459C23.7483 11.8506 23.7483 11.534 23.553 11.3388C23.3578 11.1435 23.0412 11.1435 22.8459 11.3388L23.553 12.0459ZM9.09252 16.6291L13.6615 21.1981L14.3686 20.491L9.79963 15.922L9.09252 16.6291ZM14.415 21.1839L23.553 12.0459L22.8459 11.3388L13.7079 20.4767L14.415 21.1839ZM29 16C29 23.1797 23.1797 29 16 29V31C24.2843 31 31 24.2843 31 16H29ZM16 29C8.8203 29 3 23.1797 3 16H1C1 24.2843 7.71573 31 16 31V29ZM3 16C3 8.8203 8.8203 3 16 3V1C7.71573 1 1 7.71573 1 16H3ZM16 3C23.1797 3 29 8.8203 29 16H31C31 7.71573 24.2843 1 16 1V3Z" />
			</svg>
		);
	},
};

export default Success;
