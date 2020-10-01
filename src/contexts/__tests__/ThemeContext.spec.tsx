import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ThemeSwitcher } from '../ThemeContext';

afterEach(cleanup);

describe('theme context', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<ThemeSwitcher tooltip="Theme Switcher" testId="switch" />,
		);
		expect(getByTestId('switch')).toBeTruthy();
	});
});
