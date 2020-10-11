import { Color } from 'd3';

export type BaseTheme = 'light' | 'dark';

export interface ColorDerivation {
	default: string;
	derivation?: (theme: Theme) => string;
}

export interface StateValues {
	bd: ColorDerivation;
	bg: ColorDerivation;
	fg: ColorDerivation;
	op: ColorDerivation;
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
		page: ColorDerivation;
		navigation: ColorDerivation;
		content: ColorDerivation;
		container: ColorDerivation;
		'overlay-neutral': ColorDerivation;
		'overlay-primary': ColorDerivation;
		shadow: ColorDerivation;
	};
	text: {
		default: ColorDerivation;
		alternate: ColorDerivation;
		inverse: ColorDerivation;
		placeholder: ColorDerivation;
		label: ColorDerivation;
	};
	input: {
		bd: ColorDerivation;
		bg: ColorDerivation;
		fg: ColorDerivation;
		focus: ColorDerivation;
	};
	focus: {
		width: ColorDerivation;
		style: ColorDerivation;
		light: ColorDerivation;
		dark: ColorDerivation;
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
			page: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			navigation: {
				default: '#000000',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			container: {
				default: '#dedede',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			content: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			'overlay-neutral': {
				default: 'rgba(0, 0, 0, 0.25)',
			},
			'overlay-primary': {
				default: 'rgba(120, 0, 210, 0.25)',
			},
			shadow: {
				default: '0px 2px 10px -4px rgba(0, 0, 0, 0.5)',
			},
		},
		text: {
			default: {
				default: '#131722',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			alternate: {
				default: '#131722',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			inverse: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			placeholder: {
				default: '#a1a1a1',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			label: {
				default: '#333333',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
		},
		'pattern-neutral': {
			normal: {
				bd: {
					default: 'hsla(0, 0%, 0%, 1)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 1)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(0, 0%, 0%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(0, 0%, 0%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(0, 0%, 0%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-neutral'].normal.bd.default,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-neutral'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-neutral'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		'pattern-primary': {
			normal: {
				bd: {
					default: 'hsla(274, 100%, 41%, 1)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				bg: {
					default: 'hsla(274, 100%, 41%, 1)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(274, 100%, 41%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				bg: {
					default: 'hsla(274, 100%, 41%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(274, 100%, 41%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				bg: {
					default: 'hsla(274, 100%, 41%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(274, 100%, 41%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-primary'].normal.bd.default,
				},
				bg: {
					default: 'hsla(274, 100%, 41%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-primary'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-primary'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		'pattern-secondary': {
			normal: {
				bd: {
					default: 'hsla(204, 71%, 50%, 1)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				bg: {
					default: 'hsla(204, 71%, 50%, 1)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(204, 71%, 50%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				bg: {
					default: 'hsla(204, 71%, 50%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(204, 71%, 50%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				bg: {
					default: 'hsla(204, 71%, 50%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(204, 71%, 50%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-secondary'].normal.bd.default,
				},
				bg: {
					default: 'hsla(204, 71%, 50%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-secondary'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-secondary'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: {
					default: 'hsla(0, 0%, 0%, 0)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 0)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				fg: {
					default: '#000000',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(0, 0%, 0%, 0.25)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 0.25)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				fg: {
					default: '#000000',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(0, 0%, 0%, 0.35)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 0.35)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				fg: {
					default: '#000000',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(0, 0%, 0%, 0)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-lightweight'].normal.bd.default,
				},
				bg: {
					default: 'hsla(0, 0%, 0%, 0)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-lightweight'].normal.bg.default,
				},
				fg: {
					default: '#000000',
					derivation: (theme: Theme) =>
						theme.theme['pattern-lightweight'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		input: {
			bd: {
				default: '#000000',
				derivation: (theme: Theme) =>
					theme.theme['pattern-neutral'].normal.bd.default,
			},
			bg: {
				default: 'hsla(0, 100%, 100%, 1)',
				derivation: (theme: Theme) =>
					theme.theme['pattern-neutral'].normal.fg.default,
			},
			fg: {
				default: '#000000',
				derivation: (theme: Theme) => theme.theme.text.default.default,
			},
			focus: {
				default: '#258fd8',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
		},
		focus: {
			width: {
				default: '1px',
			},
			style: {
				default: 'dotted',
			},
			light: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.text.default.default,
			},
			dark: {
				default: '#000000',
				derivation: (theme: Theme) => theme.theme.text.inverse.default,
			},
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
			page: {
				default: '#131722',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			navigation: {
				default: '#2a2e39',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			content: {
				default: '#222838',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			container: {
				default: '#222838',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			'overlay-neutral': {
				default: 'rgba(255, 255, 255, 0.15)',
			},
			'overlay-primary': {
				default: 'rgba(125, 0, 214, 0.25)',
			},
			shadow: {
				default: '0px 0px 32px -9px rgba(0, 0, 0, 0.75)',
			},
		},
		text: {
			default: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			alternate: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			inverse: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			placeholder: {
				default: '#7d7d7d',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
			label: {
				default: '#bfbfbf',
				derivation: (theme: Theme) => theme.theme.color.primary,
			},
		},
		'pattern-neutral': {
			normal: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0.15)',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0.15)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0.25)',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0.25)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0.35)',
					derivation: (theme: Theme) =>
						theme.theme.text.inverse.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0.35)',
					derivation: (theme: Theme) => theme.theme.color.neutral,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0.15)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-neutral'].normal.bd.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0.15)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-neutral'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-neutral'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		'pattern-primary': {
			normal: {
				bd: {
					default: 'hsla(275, 100%, 42%, 1)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				bg: {
					default: 'hsla(275, 100%, 42%, 1)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(275, 100%, 42%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				bg: {
					default: 'hsla(275, 100%, 42%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(275, 100%, 42%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				bg: {
					default: 'hsla(275, 100%, 42%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.primary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(275, 100%, 42%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-primary'].normal.bd.default,
				},
				bg: {
					default: 'hsla(275, 100%, 42%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-primary'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-primary'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		'pattern-secondary': {
			normal: {
				bd: {
					default: 'hsla(210, 79%, 46%, 1)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				bg: {
					default: 'hsla(210, 79%, 46%, 1)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(210, 79%, 46%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				bg: {
					default: 'hsla(210, 79%, 46%, 0.85)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(210, 79%, 46%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				bg: {
					default: 'hsla(210, 79%, 46%, 0.75)',
					derivation: (theme: Theme) => theme.theme.color.secondary,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(210, 79%, 46%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-secondary'].normal.bd.default,
				},
				bg: {
					default: 'hsla(210, 79%, 46%, 1)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-secondary'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-secondary'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			hover: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0.15)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0.15)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			pressed: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0.25)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0.25)',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme.text.default.default,
				},
				op: { default: '1' },
			},
			disabled: {
				bd: {
					default: 'hsla(0, 100%, 100%, 0)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-lightweight'].normal.bd.default,
				},
				bg: {
					default: 'hsla(0, 100%, 100%, 0)',
					derivation: (theme: Theme) =>
						theme.theme['pattern-lightweight'].normal.bg.default,
				},
				fg: {
					default: '#ffffff',
					derivation: (theme: Theme) =>
						theme.theme['pattern-lightweight'].normal.fg.default,
				},
				op: { default: '0.3' },
			},
		},
		input: {
			bd: {
				default: '#2a2e39',
				derivation: (theme: Theme) =>
					theme.theme['pattern-neutral'].normal.bd.default,
			},
			bg: {
				default: 'rgba(0, 0, 0, 0.25)',
				derivation: (theme: Theme) =>
					theme.theme['pattern-neutral'].normal.bg.default,
			},
			fg: {
				default: '#ffffff',
				derivation: (theme: Theme) =>
					theme.theme['pattern-neutral'].normal.fg.default,
			},
			focus: {
				default: '#1976d2',
				derivation: (theme: Theme) => theme.theme.color.secondary,
			},
		},
		focus: {
			width: {
				default: '1px',
			},
			style: {
				default: 'dotted',
			},
			light: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.text.default.default,
			},
			dark: {
				default: '#ffffff',
				derivation: (theme: Theme) => theme.theme.text.inverse.default,
			},
		},
	},
};
