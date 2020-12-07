import { px2rem } from './utils';
import { Theme, Patterns, States, StateValues, ColorDerivation } from './types';

type HSL = [number, number, number];

export type SpacingSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Spacing = { [key in SpacingSize]: string };

export type FontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FontSizes = { [key in FontSize]: string };

type Color = keyof Theme['theme']['color'];
type Colors = { [key in Color]: HSL };

type TextType = keyof Theme['theme']['text'];
type Text = { [key in TextType]: HSL };

type Background = keyof Theme['theme']['background'];
type Backgrounds = {
	[key in Background]: HSL | string;
};

type InputType = keyof Theme['theme']['input'];
type Input = { [key in InputType]: string };

type FocusType = keyof Theme['theme']['focus'];
type Focus = { [key in FocusType]: string };

interface ThemeProperties {
	[key: string]: string;
}

export interface Derivations {
	spacing: (
		spacingBase: number,
		spacingMultiplier: number,
		baseSize: number,
	) => Spacing;
	'font-size': (
		fontSizeBase: number,
		fontSizeMultiplier: number,
		baseSize: number,
	) => FontSizes;
	color: (colors: Colors) => { [key: string]: string };
	text: (text: Text) => ThemeProperties;
	background: (background: Backgrounds) => ThemeProperties;
	input: (input: Input) => ThemeProperties;
	focus: (focus: Focus) => ThemeProperties;
	'pattern-neutral': (pattern: States) => ThemeProperties;
	'pattern-primary': (pattern: States) => ThemeProperties;
	'pattern-secondary': (pattern: States) => ThemeProperties;
	'pattern-lightweight': (pattern: States) => ThemeProperties;
}

export const ThemeDerivations: Derivations = {
	spacing: (
		spacingBase: number,
		spacingMultiplier: number,
		baseSize: number,
	): Spacing => {
		return {
			xxs: `calc(var(--spacing-xs) / ${spacingMultiplier} / 2)`,
			xs: `calc(var(--spacing-sm) / ${spacingMultiplier} / 2)`,
			sm: `calc(var(--spacing-md) / ${spacingMultiplier} / 2)`,
			md: `calc(${px2rem(
				spacingBase,
				baseSize,
			)}rem * ${spacingMultiplier})`,
			lg: `calc(var(--spacing-md) * ${spacingMultiplier} * 2)`,
			xl: `calc(var(--spacing-lg) * ${spacingMultiplier} * 1.5)`,
			xxl: `calc(var(--spacing-xl) * ${spacingMultiplier} * 1.5)`,
		};
	},
	'font-size': (
		fontSizeBase: number,
		fontSizeMultiplier: number,
		baseSize: number,
	): FontSizes => {
		return {
			xxs: `calc(var(--font-size-xs) / ${fontSizeMultiplier} / 1.15)`,
			xs: `calc(var(--font-size-sm) / ${fontSizeMultiplier} / 1.15)`,
			sm: `calc(var(--font-size-md) / ${fontSizeMultiplier} / 1.15)`,
			md: `calc(${px2rem(
				fontSizeBase,
				baseSize,
			)}rem * ${fontSizeMultiplier})`,
			lg: `calc(var(--font-size-md) * ${fontSizeMultiplier} * 1.5)`,
			xl: `calc(var(--font-size-lg) * ${fontSizeMultiplier} * 1.5)`,
			xxl: `calc(var(--font-size-xl) * ${fontSizeMultiplier} * 1.5)`,
		};
	},
	color: (colors: Colors) => convertToColor<Colors>(colors),
	text: (text: Text) => convertToColor<Text>(text),
	background: (background: Backgrounds) =>
		convertToColor<Backgrounds>(background),
	input: (input: Input) => input,
	focus: (focus: Focus) => focus,
	'pattern-neutral': (pattern: States) => derivePattern(pattern),
	'pattern-primary': (pattern: States) => derivePattern(pattern),
	'pattern-secondary': (pattern: States) => derivePattern(pattern),
	'pattern-lightweight': (pattern: States) => derivePattern(pattern),
};

export const deriveColor = (
	values: { [key: string]: string },
	theme: Theme,
) => {
	const o: ThemeProperties = {};
	Object.keys(values).map((key) => {
		o[key] = values[key];
		if (theme.type === 'custom') {
			o[key] = values[key] ?? o[key];
		}
	});
	return o;
};

export const derivePattern = (pattern: States) => {
	const o: ThemeProperties = {};
	Object.keys(pattern).map((state) => {
		Object.keys(pattern[state as keyof States]).map((value) => {
			o[`${state as keyof States}-${value as keyof StateValues}`] =
				pattern[state as keyof States][value as keyof StateValues];
		});
	});
	return o;
};

export const convertToColor = <T extends { [key: string]: HSL | string }>(
	colors: T,
) => {
	const colorsConverted: { [key: string]: string } = {};
	Object.keys(colors).map((key) => {
		const c = colors[key as keyof T];
		if (!(typeof c === 'string')) {
			colorsConverted[key] = `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, 1)`;
			colorsConverted[`${key}-src`] = `${c[0]}, ${c[1]}%, ${c[2]}%`;
		} else {
			colorsConverted[key] = c;
		}
	});
	return colorsConverted;
};
