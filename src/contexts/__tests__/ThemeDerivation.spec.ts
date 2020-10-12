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
			sm: 'calc(var(--spacing-md) / 1 / 2)',
			xl: 'calc(var(--spacing-lg) * 1 * 1.5)',
			xs: 'calc(var(--spacing-sm) / 1 / 2)',
			xxl: 'calc(var(--spacing-xl) * 1 * 1.5)',
			xxs: 'calc(var(--spacing-xs) / 1 / 2)',
		});
	});

	it('font-size', () => {
		const fontSize = ThemeDerivations['font-size'](16, 1, 16);
		expect(fontSize).toStrictEqual({
			lg: 'calc(var(--font-size-md) * 1 * 1.5)',
			md: 'calc(1rem * 1)',
			sm: 'calc(var(--font-size-md) / 1 / 1.15)',
			xl: 'calc(var(--font-size-lg) * 1 * 1.5)',
			xs: 'calc(var(--font-size-sm) / 1 / 1.15)',
			xxl: 'calc(var(--font-size-xl) * 1 * 1.5)',
			xxs: 'calc(var(--font-size-xs) / 1 / 1.15)',
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
			alternate: '#131722',
			default: '#131722',
			inverse: '#ffffff',
			label: '#333333',
			placeholder: '#a1a1a1',
		});
	});

	it('background', () => {
		const bg = ThemeDerivations.background(
			DefaultLightTheme.theme.background,
			DefaultLightTheme,
		);
		expect(bg).toStrictEqual({
			container: '#dedede',
			content: '#ffffff',
			navigation: '#000000',
			'overlay-neutral': 'rgba(0, 0, 0, 0.25)',
			'overlay-primary': 'rgba(120, 0, 210, 0.25)',
			page: '#ffffff',
			shadow: '0px 2px 10px -4px rgba(0, 0, 0, 0.5)',
		});
	});

	it('input', () => {
		const input = ThemeDerivations.input(
			DefaultLightTheme.theme.input,
			DefaultLightTheme,
		);
		expect(input).toStrictEqual({
			bd: '#000000',
			bg: 'hsla(0, 100%, 100%, 1)',
			fg: '#000000',
			focus: '#258fd8',
		});
	});

	it('focus', () => {
		const focus = ThemeDerivations.focus(
			DefaultLightTheme.theme.focus,
			DefaultLightTheme,
		);
		expect(focus).toStrictEqual({
			dark: '#000000',
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
			'disabled-bd': 'hsla(0, 0%, 0%, 1)',
			'disabled-bg': 'hsla(0, 0%, 0%, 1)',
			'disabled-fg': '#ffffff',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(0, 0%, 0%, 0.85)',
			'hover-bg': 'hsla(0, 0%, 0%, 0.85)',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': 'hsla(0, 0%, 0%, 1)',
			'normal-bg': 'hsla(0, 0%, 0%, 1)',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': 'hsla(0, 0%, 0%, 0.75)',
			'pressed-bg': 'hsla(0, 0%, 0%, 0.75)',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
		const patternPrimary = ThemeDerivations['pattern-primary'](
			DefaultLightTheme.theme['pattern-primary'],
			DefaultLightTheme,
		);
		expect(patternPrimary).toStrictEqual({
			'disabled-bd': 'hsla(274, 100%, 41%, 1)',
			'disabled-bg': 'hsla(274, 100%, 41%, 1)',
			'disabled-fg': '#ffffff',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(274, 100%, 41%, 0.85)',
			'hover-bg': 'hsla(274, 100%, 41%, 0.85)',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': 'hsla(274, 100%, 41%, 1)',
			'normal-bg': 'hsla(274, 100%, 41%, 1)',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': 'hsla(274, 100%, 41%, 0.75)',
			'pressed-bg': 'hsla(274, 100%, 41%, 0.75)',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
		const patternSecondary = ThemeDerivations['pattern-secondary'](
			DefaultLightTheme.theme['pattern-secondary'],
			DefaultLightTheme,
		);
		expect(patternSecondary).toStrictEqual({
			'disabled-bd': 'hsla(204, 71%, 50%, 1)',
			'disabled-bg': 'hsla(204, 71%, 50%, 1)',
			'disabled-fg': '#ffffff',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(204, 71%, 50%, 0.85)',
			'hover-bg': 'hsla(204, 71%, 50%, 0.85)',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': 'hsla(204, 71%, 50%, 1)',
			'normal-bg': 'hsla(204, 71%, 50%, 1)',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': 'hsla(204, 71%, 50%, 0.75)',
			'pressed-bg': 'hsla(204, 71%, 50%, 0.75)',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
		const patternLightweight = ThemeDerivations['pattern-lightweight'](
			DefaultLightTheme.theme['pattern-lightweight'],
			DefaultLightTheme,
		);
		expect(patternLightweight).toStrictEqual({
			'disabled-bd': 'hsla(0, 0%, 0%, 0)',
			'disabled-bg': 'hsla(0, 0%, 0%, 0)',
			'disabled-fg': '#000000',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(0, 0%, 0%, 0.25)',
			'hover-bg': 'hsla(0, 0%, 0%, 0.25)',
			'hover-fg': '#000000',
			'hover-op': '1',
			'normal-bd': 'hsla(0, 0%, 0%, 0)',
			'normal-bg': 'hsla(0, 0%, 0%, 0)',
			'normal-fg': '#000000',
			'normal-op': '1',
			'pressed-bd': 'hsla(0, 0%, 0%, 0.35)',
			'pressed-bg': 'hsla(0, 0%, 0%, 0.35)',
			'pressed-fg': '#000000',
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
			'disabled-bd': 'hsla(204, 71%, 50%, 1)',
			'disabled-bg': 'hsla(204, 71%, 50%, 1)',
			'disabled-fg': '#ffffff',
			'disabled-op': '0.3',
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
			dark: '#000000',
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
			'disabled-bd': 'hsla(274, 100%, 41%, 1)',
			'disabled-bg': 'hsla(274, 100%, 41%, 1)',
			'disabled-fg': '#ffffff',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(274, 100%, 41%, 0.85)',
			'hover-bg': 'hsla(274, 100%, 41%, 0.85)',
			'hover-fg': '#ffffff',
			'hover-op': '1',
			'normal-bd': 'hsla(274, 100%, 41%, 1)',
			'normal-bg': 'hsla(274, 100%, 41%, 1)',
			'normal-fg': '#ffffff',
			'normal-op': '1',
			'pressed-bd': 'hsla(274, 100%, 41%, 0.75)',
			'pressed-bg': 'hsla(274, 100%, 41%, 0.75)',
			'pressed-fg': '#ffffff',
			'pressed-op': '1',
		});
	});
});
