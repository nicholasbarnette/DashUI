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
					<div className={cn.right}>
						{props.right}
						{/* {!props.loggedIn && <a href={RegisterURI}>Sign Up</a>}
					<ThemeSwitcher
						tooltip="User Menu"
						className={cn.user}
						items={[
							{
								id: 'login',
								type: 'text',
								value: 'Login',
								hide: props.loggedIn,
							},
							{
								id: 'register',
								type: 'text',
								value: 'Register',
								hide: props.loggedIn,
							},
							{
								id: 'profile',
								type: 'text',
								value: 'Profile',
								hide: !props.loggedIn,
							},
							{
								id: 'friend',
								type: 'text',
								value: 'Add a Friend',
								hide: !props.loggedIn,
							},
							{
								id: 'logout',
								type: 'text',
								value: 'Logout',
								hide: !props.loggedIn,
							},
						]}
						onPress={handleUserMenuActions}
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M28.0946 28H2.90536C2.40596 28 1.98963 27.6322 2.00274 27.1329C2.06654 24.7024 3.3445 18 15.5 18C27.6555 18 28.9335 24.7024 28.9973 27.1329C29.0104 27.6322 28.594 28 28.0946 28Z"
								fill="white"
							/>
							<path
								d="M15.5 16C19.0899 16 22 13.0899 22 9.5C22 5.91015 19.0899 3 15.5 3C11.9101 3 9 5.91015 9 9.5C9 13.0899 11.9101 16 15.5 16Z"
								fill="white"
							/>
						</svg>
					</ThemeSwitcher> */}
					</div>
				) : null}
			</div>
		</div>
	);
};
