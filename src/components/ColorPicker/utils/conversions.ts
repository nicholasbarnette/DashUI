/**
 * Valid hex values in the form of [RED, GREEN, BLUE].
 */
export type Hex = [string, string, string];

/**
 * Valid rgb colors in the form of [RED, GREEN, BLUE].
 */
export type RGB = [number, number, number];

/**
 * Valid hsl colors in the form of [HUE, SATURATION, LIGHTNESS].
 */
export type HSL = [number, number, number];

export const getHSLColorString = (hsl: HSL) => {
	return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
};

export const getRGBColorString = (rgb: RGB) => {
	return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

export const getHexColorString = (hex: Hex) => {
	return `#${hex[0]}${hex[1]}${hex[2]}`;
};

export const hsl2rgb = (hsl: HSL): RGB => {
	let r, g, b;
	let [h, s, l] = [hsl[0] / 360, hsl[1] / 100, hsl[2] / 100];

	if (s == 0) {
		r = g = b = l; // achromatic
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

export const rgb2hsl = (rgb: RGB): HSL => {
	let [r, g, b] = [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
	const c_max = Math.max(r, g, b);
	const c_min = Math.min(r, g, b);
	const delta = c_max - c_min;

	const l = (c_max + c_min) / 2;
	let s = 0;
	if (delta !== 0) {
		s = Math.min(delta / (1 - Math.abs(2 * l - 1)), 1);
	}
	let h = 0;
	if (delta !== 0) {
		if (c_max === r) {
			h = ((g - b) / delta) % 6;
		} else if (c_max === g) {
			h = 2 + (b - r) / delta;
		} else if (c_max === b) {
			h = 4 + (r - g) / delta;
		}
	}
	h = 60 * h;
	if (h < 0) {
		h = h + 360;
	}

	return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
};

export const rgb2hex = (rgb: RGB): Hex => {
	const r = rgb[0].toString(16);
	const g = rgb[1].toString(16);
	const b = rgb[2].toString(16);
	return [
		r.length === 1 ? `0${r}` : r,
		g.length === 1 ? `0${g}` : g,
		b.length === 1 ? `0${b}` : b,
	];
};

export const hex2rgb = (hex: Hex): RGB => {
	const h = `${hex[0]}${hex[1]}${hex[2]}`;
	const getValue = (val: string) => {
		return parseInt(parseInt(val, 16).toString(10), 10);
	};
	if (h.length === 3) {
		return [
			getValue(hex[0].repeat(2)),
			getValue(hex[1].repeat(2)),
			getValue(hex[2].repeat(2)),
		];
	} else if (h.length === 6) {
		return [getValue(hex[0]), getValue(hex[1]), getValue(hex[2])];
	} else {
		return [getValue('00'), getValue('00'), getValue('00')];
	}
};

export const hslRegex = /^hsl\(([0-9]{1,3}),[ ]?([0-9]{1,3})%,[ ]?([0-9]{1,3})%\)$/;
export const rgbRegex = /^rgb\(([0-9]{1,3}),[ ]?([0-9]{1,3}),[ ]?([0-9]{1,3})\)$/;
export const hexRegex = /^#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i;

export const getHSLColorArray = (hsl: string): HSL => {
	const arr = hslRegex.exec(hsl);
	if (arr) {
		return [
			parseInt(arr[1], 10),
			parseInt(arr[2], 10),
			parseInt(arr[3], 10),
		];
	}
	return [0, 100, 50];
};

export const getRGBColorArray = (rgb: string): RGB => {
	const arr = rgbRegex.exec(rgb);
	if (arr) {
		return [
			parseInt(arr[1], 10),
			parseInt(arr[2], 10),
			parseInt(arr[3], 10),
		];
	}
	return [0, 0, 0];
};

export const getHexColorArray = (hex: string): Hex => {
	const arr = hexRegex.exec(hex);
	if (arr) {
		return [arr[1], arr[2], arr[3]];
	}
	return ['00', '00', '00'];
};

export const getColorArray = (color: string): HSL => {
	if (hslRegex.test(color)) {
		return getHSLColorArray(color);
	}
	if (rgbRegex.test(color)) {
		return rgb2hsl(getRGBColorArray(color));
	}
	if (hexRegex.test(color)) {
		return rgb2hsl(hex2rgb(getHexColorArray(color)));
	}
	return [0, 100, 50];
};
