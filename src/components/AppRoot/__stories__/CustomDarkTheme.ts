import { Theme } from "../../../theme";

export const CustomDarkTheme: Theme = {
	baseTheme: 'dark',
	type: 'custom',
	theme: {
		core: {
			baseSize: 16,
		},
		color: {
			neutral: '#2a2e39',
			primary: '#7d00d6',
			secondary: '#1976d2',
			alert: '#EC4D4D',
			warning: '#FF8D00',
			success: '#18AA00',
			graph1: '#FF7E7E',
			graph2: '#D49EFF',
			graph3: '#A1EEFF',
			graph4: '#FDFFA6',
			graph5: '#95FF93',
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
			page: '#0e0613',
			navigation: '#3f0c46',
			content: '#2a2e39',
			container: '#222838',
			'overlay-neutral': 'rgba(255, 255, 255, 0.15)',
			'overlay-primary': 'rgba(125, 0, 214, 0.25)',
			shadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.75)',
		},
		text: {
			default: '#ffffff',
			alternate: '#ffffff',
			inverse: '#ffffff',
			placeholder: 'rgba(255, 255, 255, 0.5)',
			label: '#ffffff',
		},
		'pattern-neutral': {
			normal: {
				bd: '#ffffff',
				bg: '#2a2e39',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: '#ffffff',
				bg: 'hsla(0, 100%, 100%, 0.15)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: '#ffffff',
				bg: 'hsla(0, 100%, 100%, 0.25)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: '#ffffff',
				bg: '#2a2e39',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: '#7d00d6',
				bg: '#7d00d6',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: '#8900eb',
				bg: '#8900eb',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: '#8900eb',
				bg: '#8900eb',
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
				bd: '#1976d2',
				bg: '#1976d2',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: '#1976d2',
				bg: '#1976d2',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: '#1976d2',
				bg: '#1976d2',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: '#1976d2',
				bg: '#1976d2',
				fg: '#ffffff',
				op: '1',
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: 'hsla(0, 100%, 100%, 0)',
				bg: 'hsla(0, 100%, 100%, 0)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 100%, 100%, 0.15)',
				bg: 'hsla(0, 100%, 100%, 0.15)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 100%, 100%, 0.25)',
				bg: 'hsla(0, 100%, 100%, 0.25)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 100%, 100%, 0)',
				bg: 'hsla(0, 100%, 100%, 0)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		input: {
			bd: '#2a2e39',
			bg: 'rgba(0, 0, 0, 0.25)',
			fg: '#ffffff',
			focus: '#c375ff',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: '#ffffff',
			dark: '#ffffff',
		},
	},
};
