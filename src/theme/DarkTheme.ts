import { Theme } from './types';

export const DefaultDarkTheme: Theme = {
	baseTheme: 'dark',
	type: 'default',
	theme: {
		core: {
			baseSize: 16,
		},
		color: {
			neutral: [224, 15, 35],
			primary: [275, 100, 41],
			secondary: [209, 78, 46],
			alert: [0, 80, 61],
			warning: [33, 100, 50],
			success: [111, 100, 33],
			graph1: [0, 100, 74],
			graph2: [273, 100, 80],
			graph3: [190, 100, 81],
			graph4: [61, 100, 82],
			graph5: [118, 100, 78],
		},
		spacing: {
			spacingBase: 16,
			spacingMultiplier: 1,
		},
		'font-size': {
			fontSizeBase: 16,
			fontSizeMultiplier: 1,
		},
		background: {
			page: [224, 28, 10],
			navigation: [224, 15, 19],
			content: [223, 24, 17],
			container: [223, 24, 17],
			'overlay-neutral': 'hsla(var(--color-neutral-src), 0.15)',
			'overlay-primary': 'hsla(var(--color-primary-src), 0.75)',
			shadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.75)',
		},
		text: {
			default: [0, 0, 100],
			alternate: [0, 0, 100],
			inverse: [0, 0, 100],
			placeholder: [0, 0, 49],
			label: [0, 0, 74],
		},
		'pattern-neutral': {
			normal: {
				bd: 'hsla(var(--color-neutral-src), 1)',
				bg: 'hsla(var(--color-neutral-src), 1)',
				fg: 'var(--text-default)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-neutral-src), 0.9)',
				bg: 'hsla(var(--color-neutral-src), 0.9)',
				fg: 'var(--text-default)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-neutral-src), 0.75)',
				bg: 'hsla(var(--color-neutral-src), 0.75)',
				fg: 'var(--text-default)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-neutral-src), 0.15)',
				bg: 'hsla(var(--color-neutral-src), 0.15)',
				fg: 'var(--text-default)',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: 'hsla(var(--color-primary-src), 1)',
				bg: 'hsla(var(--color-primary-src), 1)',
				fg: 'var(--text-default)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-primary-src), 0.85)',
				bg: 'hsla(var(--color-primary-src), 0.85)',
				fg: 'var(--text-default)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-primary-src), 0.75)',
				bg: 'hsla(var(--color-primary-src), 0.75)',
				fg: 'var(--text-default)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-primary-src), 1)',
				bg: 'hsla(var(--color-primary-src), 1)',
				fg: 'var(--text-default)',
				op: '0.3',
			},
		},
		'pattern-secondary': {
			normal: {
				bd: 'hsla(var(--color-secondary-src), 1)',
				bg: 'hsla(var(--color-secondary-src), 1)',
				fg: 'var(--text-default)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-secondary-src), 0.85)',
				bg: 'hsla(var(--color-secondary-src), 0.85)',
				fg: 'var(--text-default)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-secondary-src), 0.75)',
				bg: 'hsla(var(--color-secondary-src), 0.75)',
				fg: 'var(--text-default)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-secondary-src), 1)',
				bg: 'hsla(var(--color-secondary-src), 1)',
				fg: 'var(--text-default)',
				op: '0.3',
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: 'hsla(var(--color-neutral-src), 0)',
				bg: 'hsla(var(--color-neutral-src), 0)',
				fg: 'var(--text-default)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-neutral-src), 0.15)',
				bg: 'hsla(var(--color-neutral-src), 0.15)',
				fg: 'var(--text-default)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-neutral-src), 0.25)',
				bg: 'hsla(var(--color-neutral-src), 0.25)',
				fg: 'var(--text-default)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-neutral-src), 0)',
				bg: 'hsla(var(--color-neutral-src), 0)',
				fg: 'var(--text-default)',
				op: '0.3',
			},
		},
		input: {
			bd: 'hsla(var(--color-neutral-src), 1)',
			bg: 'hsla(var(--color-neutral-src), 0.4)',
			fg: 'var(--text-default)',
			focus: 'var(--color-secondary)',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: 'var(--text-default)',
			dark: 'var(--text-default)',
		},
	},
};
