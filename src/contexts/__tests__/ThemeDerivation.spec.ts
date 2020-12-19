import { cleanup } from '@testing-library/react';
import { ThemeDerivations, derivePattern } from '../../theme/ThemeDerivation';
import { DefaultLightTheme, Theme } from '../../theme';

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
			lg: 'calc(var(--font-size-md) * 1 * 1.25)',
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
		const output: { [key: string]: string } = {};
		Object.keys(DefaultLightTheme.theme.color).map((key) => {
			const c =
				DefaultLightTheme.theme.color[
					key as keyof Theme['theme']['color']
				];
			output[key] = `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, 1)`;
			output[`${key}-src`] = `${c[0]}, ${c[1]}%, ${c[2]}%`;
		});
		expect(color).toStrictEqual(output);
	});

	it('text', () => {
		const text = ThemeDerivations.text(DefaultLightTheme.theme.text);
		expect(text).toStrictEqual({
			alternate: 'hsla(0, 0%, 0%, 1)',
			'alternate-src': '0, 0%, 0%',
			default: 'hsla(0, 0%, 0%, 1)',
			'default-src': '0, 0%, 0%',
			inverse: 'hsla(0, 0%, 100%, 1)',
			'inverse-src': '0, 0%, 100%',
			label: 'hsla(0, 0%, 20%, 1)',
			'label-src': '0, 0%, 20%',
			placeholder: 'hsla(0, 0%, 63%, 1)',
			'placeholder-src': '0, 0%, 63%',
		});
	});

	it('background', () => {
		const bg = ThemeDerivations.background(
			DefaultLightTheme.theme.background,
		);
		expect(bg).toStrictEqual({
			container: 'hsla(0, 0%, 87%, 1)',
			'container-src': '0, 0%, 87%',
			content: 'hsla(0, 0%, 100%, 1)',
			'content-src': '0, 0%, 100%',
			navigation: 'hsla(0, 0%, 0%, 1)',
			'navigation-src': '0, 0%, 0%',
			'overlay-neutral': 'hsla(var(--color-neutral-src), 0.25)',
			'overlay-primary': 'hsla(var(--color-primary-src), 0.25)',
			page: 'hsla(0, 0%, 100%, 1)',
			'page-src': '0, 0%, 100%',
			shadow: '0px 2px 10px -4px rgba(0, 0, 0, 0.5)',
		});
	});

	it('input', () => {
		const input = ThemeDerivations.input(DefaultLightTheme.theme.input);
		expect(input).toStrictEqual({
			bd: 'var(--color-neutral)',
			bg: 'hsla(var(--background-content-src), 1)',
			fg: 'var(--text-default)',
			focus: 'var(--color-secondary)',
		});
	});

	it('focus', () => {
		const focus = ThemeDerivations.focus(DefaultLightTheme.theme.focus);
		expect(focus).toStrictEqual({
			dark: 'var(--text-default)',
			light: 'var(--text-inverse)',
			style: 'dotted',
			width: '1px',
		});
	});

	it('pattern', () => {
		const patternNeutral = ThemeDerivations['pattern-neutral'](
			DefaultLightTheme.theme['pattern-neutral'],
		);
		expect(patternNeutral).toStrictEqual({
			'disabled-bd': 'hsla(var(--color-neutral-src), 1)',
			'disabled-bg': 'hsla(var(--color-neutral-src), 1)',
			'disabled-fg': 'var(--text-inverse)',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(var(--color-neutral-src), 0.85)',
			'hover-bg': 'hsla(var(--color-neutral-src), 0.85)',
			'hover-fg': 'var(--text-inverse)',
			'hover-op': '1',
			'normal-bd': 'hsla(var(--color-neutral-src), 1)',
			'normal-bg': 'hsla(var(--color-neutral-src), 1)',
			'normal-fg': 'var(--text-inverse)',
			'normal-op': '1',
			'pressed-bd': 'hsla(var(--color-neutral-src), 0.75)',
			'pressed-bg': 'hsla(var(--color-neutral-src), 0.75)',
			'pressed-fg': 'var(--text-inverse)',
			'pressed-op': '1',
		});
		const patternPrimary = ThemeDerivations['pattern-primary'](
			DefaultLightTheme.theme['pattern-primary'],
		);
		expect(patternPrimary).toStrictEqual({
			'disabled-bd': 'hsla(var(--color-primary-src), 1)',
			'disabled-bg': 'hsla(var(--color-primary-src), 1)',
			'disabled-fg': 'var(--text-inverse)',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(var(--color-primary-src), 0.85)',
			'hover-bg': 'hsla(var(--color-primary-src), 0.85)',
			'hover-fg': 'var(--text-inverse)',
			'hover-op': '1',
			'normal-bd': 'hsla(var(--color-primary-src), 1)',
			'normal-bg': 'hsla(var(--color-primary-src), 1)',
			'normal-fg': 'var(--text-inverse)',
			'normal-op': '1',
			'pressed-bd': 'hsla(var(--color-primary-src), 0.75)',
			'pressed-bg': 'hsla(var(--color-primary-src), 0.75)',
			'pressed-fg': 'var(--text-inverse)',
			'pressed-op': '1',
		});
		const patternSecondary = ThemeDerivations['pattern-secondary'](
			DefaultLightTheme.theme['pattern-secondary'],
		);
		expect(patternSecondary).toStrictEqual({
			'disabled-bd': 'hsla(var(--color-secondary-src), 1)',
			'disabled-bg': 'hsla(var(--color-secondary-src), 1)',
			'disabled-fg': 'var(--text-inverse)',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(var(--color-secondary-src), 0.85)',
			'hover-bg': 'hsla(var(--color-secondary-src), 0.85)',
			'hover-fg': 'var(--text-inverse)',
			'hover-op': '1',
			'normal-bd': 'hsla(var(--color-secondary-src), 1)',
			'normal-bg': 'hsla(var(--color-secondary-src), 1)',
			'normal-fg': 'var(--text-inverse)',
			'normal-op': '1',
			'pressed-bd': 'hsla(var(--color-secondary-src), 0.75)',
			'pressed-bg': 'hsla(var(--color-secondary-src), 0.75)',
			'pressed-fg': 'var(--text-inverse)',
			'pressed-op': '1',
		});
		const patternLightweight = ThemeDerivations['pattern-lightweight'](
			DefaultLightTheme.theme['pattern-lightweight'],
		);
		expect(patternLightweight).toStrictEqual({
			'disabled-bd': 'hsla(var(--color-neutral-src), 0)',
			'disabled-bg': 'hsla(var(--color-neutral-src), 0)',
			'disabled-fg': 'var(--text-default)',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(var(--color-neutral-src), 0.25)',
			'hover-bg': 'hsla(var(--color-neutral-src), 0.25)',
			'hover-fg': 'var(--text-default)',
			'hover-op': '1',
			'normal-bd': 'hsla(var(--color-neutral-src), 0)',
			'normal-bg': 'hsla(var(--color-neutral-src), 0)',
			'normal-fg': 'var(--text-default)',
			'normal-op': '1',
			'pressed-bd': 'hsla(var(--color-neutral-src), 0.35)',
			'pressed-bg': 'hsla(var(--color-neutral-src), 0.35)',
			'pressed-fg': 'var(--text-default)',
			'pressed-op': '1',
		});
	});

	it('custom theme deriveColor', () => {
		const CustomTheme: Theme = { ...DefaultLightTheme, type: 'custom' };
		const text = ThemeDerivations.text(CustomTheme.theme.text);
		expect(text).toStrictEqual({
			alternate: 'hsla(0, 0%, 0%, 1)',
			'alternate-src': '0, 0%, 0%',
			default: 'hsla(0, 0%, 0%, 1)',
			'default-src': '0, 0%, 0%',
			inverse: 'hsla(0, 0%, 100%, 1)',
			'inverse-src': '0, 0%, 100%',
			label: 'hsla(0, 0%, 20%, 1)',
			'label-src': '0, 0%, 20%',
			placeholder: 'hsla(0, 0%, 63%, 1)',
			'placeholder-src': '0, 0%, 63%',
		});
	});

	it('custom theme derivePattern', () => {
		const CustomTheme: Theme = { ...DefaultLightTheme, type: 'custom' };
		const patternSecondary = ThemeDerivations['pattern-secondary'](
			CustomTheme.theme['pattern-secondary'],
		);
		expect(patternSecondary).toStrictEqual({
			'disabled-bd': 'hsla(var(--color-secondary-src), 1)',
			'disabled-bg': 'hsla(var(--color-secondary-src), 1)',
			'disabled-fg': 'var(--text-inverse)',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(var(--color-secondary-src), 0.85)',
			'hover-bg': 'hsla(var(--color-secondary-src), 0.85)',
			'hover-fg': 'var(--text-inverse)',
			'hover-op': '1',
			'normal-bd': 'hsla(var(--color-secondary-src), 1)',
			'normal-bg': 'hsla(var(--color-secondary-src), 1)',
			'normal-fg': 'var(--text-inverse)',
			'normal-op': '1',
			'pressed-bd': 'hsla(var(--color-secondary-src), 0.75)',
			'pressed-bg': 'hsla(var(--color-secondary-src), 0.75)',
			'pressed-fg': 'var(--text-inverse)',
			'pressed-op': '1',
		});
	});
});

describe('derivePattern', () => {
	it('returns proper values', () => {
		const pattern = derivePattern(
			DefaultLightTheme.theme['pattern-primary'],
		);
		expect(pattern).toStrictEqual({
			'disabled-bd': 'hsla(var(--color-primary-src), 1)',
			'disabled-bg': 'hsla(var(--color-primary-src), 1)',
			'disabled-fg': 'var(--text-inverse)',
			'disabled-op': '0.3',
			'hover-bd': 'hsla(var(--color-primary-src), 0.85)',
			'hover-bg': 'hsla(var(--color-primary-src), 0.85)',
			'hover-fg': 'var(--text-inverse)',
			'hover-op': '1',
			'normal-bd': 'hsla(var(--color-primary-src), 1)',
			'normal-bg': 'hsla(var(--color-primary-src), 1)',
			'normal-fg': 'var(--text-inverse)',
			'normal-op': '1',
			'pressed-bd': 'hsla(var(--color-primary-src), 0.75)',
			'pressed-bg': 'hsla(var(--color-primary-src), 0.75)',
			'pressed-fg': 'var(--text-inverse)',
			'pressed-op': '1',
		});
	});
});
