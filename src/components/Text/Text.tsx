import React, { FC, ReactNode } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Text.scss';

export interface TextProps extends Component {
	title?: string;
	children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
	return (
		<p
			style={props.style}
			className={cx(cn.text, props.className)}
			title={
				props.title ??
				`${typeof props.children === 'string' ? props.children : ''}`
			}
		>
			{props.children}
		</p>
	);
};
