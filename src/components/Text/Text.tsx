import React, { FC } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Text.scss';

export interface TextProps extends Component {}

export const Text: FC<TextProps> = (props) => {
	return (
		<p
			style={props.style}
			className={cx(cn.text, props.className)}
			title={`${
				typeof props.children === 'string' ? props.children : ''
			}`}
		>
			{props.children}
		</p>
	);
};
