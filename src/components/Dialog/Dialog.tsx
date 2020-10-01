import React, { FC, CSSProperties } from 'react';
import { Component } from '../../types';

// Components
import { Button, ButtonProps } from '../Button';

// Styles
import cx from 'classnames';
import cn from './Dialog.scss';

export interface DialogProps extends Component {
	title: string;
	showDialog?: boolean;
	closeButton?: { text: string; props: ButtonProps };
	submitButton?: { text: string; props: ButtonProps };
	width?: CSSProperties['width'];
}

export const Dialog: FC<DialogProps> = (props) => {
	return (
		<div
			className={cn.overlay}
			style={{
				display: props.showDialog ? 'flex' : 'none',
			}}
			data-testid={props.testId}
		>
			<div
				className={cx(cn.dialog, props.className)}
				style={{ width: props.width, ...props.style }}
			>
				<header className={cn.header}>{props.title}</header>
				<div className={cn.body}>{props.children}</div>
				<footer className={cn.footer}>
					{props.submitButton && (
						<Button {...props.submitButton.props}>
							{props.submitButton?.text}
						</Button>
					)}
					<Button
						{...props.closeButton?.props}
						tooltip={
							props.closeButton?.props.tooltip || 'Close Dialog'
						}
					>
						{props.closeButton?.text || 'Close'}
					</Button>
				</footer>
			</div>
		</div>
	);
};
