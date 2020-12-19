import React, { FC } from 'react';
import { cleanup, render } from '@testing-library/react';
import { AppRoot } from '..';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { DefaultLightTheme, Theme } from '../../../theme';
import {
	LeftNavigation,
	NavigationBar,
	NavigationLink,
} from '../../Navigation';
import { Home, Profile, Document } from '../../SVG';

afterEach(cleanup);

describe('approot theme support', () => {
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

	it('renders navigation', () => {
		const { getByText, getAllByRole } = render(
			<AppRoot
				topNavigation={
					<NavigationBar
						left={
							<NavigationLink link="/">
								Application Name
							</NavigationLink>
						}
					/>
				}
				leftNavigation={
					<LeftNavigation
						items={[
							{
								svg: Home,
								text: 'Item 1',
								content: <p>Content 1</p>,
							},
							{
								svg: Profile,
								text: 'Item 2',
								content: <p>Content 2</p>,
							},
							{
								svg: Document,
								text: 'Item 3',
								content: <p>Content 3</p>,
							},
						]}
					/>
				}
			>
				Basic AppRoot
			</AppRoot>,
		);
		expect(getByText('Application Name')).toBeTruthy();
		expect(getAllByRole('img').length).toBe(4);
		expect(getByText('Content 1')).toBeTruthy();
	});
});

const TestAppRootTheme: FC<{
	testId?: string;
	customTheme?: Theme;
}> = (props) => {
	return (
		<AppRoot customLightTheme={props.customTheme}>
			<ThemeContext.Consumer>
				{({ theme, setTheme }) => {
					return (
						<div
							data-testid={props.testId}
							data-neutral={theme.theme.color.neutral}
							data-primary={theme.theme.color.primary}
							data-secondary={theme.theme.color.secondary}
						></div>
					);
				}}
			</ThemeContext.Consumer>
		</AppRoot>
	);
};

describe('approot theme support', () => {
	it('renders custom themes', () => {
		const CustomLightTheme: Theme = {
			...DefaultLightTheme,
			type: 'custom',
			theme: {
				...DefaultLightTheme.theme,
				color: {
					...DefaultLightTheme.theme.color,
					neutral: [0, 100, 100],
					primary: [150, 100, 100],
					secondary: [300, 100, 100],
				},
			},
		};

		const { getByTestId } = render(
			<TestAppRootTheme testId="theme" customTheme={CustomLightTheme} />,
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
	});
});
