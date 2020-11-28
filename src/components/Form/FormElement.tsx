import React, { FC, Fragment } from 'react';
import { Component } from '../../types';

// Components
import { Label } from '../Label';
import { Input, InputProps } from '../Input';
import { Switch, SwitchProps } from '../Switch';
import { TextArea, TextAreaProps } from '../TextArea';

// Styles
import cx from 'classnames';
import cn from './Form.scss';

export interface FormElementProps extends Component {
	id: string;
	label: string;
	element:
		| { element: 'input'; props?: InputProps }
		| { element: 'switch'; props?: SwitchProps }
		| { element: 'textarea'; props?: TextAreaProps };
	required?: boolean;
}

export const FormElement: FC<FormElementProps> = (props) => {
	return (
		<div
			className={cx(cn.container, props.className)}
			style={props.style}
			data-testid={props.testId}
		>
			<Label
				id={props.id}
				className={cx(cn.label, props.required && cn.required)}
			>
				{`${props.label} ${props.required ? '*' : ''}`}
			</Label>
			{props.element.element === 'input' && (
				<Input
					{...props.element.props}
					id={props.id}
					name={props.id}
					value={props.element.props?.value || ''}
					onChange={props.element.props?.onChange || (() => {})}
					className={cn.input}
				/>
			)}
			{props.element.element === 'switch' && (
				<Switch
					onSwitch={() => {}}
					{...props.element.props}
					id={props.id}
					name={props.id}
				/>
			)}
			{props.element.element === 'textarea' && (
				<TextArea
					{...props.element.props}
					id={props.id}
					name={props.id}
					value={props.element.props?.value || ''}
					onChange={props.element.props?.onChange || (() => {})}
					className={cn.input}
				/>
			)}
		</div>
	);
};
