import React, { FC } from 'react';
import { Component } from '../../types';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { Theme } from '../../theme';

// Styles
import cx from 'classnames';
import cn from './AppRoot.scss';

export interface AppRootProps extends Component {
	customLightTheme?: Theme;
	customDarkTheme?: Theme;
}

export const AppRoot: FC<AppRootProps> = (props) => {
	return (
		<ThemeProvider
			lightTheme={props.customLightTheme}
			darkTheme={props.customDarkTheme}
		>
			<div
				data-testid={props.testId}
				className={cx(cn.app, props.className)}
				style={{ ...props.style }}
			>
				{props.children}
			</div>
		</ThemeProvider>
	);
};
