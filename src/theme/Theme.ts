export type BaseTheme = 'light' | 'dark';

export interface ColorDerivation {
	default: string;
	derivation?: (theme: Theme) => string;
}

export interface StateValues {
	bd: string;
	bg: string;
	fg: string;
	op: string;
}

export interface States {
	normal: StateValues;
	hover: StateValues;
	pressed: StateValues;
	disabled: StateValues;
}

export interface Patterns {
	'pattern-neutral': States;
	'pattern-primary': States;
	'pattern-secondary': States;
	'pattern-lightweight': States;
}

interface InnerTheme extends Patterns {
	core: {
		baseSize: number;
	};
	color: {
		neutral: string;
		primary: string;
		secondary: string;
		alert: string;
		warning: string;
		success: string;
		graph1: string;
		graph2: string;
		graph3: string;
		graph4: string;
		graph5: string;
	};
	spacing: {
		spacingBase: number;
		spacingMultiplier: number;
	};
	'font-size': {
		fontSizeBase: number;
		fontSizeMultiplier: number;
	};
	background: {
		page: string;
		navigation: string;
		content: string;
		container: string;
		'overlay-neutral': string;
		'overlay-primary': string;
		shadow: string;
	};
	text: {
		default: string;
		alternate: string;
		inverse: string;
		placeholder: string;
		label: string;
	};
	input: {
		bd: string;
		bg: string;
		fg: string;
		focus: string;
	};
	focus: {
		width: string;
		style: string;
		light: string;
		dark: string;
	};
}

export interface Theme {
	baseTheme: BaseTheme;
	type: 'default' | 'custom';
	theme: InnerTheme;
}

export const DefaultLightTheme: Theme = {
	baseTheme: 'light',
	type: 'default',
	theme: {
		core: {
			baseSize: 16,
		},
		color: {
			neutral: '#000000',
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
			page: '#ffffff',
			navigation: '#000000',
			container: '#dedede',
			content: '#ffffff',
			'overlay-neutral': 'rgba(0, 0, 0, 0.25)',
			'overlay-primary': 'rgba(120, 0, 210, 0.25)',
			shadow: '0px 2px 10px -4px rgba(0, 0, 0, 0.5)',
		},
		text: {
			default: '#131722',
			alternate: '#131722',
			inverse: '#ffffff',
			placeholder: '#a1a1a1',
			label: '#333333',
		},
		'pattern-neutral': {
			normal: {
				bd: 'hsla(0, 0%, 0%, 1)',
				bg: 'hsla(0, 0%, 0%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 0%, 0%, 0.85)',
				bg: 'hsla(0, 0%, 0%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 0%, 0%, 0.75)',
				bg: 'hsla(0, 0%, 0%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 0%, 0%, 1)',
				bg: 'hsla(0, 0%, 0%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: 'hsla(274, 100%, 41%, 1)',
				bg: 'hsla(274, 100%, 41%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(274, 100%, 41%, 0.85)',
				bg: 'hsla(274, 100%, 41%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(274, 100%, 41%, 0.75)',
				bg: 'hsla(274, 100%, 41%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(274, 100%, 41%, 1)',
				bg: 'hsla(274, 100%, 41%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-secondary': {
			normal: {
				bd: 'hsla(204, 71%, 50%, 1)',
				bg: 'hsla(204, 71%, 50%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(204, 71%, 50%, 0.85)',
				bg: 'hsla(204, 71%, 50%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(204, 71%, 50%, 0.75)',
				bg: 'hsla(204, 71%, 50%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(204, 71%, 50%, 1)',
				bg: 'hsla(204, 71%, 50%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: 'hsla(0, 0%, 0%, 0)',
				bg: 'hsla(0, 0%, 0%, 0)',
				fg: '#000000',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 0%, 0%, 0.25)',
				bg: 'hsla(0, 0%, 0%, 0.25)',
				fg: '#000000',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 0%, 0%, 0.35)',
				bg: 'hsla(0, 0%, 0%, 0.35)',
				fg: '#000000',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 0%, 0%, 0)',
				bg: 'hsla(0, 0%, 0%, 0)',
				fg: '#000000',
				op: '0.3',
			},
		},
		input: {
			bd: '#000000',
			bg: 'hsla(0, 100%, 100%, 1)',
			fg: '#000000',
			focus: '#258fd8',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: '#ffffff',
			dark: '#000000',
		},
	},
};

export const DefaultDarkTheme: Theme = {
	baseTheme: 'dark',
	type: 'default',
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
			page: '#131722',
			navigation: '#2a2e39',
			content: '#222838',
			container: '#222838',
			'overlay-neutral': 'rgba(255, 255, 255, 0.15)',
			'overlay-primary': 'rgba(125, 0, 214, 0.25)',
			shadow: '0px 0px 32px -9px rgba(0, 0, 0, 0.75)',
		},
		text: {
			default: '#ffffff',
			alternate: '#ffffff',
			inverse: '#ffffff',
			placeholder: '#7d7d7d',
			label: '#bfbfbf',
		},
		'pattern-neutral': {
			normal: {
				bd: 'hsla(0, 100%, 100%, 0.15)',
				bg: 'hsla(0, 100%, 100%, 0.15)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 100%, 100%, 0.25)',
				bg: 'hsla(0, 100%, 100%, 0.25)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 100%, 100%, 0.35)',
				bg: 'hsla(0, 100%, 100%, 0.35)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 100%, 100%, 0.15)',
				bg: 'hsla(0, 100%, 100%, 0.15)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: 'hsla(275, 100%, 42%, 1)',
				bg: 'hsla(275, 100%, 42%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(275, 100%, 42%, 0.85)',
				bg: 'hsla(275, 100%, 42%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(275, 100%, 42%, 0.75)',
				bg: 'hsla(275, 100%, 42%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(275, 100%, 42%, 1)',
				bg: 'hsla(275, 100%, 42%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-secondary': {
			normal: {
				bd: 'hsla(210, 79%, 46%, 1)',
				bg: 'hsla(210, 79%, 46%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(210, 79%, 46%, 0.85)',
				bg: 'hsla(210, 79%, 46%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(210, 79%, 46%, 0.75)',
				bg: 'hsla(210, 79%, 46%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(210, 79%, 46%, 1)',
				bg: 'hsla(210, 79%, 46%, 1)',
				fg: '#ffffff',
				op: '0.3',
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
			focus: '#1976d2',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: '#ffffff',
			dark: '#ffffff',
		},
	},
};
