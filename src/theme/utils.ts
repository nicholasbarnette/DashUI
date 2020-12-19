import { CSSProperties } from 'react';
import { Theme } from './types';
import { Derivations } from './ThemeDerivation';

/**
 * Converts a pixel value into a rem value.
 *
 * @param baseSize base pixel value of the application
 * @param value pixel value to convert to rem
 * @returns rem value as a number
 */
export const px2rem = (baseSize: number, value: number) => {
	return Math.round((value / baseSize) * 1000) / 1000;
};

/**
 * Converts a rem value into a pixel value.
 *
 * @param baseSize base pixel value of the application
 * @param value rem value to convert to pixels
 * @returns pixel value as a number
 */
export const rem2px = (baseSize: number, value: number) => {
	return value * baseSize;
};

/**
 * Resolves key/value pairs into a list of CSS custom properties.
 *
 * @param prefix derivation prefix (ie. spacing or pattern-neutral)
 * @param obj object containing string key/value pairs (ie. `md: '1rem'`)
 * @returns an CSSProperties object containing CSS custom properties
 */
export const resolveDerivation = (
	prefix: keyof Derivations,
	obj: { [key: string]: string },
) => {
	const o: { [key: string]: string } = {};
	Object.keys(obj).map((key) => {
		o[`--${prefix}-${key}`] = obj[key];
	});
	return o as CSSProperties;
};

/**
 * Returns derivation specific information.
 *
 * @param theme any valid theme
 * @param derivation the key of the type of derivation being performed
 * @returns an array containing [ `base value for the derivation`, `any applicable constants/multipliers`]
 */
export const getDerivationInfo = (
	theme: Theme,
	derivation: keyof Derivations,
): [any, any] => {
	switch (derivation) {
		case 'spacing':
			return [
				theme.theme[derivation].spacingBase,
				theme.theme[derivation].spacingMultiplier,
			];
		case 'font-size':
			return [
				theme.theme[derivation].fontSizeBase,
				theme.theme[derivation].fontSizeMultiplier,
			];
		default:
			return [theme.theme[derivation], theme];
	}
};
