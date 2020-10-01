import React, { FC } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Input.scss';

export interface InputProps extends Component {
	placeholder?: string;
	type?: 'text' | 'password';
	name?: string;
	id?: string;
	value: string;
	invalid?: boolean;
	onChange?: (value: string) => void;
	readOnly?: boolean;
}

export const Input: FC<InputProps> = (props) => {
	return (
		<input
			data-testid={props.testId}
			className={cx(
				cn.input,
				props.readOnly && cn.readonly,
				props.invalid && cn.invalid,
				props.className,
			)}
			placeholder={props.placeholder}
			type={props.type || 'text'}
			name={props.name}
			id={props.id}
			value={props.value}
			onChange={(evt) => {
				if (!props.readOnly) {
					props.onChange?.(evt.target.value);
				}
			}}
			readOnly={props.readOnly}
			style={props.style}
		/>
	);
};
