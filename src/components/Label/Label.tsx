import React, { FC, CSSProperties } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Label.scss';

export interface LabelProps extends Component {
	id: string;
	children: string;
}

export const Label: FC<LabelProps> = (props) => {
	return (
		<label
			htmlFor={props.id}
			data-testid={props.testId}
			className={cx(cn.label, props.className)}
			title={props.children}
			style={props.style}
		>
			{props.children}
		</label>
	);
};
