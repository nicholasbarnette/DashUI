import React, { FC, useState } from 'react';
import { Component } from '../../types';

// Components
import { Label } from '../Label';

// Styles
import cx from 'classnames';
import cn from './Switch.scss';

export interface SwitchProps extends Component {
	id?: string;
	name?: string;
	onSwitch?: () => void;
	labels?: [string, string];
	defaultChecked?: boolean;
	disabled?: boolean;
}

export const Switch: FC<SwitchProps> = (props) => {
	const [checked, setChecked] = useState(props.defaultChecked || false);
	return (
		<div
			data-testid={props.testId}
			className={cx(
				cn.container,
				props.disabled && cn.disabled,
				props.className,
			)}
			style={props.style}
		>
			{props.labels && (
				<Label id={props.id || ''} className={cn.label}>
					{props.labels[0]}
				</Label>
			)}
			<label
				data-testid={props.testId && `${props.testId}Inner`}
				className={cn.switch}
				tabIndex={0}
				onKeyPress={(evt) => {
					if (
						(evt.which === 13 || evt.which === 32) &&
						!props.disabled
					) {
						props.onSwitch?.();
						setChecked(!checked);
					}
				}}
				role='switch'
				aria-checked={checked ? 'true' : 'false'}
				aria-disabled={props.disabled}
			>
				<input
					checked={checked}
					className={cn.input}
					type='checkbox'
					onChange={() => {
						!props.disabled && setChecked(!checked);
					}}
					onClick={() => {
						!props.disabled && props.onSwitch?.();
					}}
					id={props.id}
					name={props.name}
					tabIndex={-1}
				/>
				<span className={cx(cn.slider, cn.round)}></span>
			</label>
			{props.labels && (
				<Label id={props.id || ''} className={cn.label}>
					{props.labels[1]}
				</Label>
			)}
		</div>
	);
};
