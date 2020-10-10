import React, { FC } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { AppRoot } from '..';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { DefaultDarkTheme, DefaultLightTheme, Theme } from '../../../theme';

afterEach(cleanup);

const TestAppRoot: FC<{
	testId?: string;
	lightTheme?: Theme;
	darkTheme?: Theme;
}> = (props) => {
	return (
		<AppRoot
			customLightTheme={props.lightTheme}
			customDarkTheme={props.darkTheme}
		>
			<ThemeContext.Consumer>
				{({ theme, setTheme }) => {
					return (
						<div
							data-testid={props.testId}
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
		</AppRoot>
	);
};

describe('basic approot', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<AppRoot testId="approot">Basic AppRoot</AppRoot>,
		);
		expect(getByTestId('approot')).toBeTruthy();
	});

	it('renders conent', () => {
		const { getByText } = render(<AppRoot>Basic AppRoot</AppRoot>);
		expect(getByText('Basic AppRoot')).toBeTruthy();
	});

	it('renders custom themes', () => {
		const CustomLightTheme: Theme = {
			...DefaultLightTheme,
			type: 'custom',
			theme: {
				...DefaultLightTheme.theme,
				color: {
					...DefaultLightTheme.theme.color,
					neutral: 'red',
					primary: 'green',
					secondary: 'blue',
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
					neutral: 'orange',
					primary: 'purple',
					secondary: 'yellow',
				},
			},
		};

		const { getByTestId, getByText } = render(
			<TestAppRoot
				testId="theme"
				lightTheme={CustomLightTheme}
				darkTheme={CustomDarkTheme}
			/>,
		);
		let theme = getByTestId('theme');
		expect(theme.getAttribute('data-neutral')).toBe(
			CustomLightTheme.theme.color.neutral,
		);
		expect(theme.getAttribute('data-primary')).toBe(
			CustomLightTheme.theme.color.primary,
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			CustomLightTheme.theme.color.secondary,
		);
		fireEvent.click(getByText('Switch Theme'));
		expect(theme.getAttribute('data-neutral')).toBe(
			CustomDarkTheme.theme.color.neutral,
		);
		expect(theme.getAttribute('data-primary')).toBe(
			CustomDarkTheme.theme.color.primary,
		);
		expect(theme.getAttribute('data-secondary')).toBe(
			CustomDarkTheme.theme.color.secondary,
		);
	});
});
