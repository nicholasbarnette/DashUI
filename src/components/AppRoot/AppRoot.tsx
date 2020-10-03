import React, { FC } from 'react';
import { Component } from '../../types';
// import { ThemeProvider } from '../../contexts/ThemeContext';

// Styles
import cx from 'classnames';
import cn from './AppRoot.scss';

export interface AppRootProps extends Component {}

export const AppRoot: FC<AppRootProps> = (props) => {
	return (
		// <ThemeProvider>
		<div
			data-testid={props.testId}
			className={cx(cn.app, props.className)}
			style={{ ...props.style }}
		>
			{props.children}
		</div>
		// </ThemeProvider>
	);
};
