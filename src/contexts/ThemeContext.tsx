import React, {
	createContext,
	FC,
	useState,
	useMemo,
	useEffect,
	useRef,
} from 'react';
import { MenuButton } from '../components/MenuButton';
import { MenuItem } from '../components/Menu';
import { ThemeDerivations, Derivations } from '../theme/ThemeDerivation';
import { resolveDerivation, getDerivationInfo } from '../theme/utils';
import { DefaultLightTheme, Theme, DefaultDarkTheme } from '../theme/Theme';

interface ThemeProviderContext {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeProviderContext>({
	theme: DefaultLightTheme,
	setTheme: (theme: Theme) => {},
});

export interface ThemeProviderProps {
	theme?: Theme;
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
	const styleBlock = useRef<HTMLStyleElement>(
		(() => {
			let block = document.createElement('style');
			block.type = 'text/css';
			return block;
		})(),
	);

	const setTheme = (theme: Theme) => {
		setCurrentTheme({
			theme,
			setTheme,
		});
	};

	const [currentTheme, setCurrentTheme] = useState<ThemeProviderContext>({
		theme: props.theme ?? DefaultLightTheme,
		setTheme: setTheme,
	});

	const properties = useMemo(() => {
		let theme: { [key: string]: string } = {
			'--base-size': `${
				(props.theme ?? currentTheme.theme).theme.core.baseSize
			}px`,
		};
		Object.keys(ThemeDerivations).map((derivation) => {
			const [base, constant] = getDerivationInfo(
				props.theme ?? currentTheme.theme,
				derivation as keyof Derivations,
			);
			theme = {
				...theme,
				...(resolveDerivation(
					derivation as keyof Derivations,
					ThemeDerivations[derivation as keyof Derivations](
						base,
						constant,
						(props.theme ?? currentTheme.theme).theme.core.baseSize,
					),
				) as { [key: string]: string }),
			};
		});
		return theme;
	}, [props.theme, currentTheme]);

	useEffect(() => {
		document
			.getElementsByTagName('head')[0]
			.appendChild(styleBlock.current);
		styleBlock.current.innerText = convertPropertiesToCSS(properties);
	}, [properties]);

	return (
		<div style={{ height: '100%', width: '100%' }}>
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
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	return (
		<ThemeContext.Consumer>
			{({ theme, setTheme }) => {
				return (
					<MenuButton
						className={props.className}
						testId={props.testId}
						variant="lightweight"
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
										? DefaultDarkTheme
										: DefaultLightTheme,
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
