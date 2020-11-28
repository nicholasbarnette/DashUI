import React, { FC, useEffect, useState, RefObject } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './Popover.scss';

export interface PopoverProps extends Component {
	isOpen?: boolean;
	originRef?: RefObject<HTMLElement>;
	popoverId?: string;
	onClose?: () => void;
}

export const Popover: FC<PopoverProps> = (props) => {
	const [position, setPosition] = useState({
		top: -1,
		right: -1,
		bottom: -1,
		left: -1,
	});

	useEffect(() => {
		if (props.originRef) {
			const bounds = props.originRef.current?.getBoundingClientRect()!;
			setPosition({
				top:
					bounds.top <= window.screen.height / 2
						? bounds.bottom - bounds.top
						: -1,
				right: bounds.left > window.screen.width / 2 ? 0 : -1,
				bottom:
					bounds.top > window.screen.height / 2
						? bounds.bottom - bounds.top
						: -1,
				left: bounds.left <= window.screen.width / 2 ? 0 : -1,
			});
		}
	}, [props.originRef]);

	return (
		<div
			data-testid={props.testId}
			className={cx(
				cn.popover,
				!props.isOpen && cn.closed,
				props.className,
			)}
			data-popoverid={props.popoverId}
			style={{
				top: position.top !== -1 ? position.top : undefined,
				right: position.right !== -1 ? position.right : undefined,
				bottom: position.bottom !== -1 ? position.bottom : undefined,
				left: position.left !== -1 ? position.left : undefined,
				...props.style,
			}}
			role="dialog"
			aria-labelledby={props.popoverId}
			onKeyPress={(event) => {
				event?.stopPropagation();
			}}
			onClick={(event) => {
				event?.stopPropagation();
			}}
		>
			{props.children}
		</div>
	);
};
