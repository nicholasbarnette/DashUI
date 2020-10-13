import React, {
	createContext,
	FC,
	useState,
	useMemo,
	useEffect,
	CSSProperties,
} from 'react';
import { MenuButton, MenuButtonProps } from '../components/MenuButton';
import { MenuItem } from '../components/Menu';
import { ThemeDerivations, Derivations } from '../theme/ThemeDerivation';
import { resolveDerivation, getDerivationInfo } from '../theme/utils';
import { DefaultLightTheme, Theme, DefaultDarkTheme } from '../theme/Theme';
import { useCookies, useGenerateUniqueId } from '../hooks';

interface ThemeProviderContext {
	theme: Theme;
	setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeProviderContext>({
	theme: DefaultLightTheme,
	setTheme: (theme: 'light' | 'dark') => {},
});

export interface ThemeProviderProps {
	/**
	 * For overriding both the light/dark theme
	 */
	themeOverride?: Theme;
	lightTheme?: Theme;
	darkTheme?: Theme;
	style?: CSSProperties;
	testId?: string;
}

export const convertPropertiesToCSS = (properties: {
	[key: string]: string;
}) => {
	let styles = ':root {\n';
	Object.keys(properties).map((key) => {
		styles += `${key}: ${properties[key]};\n`;
	});
	return styles + '}';
};

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const styleId = useGenerateUniqueId('dash-theme', 20);
	const [cookies, setCookie] = useCookies();

	const setTheme = (theme: 'light' | 'dark') => {
		setCookie('theme', theme);
	};

	const [currentTheme, setCurrentTheme] = useState<ThemeProviderContext>({
		theme: props.themeOverride ?? props.lightTheme ?? DefaultLightTheme,
		setTheme: setTheme,
	});

	const properties = useMemo(() => {
		let theme: { [key: string]: string } = {
			'--base-size': `${
				(props.themeOverride ?? currentTheme.theme).theme.core.baseSize
			}px`,
		};
		Object.keys(ThemeDerivations).map((derivation) => {
			const [base, constant] = getDerivationInfo(
				props.themeOverride ?? currentTheme.theme,
				derivation as keyof Derivations,
			);
			theme = {
				...theme,
				...(resolveDerivation(
					derivation as keyof Derivations,
					ThemeDerivations[derivation as keyof Derivations](
						base,
						constant,
						(props.themeOverride ?? currentTheme.theme).theme.core
							.baseSize,
					),
				) as { [key: string]: string }),
			};
		});
		return theme;
	}, [props.themeOverride, currentTheme]);

	useEffect(() => {
		let block = document.createElement('style');
		block.setAttribute('id', styleId);
		document.getElementsByTagName('head')[0].appendChild(block);

		return () => {
			document.getElementById(styleId)?.remove();
		};
	}, []);

	useEffect(() => {
		const block = document.getElementById(styleId);
		if (block) {
			block.innerText = convertPropertiesToCSS(properties);
		}
	}, [properties, styleId]);

	useEffect(() => {
		if (cookies.theme) {
			setCurrentTheme({
				theme:
					cookies.theme === 'dark'
						? props.themeOverride ??
						  props.darkTheme ??
						  DefaultDarkTheme
						: props.themeOverride ??
						  props.lightTheme ??
						  DefaultLightTheme,
				setTheme,
			});
		}
	}, [cookies]);

	return (
		<div
			style={{ height: '100%', width: '100%', ...props.style }}
			data-testid={props.testId}
		>
			<ThemeContext.Provider value={currentTheme}>
				{props.children}
			</ThemeContext.Provider>
		</div>
	);
};

export interface ThemeSwitcherProps {
	className?: string;
	testId?: string;
	tooltip: string;
	items?: MenuItem[];
	onPress?: (id: string) => void;
	variant?: MenuButtonProps['variant'];
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	return (
		<ThemeContext.Consumer>
			{({ theme, setTheme }) => {
				return (
					<MenuButton
						className={props.className}
						testId={props.testId}
						variant={props.variant ?? 'lightweight'}
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
									theme.baseTheme === 'dark'
										? 'Light'
										: 'Dark'
								} Theme`,
							},
						]}
						onPress={(id: string) => {
							if (id === 'themeswitch')
								setTheme(
									theme.baseTheme === 'light'
										? 'dark'
										: 'light',
								);
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
