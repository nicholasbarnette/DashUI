import React, { CSSProperties, FC, ReactElement, useEffect } from 'react';
import { Component } from '../../types';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { Theme } from '../../theme';

// Styles
import cx from 'classnames';
import cn from './AppRoot.scss';

export interface AppRootProps extends Component {
	customTheme?: Theme;
	/**
	 * Assumses the position of a banner
	 */
	topNavigation?: ReactElement;
	/**
	 * Overrides content passed in through the children property
	 */
	leftNavigation?: ReactElement;
	contentStyle?: CSSProperties;
}

export const AppRoot: FC<AppRootProps> = (props) => {
	return (
		<ThemeProvider themeOverride={props.customTheme}>
			<div
				data-testid={props.testId}
				className={cx(cn.app, props.className)}
				style={{ ...props.style }}
			>
				{props.topNavigation ? props.topNavigation : null}
				{props.leftNavigation ? (
					props.leftNavigation
				) : (
					<div className={cn.content} style={props.contentStyle}>
						{props.children}
					</div>
				)}
			</div>
		</ThemeProvider>
	);
};
