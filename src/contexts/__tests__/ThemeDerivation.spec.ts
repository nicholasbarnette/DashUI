import { cleanup } from '@testing-library/react';
import {
	ThemeDerivations,
	deriveColor,
	derivePattern,
} from '../../theme/ThemeDerivation';
import { DefaultLightTheme, Theme } from '../../theme/Theme';

afterEach(cleanup);

describe('ThemeDerivation', () => {
	it('spacing', () => {
		const spacing = ThemeDerivations.spacing(16, 1, 16);
		expect(spacing).toStrictEqual({
			lg: 'calc(var(--spacing-md) * 1 * 2)',
			md: 'calc(1rem * 1)',
			sm: 'calc(var(--spacing-md) / 1 * 2)',
			xl: 'calc(var(--spacing-lg) * 1 * 2)',
			xs: 'calc(var(--spacing-sm) / 1 * 2)',
			xxl: 'calc(var(--spacing-xl) * 1 * 2)',
			xxs: 'calc(var(--spacing-xs) / 1 * 2)',
		});
	});

	it('font-size', () => {
		const fontSize = ThemeDerivations['font-size'](16, 1, 16);
		expect(fontSize).toStrictEqual({
			lg: 'calc(var(--font-size-md) * 1 * 2)',
			md: 'calc(1rem * 1)',
			sm: 'calc(var(--font-size-md) / 1 * 2)',
			xl: 'calc(var(--font-size-lg) * 1 * 2)',
			xs: 'calc(var(--font-size-sm) / 1 * 2)',
		});
	});

	it('color', () => {
		const color = ThemeDerivations.color(DefaultLightTheme.theme.color);
		expect(color).toStrictEqual(DefaultLightTheme.theme.color);
	});

	it('text', () => {
		const text = ThemeDerivations.text(
			DefaultLightTheme.theme.text,
			DefaultLightTheme,
		);
		expect(text).toStrictEqual({
			alternate: '#ffffff',
			default: '#ffffff',
			inverse: '#131722',
			label: '#ffffff',
			placeholder: '#a1a1a1',
		});
	});

	it('background', () => {
		const bg = ThemeDerivations.background(
			DefaultLightTheme.theme.background,
			DefaultLightTheme,
		);
		expect(bg).toStrictEqual({
			navigation: '#0b324c',
			'overlay-neutral': 'rgba(0, 0, 0, 0.25)',
			'overlay-primary': 'rgba(120, 0, 210, 0.25)',
			page: '#258fd8',
			shadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.75)',
		});
	});

	it('input', () => {
		const input = ThemeDerivations.input(
			DefaultLightTheme.theme.input,
			DefaultLightTheme,
		);
		expect(input).toStrictEqual({
			bd: '#131722',
			bg: 'hsla(0, 100%, 100%, 1)',
			fg: '#131722',
			focus: '#c375ff',
		});
	});

	it('focus', () => {
		const focus = ThemeDerivations.focus(
			DefaultLightTheme.theme.focus,
			DefaultLightTheme,
		);
		expect(focus).toStrictEqual({
			dark: '#131722',
			light: '#ffffff',
			style: 'dotted',
			width: '1px',
		});
	});

	it('pattern', () => {
		const patternNeutral = ThemeDerivations['pattern-neutral'](
			DefaultLightTheme.theme['pattern-neutral'],
			DefaultLightTheme,
		);
		expect(patternNeutral).toStrictEqual({
			'disabled-bd': '#131722',
			'disabled-bg': 'hsla(0, 100%, 100%, 1)',
			'disabled-fg': '#131722',
			'disabled-op': '0.3',
			'hover-bd': '#131722',
			'hover-bg': 'hsla(0, 100%, 100%, 0.9)',
			'hover-fg': '#131722',
			'hover-op': '1',
			'normal-bd': '#131722',
			'normal-bg': 'hsla(0, 100%, 100%, 1)',
			'normal-fg': '#131722',
			'normal-op': '1',
			'pressed-bd': '#131722',
			'pressed-bg': 'hsla(0, 100%, 100%, 0.8)',
			'pressed-fg': '#131722',
			'pressed-op': '1',
		});
		const patternPrimary = ThemeDerivations['pattern-primary'](
			DefaultLightTheme.theme['pattern-primary'],
			DefaultLightTheme,
		);
		expect(patternPrimary).toStrictEqual({
			'disabled-bd': '#7800d2',
			'disabled-bg': '#7800d2',
			'disabled-fg': '#ffffff',
			'disabled-op': '1',
			'hover-bd': '#560094',
			'hover-bg': '#560094',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': '#7800d2',
			'normal-bg': '#7800d2',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': '#5c009e',
			'pressed-bg': '#5c009e',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
		const patternSecondary = ThemeDerivations['pattern-secondary'](
			DefaultLightTheme.theme['pattern-secondary'],
			DefaultLightTheme,
		);
		expect(patternSecondary).toStrictEqual({
			'disabled-bd': '#258fd8',
			'disabled-bg': '#258fd8',
			'disabled-fg': '#ffffff',
			'disabled-op': '1',
			'hover-bd': '#258fd8',
			'hover-bg': '#258fd8',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': '#258fd8',
			'normal-bg': '#258fd8',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': '#258fd8',
			'pressed-bg': '#258fd8',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
	});

	it('custom theme deriveColor', () => {
		const CustomTheme: Theme = { ...DefaultLightTheme, type: 'custom' };
		const text = ThemeDerivations.text(CustomTheme.theme.text, CustomTheme);
		expect(text).toStrictEqual({
			alternate: '#7800d2',
			default: '#7800d2',
			inverse: '#7800d2',
			label: '#7800d2',
			placeholder: '#7800d2',
		});
	});

	it('custom theme derivePattern', () => {
		const CustomTheme: Theme = { ...DefaultLightTheme, type: 'custom' };
		const patternSecondary = ThemeDerivations['pattern-secondary'](
			CustomTheme.theme['pattern-secondary'],
			CustomTheme,
		);
		expect(patternSecondary).toStrictEqual({
			'disabled-bd': '#258fd8',
			'disabled-bg': '#258fd8',
			'disabled-fg': '#258fd8',
			'disabled-op': '1',
			'hover-bd': '#258fd8',
			'hover-bg': '#258fd8',
			'hover-fg': '#258fd8',
			'hover-op': '1',
			'normal-bd': '#258fd8',
			'normal-bg': '#258fd8',
			'normal-fg': '#258fd8',
			'normal-op': '1',
			'pressed-bd': '#258fd8',
			'pressed-bg': '#258fd8',
			'pressed-fg': '#258fd8',
			'pressed-op': '1',
		});
	});
});

describe('deriveColor', () => {
	it('returns proper values', () => {
		const color = deriveColor(
			DefaultLightTheme.theme.focus,
			DefaultLightTheme,
		);
		expect(color).toStrictEqual({
			dark: '#131722',
			light: '#ffffff',
			style: 'dotted',
			width: '1px',
		});
	});
});

describe('derivePattern', () => {
	it('returns proper values', () => {
		const pattern = derivePattern(
			DefaultLightTheme.theme['pattern-primary'],
			DefaultLightTheme,
		);
		expect(pattern).toStrictEqual({
			'disabled-bd': '#7800d2',
			'disabled-bg': '#7800d2',
			'disabled-fg': '#ffffff',
			'disabled-op': '1',
			'hover-bd': '#560094',
			'hover-bg': '#560094',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': '#7800d2',
			'normal-bg': '#7800d2',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': '#5c009e',
			'pressed-bg': '#5c009e',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
	});
});
