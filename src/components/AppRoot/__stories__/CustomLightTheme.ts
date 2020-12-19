import { Theme } from '../../../theme';

export const CustomLightTheme: Theme = {
	baseTheme: 'light',
	type: 'custom',
	theme: {
		core: {
			baseSize: 16,
		},
		color: {
			neutral: [0, 0, 0],
			primary: [274, 100, 41],
			secondary: [204, 70, 49],
			alert: [0, 100, 69],
			warning: [35, 100, 63],
			success: [129, 60, 44],
			graph1: [0, 98, 66],
			graph2: [273, 100, 71],
			graph3: [190, 100, 40],
			graph4: [43, 100, 45],
			graph5: [118, 100, 34],
		},
		spacing: {
			spacingBase: 16,
			spacingMultiplier: 1,
		},
		'font-size': {
			fontSizeBase: 12,
			fontSizeMultiplier: 1,
		},
		background: {
			page: [0, 0, 100],
			navigation: [185, 27, 35],
			container: [0, 0, 87],
			content: [0, 0, 100],
			'overlay-neutral': 'hsla(var(--color-neutral-src), 0.25)',
			'overlay-primary': 'hsla(var(--color-primary-src), 0.25)',
			shadow: '0px 2px 10px -4px rgba(0, 0, 0, 0.5)',
		},
		text: {
			default: [0, 0, 0],
			alternate: [0, 0, 0],
			inverse: [0, 0, 100],
			placeholder: [0, 0, 63],
			label: [0, 0, 20],
		},
		'pattern-neutral': {
			normal: {
				bd: 'hsla(var(--color-neutral-src), 1)',
				bg: 'hsla(var(--color-neutral-src), 1)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-neutral-src), 0.85)',
				bg: 'hsla(var(--color-neutral-src), 0.85)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-neutral-src), 0.75)',
				bg: 'hsla(var(--color-neutral-src), 0.75)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-neutral-src), 1)',
				bg: 'hsla(var(--color-neutral-src), 1)',
				fg: 'var(--text-inverse)',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: 'hsla(var(--color-primary-src), 1)',
				bg: 'hsla(var(--color-primary-src), 1)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-primary-src), 0.85)',
				bg: 'hsla(var(--color-primary-src), 0.85)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-primary-src), 0.75)',
				bg: 'hsla(var(--color-primary-src), 0.75)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-primary-src), 1)',
				bg: 'hsla(var(--color-primary-src), 1)',
				fg: 'var(--text-inverse)',
				op: '0.3',
			},
		},
		'pattern-secondary': {
			normal: {
				bd: 'hsla(var(--color-secondary-src), 1)',
				bg: 'hsla(var(--color-secondary-src), 1)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			hover: {
				bd: 'hsla(var(--color-secondary-src), 0.85)',
				bg: 'hsla(var(--color-secondary-src), 0.85)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-secondary-src), 0.75)',
				bg: 'hsla(var(--color-secondary-src), 0.75)',
				fg: 'var(--text-inverse)',
				op: '1',
			},
			disabled: {
				bd: 'hsla(var(--color-secondary-src), 1)',
				bg: 'hsla(var(--color-secondary-src), 1)',
				fg: 'var(--text-inverse)',
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
				bd: 'hsla(var(--color-neutral-src), 0.25)',
				bg: 'hsla(var(--color-neutral-src), 0.25)',
				fg: 'var(--text-default)',
				op: '1',
			},
			pressed: {
				bd: 'hsla(var(--color-neutral-src), 0.35)',
				bg: 'hsla(var(--color-neutral-src), 0.35)',
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
			bd: 'var(--color-neutral)',
			bg: 'hsla(0, 0%, 100%, 1)',
			fg: 'var(--text-default)',
			focus: 'var(--color-secondary)',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: 'var(--text-inverse)',
			dark: 'var(--text-default)',
		},
	},
};
