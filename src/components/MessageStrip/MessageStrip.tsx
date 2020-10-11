import React, { FC } from 'react';
import { Component } from '../../types';
import { Close, SVG, Error, Warning, Success, Information } from '../SVG';
import { Button } from '../Button';

// Styles
import cx from 'classnames';
import cn from './MessageStrip.scss';

export type MessageStatus = 'information' | 'error' | 'warning' | 'success';

export interface MessageStripProps extends Component {
	variant?: MessageStatus;
	children: string;
	onClose?: () => void;
	hideClose?: boolean;
}

export const MessageStrip: FC<MessageStripProps> = (props) => {
	return (
		<div
			data-testid={props.testId}
			className={cx(
				cn.messageStrip,
				cn[props.variant || 'information'],
				props.className,
			)}
			style={props.style}
		>
			<SVG
				svg={getIcon(props.variant)}
				className={cn.statusIcon}
				customColor={{
					default: 'var(--text-inverse)',
				}}
			/>
			<span className={cn.message}>{props.children}</span>
			{!props.hideClose ? (
				<Button
					className={cn.closeButton}
					icon={{
						svg: Close,
						customColor: {
							default: 'var(--text-inverse)',
						},
					}}
					variant="lightweight"
					tooltip="Close message strip"
					onPress={props.onClose}
				/>
			) : null}
		</div>
	);
};

const getIcon = (variant?: MessageStatus) => {
	switch (variant) {
		case 'error':
			return Error;
		case 'warning':
			return Warning;
		case 'success':
			return Success;
		case 'information':
		default:
			return Information;
	}
};
