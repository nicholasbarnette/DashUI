import React from 'react';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { DefaultLightTheme, DefaultDarkTheme } from '../src/theme/Theme';

import './storybook.scss';

const PageWrapper = (props) => {
	return (
		<div
			style={{
				background: 'var(--background-page)',
				width: '100%',
				height: '100%',
				padding: '1rem',
				boxSizing: 'border-box',
				overflow: 'auto',
			}}
		>
			{props.children}
		</div>
	);
};

addDecorator(
	withContexts([
		{
			title: 'Theme',
			components: [ThemeProvider, PageWrapper],
			params: [
				{
					name: 'Light',
					default: true,
					props: { themeOverride: DefaultLightTheme },
				},
				{
					name: 'Dark',
					props: { themeOverride: DefaultDarkTheme },
				},
			],
		},
	]),
);
