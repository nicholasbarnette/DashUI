import React, { createContext, FC, useState } from 'react';
import { MenuButton } from '../components/MenuButton';
import { MenuItem } from '../components/Menu';

// Styles
import cn from '../assets/tokens.scss';
import cx from 'classnames';

const getThemeCookie = () => {
	const cookie = decodeURIComponent(document.cookie);
	const t = cookie.match(/theme=([a-zA-Z0-9_]*);?/);
	if (t) {
		document
			.getElementsByTagName('body')[0]
			.classList.add(t[1] || cn.light);
		return t[1] === cn.light || t[1] === cn.dark ? t[1] : cn.light;
	}
	document.cookie = `theme=${cn.light};`;
	return cn.light;
};

export const ThemeContext = createContext({
	theme: '',
	toggleTheme: (theme: string) => {},
});

interface ThemeProviderProps {
	sbOverride?: boolean; // Storybook needs to override the default theme provider behavior
	themeClass?: string;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const toggleTheme = (theme: string) => {
		// Override the body tag
		document
			.getElementsByTagName('body')[0]
			.classList.remove(theme === cn.light ? cn.light : cn.dark);
		document
			.getElementsByTagName('body')[0]
			.classList.add(theme === cn.light ? cn.dark : cn.light);

		// Save a cookie
		document.cookie = `theme=${theme === cn.light ? cn.dark : cn.light};`;

		setThemeObj({
			theme: theme === cn.light ? cn.dark : cn.light,
			toggleTheme: toggleTheme,
		});
	};

	const [themeObj, setThemeObj] = useState({
		theme: getThemeCookie(),
		toggleTheme: toggleTheme,
	});

	return (
		<ThemeContext.Provider value={themeObj}>
			{props.children}
		</ThemeContext.Provider>
	);
};

interface ThemeSwitcherProps {
	className?: string;
	testId?: string;
	tooltip: string;
	items?: MenuItem[];
	onPress?: (id: string) => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	return (
		<ThemeContext.Consumer>
			{({ theme, toggleTheme }) => {
				const tgTheme = () => {
					toggleTheme(theme);
				};
				return (
					<MenuButton
						className={cx(cn.user, props.className)}
						testId={props.testId}
						variant='lightweight'
						tooltip={props.tooltip}
						items={[
							...(props.items || []),
							{
								type: 'divider',
							},
							{
								id: 'themeswitch',
								type: 'text',
								value: `${
									getThemeCookie() === cn.dark
										? 'Light'
										: 'Dark'
								} Theme`,
							},
						]}
						onPress={(id: string) => {
							if (id === 'themeswitch') tgTheme();
							props.onPress?.(id);
						}}
					>
						{props.children}
					</MenuButton>
				);
			}}
		</ThemeContext.Consumer>
	);
};
