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
		neutral: [number, number, number];
		primary: [number, number, number];
		secondary: [number, number, number];
		alert: [number, number, number];
		warning: [number, number, number];
		success: [number, number, number];
		graph1: [number, number, number];
		graph2: [number, number, number];
		graph3: [number, number, number];
		graph4: [number, number, number];
		graph5: [number, number, number];
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
		page: [number, number, number];
		navigation: [number, number, number];
		content: [number, number, number];
		container: [number, number, number];
		'overlay-neutral': string;
		'overlay-primary': string;
		shadow: string;
	};
	text: {
		default: [number, number, number];
		alternate: [number, number, number];
		inverse: [number, number, number];
		placeholder: [number, number, number];
		label: [number, number, number];
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
