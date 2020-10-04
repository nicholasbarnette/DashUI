import React, { FC, useRef, ReactElement } from 'react';
import { Component } from '../../types';

// Components
import { NavigationDrawer } from '.';

// Styles
import cx from 'classnames';
import cn from './NavigationBar.scss';

interface NavigationBarProps extends Component {
	left?: ReactElement;
	center?: ReactElement;
	right?: ReactElement;
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
	return (
		<div
			className={cx(cn.navigationContainer, props.className)}
			data-testid={props.testId}
			style={props.style}
		>
			<div className={cn.banner}>
				{!!props.left ? (
					<div className={cn.left}>{props.left}</div>
				) : null}
				{!!props.center ? (
					<div className={cn.center}>{props.center}</div>
				) : null}
				{!!props.right ? (
					<div className={cn.right}>{props.right}</div>
				) : null}
			</div>
		</div>
	);
};
