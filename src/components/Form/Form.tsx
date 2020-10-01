import React, { FC, MouseEvent, KeyboardEvent } from 'react';
import { Component } from '../../types';

// Components
import { Button, ButtonProps } from '../Button';

// Styles
import cx from 'classnames';
import cn from './Form.scss';

export interface FormProps extends Component {
	onSubmit?: (event: MouseEvent | KeyboardEvent) => void;
	hideSubmit?: boolean;
	submitButtonShape?: ButtonProps['shape'];
}

export const Form: FC<FormProps> = (props) => {
	return (
		<form
			data-testid={props.testId}
			className={cx(cn.form, props.className)}
			style={props.style}
		>
			{props.children}
			{!props.hideSubmit && (
				<Button
					shape={props.submitButtonShape}
					onPress={(event: MouseEvent | KeyboardEvent) => {
						event.preventDefault();
						props.onSubmit?.(event);
					}}
					tooltip='Submit form'
					type='submit'
					className={cn.button}
					variant='primary'
				>
					Submit
				</Button>
			)}
		</form>
	);
};
