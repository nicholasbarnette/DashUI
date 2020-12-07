import React, { FC } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { ThemeContext, ThemeProvider, ThemeSwitcher } from '../ThemeContext';
import { DefaultDarkTheme, DefaultLightTheme, Theme } from '../../theme';

afterEach(cleanup);

describe('theme context', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<ThemeSwitcher tooltip="Theme Switcher" testId="switch" />,
		);
		expect(getByTestId('switch')).toBeTruthy();
	});
});

const TestThemeProvider: FC<{
	testId?: string;
	lightThemeOverride?: Theme;
	darkThemeOverride?: Theme;
}> = (props) => {
	const { testId, ...restProps } = props;
	return (
		<ThemeProvider {...restProps}>
			<ThemeContext.Consumer>
				{({ theme, setTheme }) => {
					return (
						<div
							data-testid={testId}
							data-neutral={theme.theme.color.neutral}
							data-primary={theme.theme.color.primary}
							data-secondary={theme.theme.color.secondary}
						>
							<button
								onClick={() =>
									setTheme(
										theme.baseTheme === 'light'
											? 'dark'
											: 'light',
									)
								}
							>
								Switch Theme
							</button>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		</ThemeProvider>
	);
};

describe('theme provider', () => {
	beforeEach(() => {
		Object.defineProperty(document, 'cookie', {
			configurable: true,
			get: jest.fn().mockImplementation(() => {
				return 'theme=light';
			}),
			set: jest.fn().mockImplementation(() => {}),
		});
	});

	it('renders default themes', () => {
		const { getByTestId, getByText } = render(
			<TestThemeProvider testId="theme" />,
		);
		let theme = getByTestId('theme');
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultLightTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultDarkTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultDarkTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultDarkTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultLightTheme.theme.color.secondary.join(','),
		);
	});

	it('renders custom themes', () => {
		const CustomLightTheme: Theme = {
			...DefaultLightTheme,
			type: 'custom',
			theme: {
				...DefaultLightTheme.theme,
				color: {
					...DefaultLightTheme.theme.color,
					neutral: [0, 100, 100],
					primary: [120, 100, 100],
					secondary: [240, 100, 100],
				},
			},
		};
		const CustomDarkTheme: Theme = {
			...DefaultDarkTheme,
			type: 'custom',
			theme: {
				...DefaultDarkTheme.theme,
				color: {
					...DefaultDarkTheme.theme.color,
					neutral: [0, 100, 50],
					primary: [120, 100, 50],
					secondary: [240, 100, 50],
				},
			},
		};

		const { getByTestId, getByText } = render(
			<TestThemeProvider
				testId="theme"
				lightThemeOverride={CustomLightTheme}
				darkThemeOverride={CustomDarkTheme}
			/>,
		);
		let theme = getByTestId('theme');
		expect(theme.getAttribute('data-neutral')).toBe(
			CustomLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			CustomLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			CustomLightTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			CustomDarkTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			CustomDarkTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			CustomDarkTheme.theme.color.secondary.join(','),
		);
	});

	it('renders override theme', () => {
		const { getByTestId, getByText } = render(
			<TestThemeProvider
				testId="theme"
				lightThemeOverride={DefaultLightTheme}
			/>,
		);
		let theme = getByTestId('theme');
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultLightTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultDarkTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultDarkTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultDarkTheme.theme.color.secondary.join(','),
		);
	});

	it('renders custom app themes', () => {
		const ApplicationLightTheme: Theme = {
			...DefaultLightTheme,
			type: 'default',
			theme: {
				...DefaultLightTheme.theme,
				color: {
					...DefaultLightTheme.theme.color,
					neutral: [0, 100, 100],
					primary: [120, 100, 100],
					secondary: [240, 100, 100],
				},
			},
		};
		const ApplicationDarkTheme: Theme = {
			...DefaultDarkTheme,
			type: 'default',
			theme: {
				...DefaultDarkTheme.theme,
				color: {
					...DefaultDarkTheme.theme.color,
					neutral: [0, 100, 50],
					primary: [120, 100, 50],
					secondary: [240, 100, 50],
				},
			},
		};

		const { getByTestId, getByText } = render(
			<TestThemeProvider
				testId="theme"
				lightThemeOverride={ApplicationLightTheme}
				darkThemeOverride={ApplicationDarkTheme}
			/>,
		);
		let theme = getByTestId('theme');
		expect(theme.getAttribute('data-neutral')).toBe(
			ApplicationLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			ApplicationLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			ApplicationLightTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			ApplicationDarkTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			ApplicationDarkTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			ApplicationDarkTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			ApplicationLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			ApplicationLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			ApplicationLightTheme.theme.color.secondary.join(','),
		);
	});

	it('renders saved theme', () => {
		Object.defineProperty(document, 'cookie', {
			configurable: true,
			get: jest.fn().mockImplementation(() => {
				return 'theme=dark';
			}),
			set: jest.fn().mockImplementation(() => {}),
		});
		const { getByTestId, getByText } = render(
			<TestThemeProvider testId="theme" />,
		);
		let theme = getByTestId('theme');
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultDarkTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultDarkTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultDarkTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultLightTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultLightTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultLightTheme.theme.color.secondary.join(','),
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			DefaultDarkTheme.theme.color.neutral.join(','),
		);
		expect(theme.getAttribute('data-primary')).toBe(
			DefaultDarkTheme.theme.color.primary.join(','),
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			DefaultDarkTheme.theme.color.secondary.join(','),
		);
	});
});
