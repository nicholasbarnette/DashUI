import { px2rem } from './utils';
import { Theme, Patterns, States, StateValues, ColorDerivation } from './Theme';

export type SpacingSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Spacing = { [key in SpacingSize]: string };

export type FontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type FontSizes = { [key in FontSize]: string };

type Color = keyof Theme['theme']['color'];
type Colors = { [key in Color]: string };

type TextType = keyof Theme['theme']['text'];
type Text = { [key in TextType]: ColorDerivation };

type Background = keyof Theme['theme']['background'];
type Backgrounds = {
	[key in Background]: ColorDerivation;
};

type InputType = keyof Theme['theme']['input'];
type Input = { [key in InputType]: ColorDerivation };

type FocusType = keyof Theme['theme']['focus'];
type Focus = { [key in FocusType]: ColorDerivation };

type PatternColor = keyof Patterns;
type Pattern = { [key: string]: ColorDerivation };

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
	color: (colors: Colors) => Colors;
	text: (text: Text, theme: Theme) => ThemeProperties;
	background: (background: Backgrounds, theme: Theme) => ThemeProperties;
	input: (input: Input, theme: Theme) => ThemeProperties;
	focus: (focus: Focus, theme: Theme) => ThemeProperties;
	'pattern-neutral': (pattern: States, theme: Theme) => ThemeProperties;
	'pattern-primary': (pattern: States, theme: Theme) => ThemeProperties;
	'pattern-secondary': (pattern: States, theme: Theme) => ThemeProperties;
	'pattern-lightweight': (pattern: States, theme: Theme) => ThemeProperties;
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
	color: (colors: Colors) => colors,
	text: (text: Text, theme: Theme) => deriveColor(text, theme),
	background: (background: Backgrounds, theme: Theme) =>
		deriveColor(background, theme),
	input: (input: Input, theme: Theme) => deriveColor(input, theme),
	focus: (focus: Focus, theme: Theme) => deriveColor(focus, theme),
	'pattern-neutral': (pattern: States, theme: Theme) =>
		derivePattern(pattern, theme),
	'pattern-primary': (pattern: States, theme: Theme) =>
		derivePattern(pattern, theme),
	'pattern-secondary': (pattern: States, theme: Theme) =>
		derivePattern(pattern, theme),
	'pattern-lightweight': (pattern: States, theme: Theme) =>
		derivePattern(pattern, theme),
};

export const deriveColor = (
	values: { [key: string]: ColorDerivation },
	theme: Theme,
) => {
	const o: ThemeProperties = {};
	Object.keys(values).map((key) => {
		o[key] = values[key].default;
		if (theme.type === 'custom') {
			o[key] = values[key].derivation?.(theme) ?? o[key];
		}
	});
	return o;
};

export const derivePattern = (pattern: States, theme: Theme) => {
	const o: ThemeProperties = {};
	Object.keys(pattern).map((state) => {
		Object.keys(pattern[state as keyof States]).map((value) => {
			o[`${state as keyof States}-${value as keyof StateValues}`] =
				pattern[state as keyof States][
					value as keyof StateValues
				].default;

			if (theme.type === 'custom') {
				o[`${state as keyof States}-${value as keyof StateValues}`] =
					pattern[state as keyof States][
						value as keyof StateValues
					].derivation?.(theme) ??
					o[`${state as keyof States}-${value as keyof StateValues}`];
			}
		});
	});
	return o;
};
