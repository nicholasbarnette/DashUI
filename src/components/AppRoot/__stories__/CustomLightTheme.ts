import { Theme } from '../../../theme';

export const CustomLightTheme: Theme = {
	baseTheme: 'light',
	type: 'custom',
	theme: {
		core: {
			baseSize: 16,
		},
		color: {
			neutral: '#ffffff',
			primary: '#7800d2',
			secondary: '#258fd8',
			alert: '#FF6464',
			warning: '#FFB444',
			success: '#2DB643',
			graph1: '#FE5757',
			graph2: '#BE6CFF',
			graph3: '#00ACD1',
			graph4: '#E8A700',
			graph5: '#04B100',
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
			page: '#258fd8',
			navigation: '#0b324c',
			content: '#ffffff',
			container: '#dedede',
			'overlay-neutral': 'rgba(0, 0, 0, 0.25)',
			'overlay-primary': 'rgba(120, 0, 210, 0.25)',
			shadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.75)',
		},
		text: {
			default: '#131722',
			alternate: '#131722',
			inverse: '#ffffff',
			placeholder: '#a1a1a1',
			label: '#ffffff',
		},
		'pattern-neutral': {
			normal: {
				bd: '#131722',
				bg: 'hsla(0, 100%, 100%, 1)',
				fg: '#131722',
				op: '1',
			},
			hover: {
				bd: '#131722',
				bg: 'hsla(0, 100%, 100%, 0.9)',
				fg: '#131722',
				op: '1',
			},
			pressed: {
				bd: '#131722',
				bg: 'hsla(0, 100%, 100%, 0.8)',
				fg: '#131722',
				op: '1',
			},
			disabled: {
				bd: '#131722',
				bg: 'hsla(0, 100%, 100%, 1)',
				fg: '#131722',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: '#7800d2',
				bg: '#7800d2',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: '#560094',
				bg: '#560094',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: '#5c009e',
				bg: '#5c009e',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: '#7800d2',
				bg: '#7800d2',
				fg: '#ffffff',
				op: '1',
			},
		},
		'pattern-secondary': {
			normal: {
				bd: '#258fd8',
				bg: '#258fd8',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: '#258fd8',
				bg: '#258fd8',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: '#258fd8',
				bg: '#258fd8',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: '#258fd8',
				bg: '#258fd8',
				fg: '#ffffff',
				op: '1',
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: 'hsla(0, 0%, 0%, 0)',
				bg: 'hsla(0, 0%, 0%, 0)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 0%, 0%, 0.25)',
				bg: 'hsla(0, 0%, 0%, 0.25)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 0%, 0%, 0.35)',
				bg: 'hsla(0, 0%, 0%, 0.35)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 0%, 0%, 0)',
				bg: 'hsla(0, 0%, 0%, 0)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		input: {
			bd: '#131722',
			bg: 'hsla(0, 100%, 100%, 1)',
			fg: '#131722',
			focus: '#c375ff',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: '#ffffff',
			dark: '#131722',
		},
	},
};
