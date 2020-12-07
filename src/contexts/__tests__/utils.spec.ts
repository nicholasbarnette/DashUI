import { cleanup } from '@testing-library/react';
import {
	px2rem,
	rem2px,
	getDerivationInfo,
	resolveDerivation,
} from '../../theme/utils';
import { DefaultLightTheme } from '../../theme/LightTheme';

afterEach(cleanup);

it('px2rem', () => {
	expect(px2rem(16, 16)).toBe(1);
	expect(px2rem(16, 32)).toBe(2);
	expect(px2rem(16, 24)).toBe(1.5);
	expect(px2rem(16, 0)).toBe(0);
	expect(px2rem(16, 8)).toBe(0.5);
	expect(px2rem(8, 16)).toBe(2);
	expect(px2rem(8, 32)).toBe(4);
	expect(px2rem(8, 24)).toBe(3);
	expect(px2rem(8, 0)).toBe(0);
	expect(px2rem(8, 8)).toBe(1);
});

it('rem2px', () => {
	expect(rem2px(16, 1)).toBe(16);
	expect(rem2px(16, 2)).toBe(32);
	expect(rem2px(16, 1.5)).toBe(24);
	expect(rem2px(16, 0)).toBe(0);
	expect(rem2px(16, 0.5)).toBe(8);
	expect(rem2px(8, 2)).toBe(16);
	expect(rem2px(8, 4)).toBe(32);
	expect(rem2px(8, 3)).toBe(24);
	expect(rem2px(8, 0)).toBe(0);
	expect(rem2px(8, 1)).toBe(8);
});

it('resolveDerivation', () => {
	expect(
		resolveDerivation('color', { neutral: '#FFFFFF', primary: 'red' }),
	).toStrictEqual({
		'--color-neutral': '#FFFFFF',
		'--color-primary': 'red',
	});
	expect(
		resolveDerivation('spacing', { md: '16px', lg: '2rem' }),
	).toStrictEqual({
		'--spacing-md': '16px',
		'--spacing-lg': '2rem',
	});
});

it('getDerivationInfo', () => {
	expect(getDerivationInfo(DefaultLightTheme, 'spacing')).toStrictEqual([
		16,
		1,
	]);
	expect(getDerivationInfo(DefaultLightTheme, 'font-size')).toStrictEqual([
		16,
		1,
	]);
	expect(getDerivationInfo(DefaultLightTheme, 'color')).toStrictEqual([
		DefaultLightTheme.theme.color,
		DefaultLightTheme,
	]);
});
