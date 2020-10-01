import React, { useEffect } from 'react';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { ThemeContext } from '../src/contexts/ThemeContext';

import cn from './storybook.scss';

const PageWrapper = (props) => {
	return (
		<div
			style={{
				background: 'var(--page-bg)',
				width: '100%',
				height: '100%',
				padding: '1rem',
				boxSizing: 'border-box',
			}}
		>
			{props.children}
		</div>
	);
};

const ThemeProvider = (props) => {
	useEffect(() => {
		document
			.getElementsByTagName('body')[0]
			.classList.remove(
				props.themeClass === cn.light ? cn.dark : cn.light,
			);
		document
			.getElementsByTagName('body')[0]
			.classList.add(props.themeClass === cn.light ? cn.light : cn.dark);
	}, [props.themeClass]);

	return (
		<ThemeContext.Provider
			value={{ theme: props.themeClass, toggleTheme: () => {} }}
		>
			{props.children}
		</ThemeContext.Provider>
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
					props: { themeClass: cn.light },
				},
				{
					name: 'Dark',
					props: { themeClass: cn.dark },
				},
			],
		},
	]),
);
