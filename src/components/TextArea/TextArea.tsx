import React, { FC } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './TextArea.scss';

export interface TextAreaProps extends Component {
	placeholder?: string;
	name?: string;
	id?: string;
	value: string;
	invalid?: boolean;
	rows?: number;
	maxLength?: number;
	onChange?: (value: string) => void;
	resize?: boolean;
}

export const TextArea: FC<TextAreaProps> = (props) => {
	return (
		<textarea
			data-testid={props.testId}
			className={cx(
				cn.textarea,
				props.resize && cn.resize,
				props.invalid && cn.invalid,
				props.className,
			)}
			placeholder={props.placeholder}
			rows={props.rows || 4}
			name={props.name}
			maxLength={props.maxLength}
			id={props.id}
			value={props.value}
			onChange={(evt) => {
				if (
					props.maxLength &&
					evt.target.value.length > props.maxLength
				) {
					return;
				}
				props.onChange?.(evt.target.value);
			}}
			style={props.style}
		></textarea>
	);
};
