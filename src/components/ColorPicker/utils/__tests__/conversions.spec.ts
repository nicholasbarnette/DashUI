import {
	getColorArray,
	getHexColorArray,
	getHexColorString,
	getHSLColorArray,
	getHSLColorString,
	getRGBColorArray,
	getRGBColorString,
	Hex,
	hex2rgb,
	HSL,
	hsl2rgb,
	RGB,
	rgb2hex,
	rgb2hsl,
} from '../conversions';

describe('getHSLColorString', () => {
	it.each([
		{ hsl: [0, 100, 100] },
		{ hsl: [0, 0, 0] },
		{ hsl: [300, 80, 20] },
	] as { hsl: HSL }[])('returns proper values (%p)', (hsl) => {
		expect(getHSLColorString(hsl.hsl)).toBe(
			`hsl(${hsl.hsl[0]}, ${hsl.hsl[1]}%, ${hsl.hsl[2]}%)`,
		);
	});
});

describe('getRGBColorString', () => {
	it.each([
		{ rgb: [0, 0, 0] },
		{ rgb: [255, 255, 255] },
		{ rgb: [200, 80, 20] },
	] as { rgb: RGB }[])('returns proper values (%p)', (rgb) => {
		expect(getRGBColorString(rgb.rgb)).toBe(
			`rgb(${rgb.rgb[0]}, ${rgb.rgb[1]}, ${rgb.rgb[2]})`,
		);
	});
});

describe('getHexColorString', () => {
	it.each([
		{ hex: ['0', '0', '0'] },
		{ hex: ['00', '00', '00'] },
		{ hex: ['f', 'f', 'f'] },
		{ hex: ['ff', 'ff', 'ff'] },
		{ hex: ['f', '0', 'f'] },
		{ hex: ['ff', '00', 'ff'] },
		{ hex: ['F', 'F', 'F'] },
	] as { hex: Hex }[])('returns proper values (%p)', (hex) => {
		expect(getHexColorString(hex.hex)).toBe(
			`#${hex.hex[0]}${hex.hex[1]}${hex.hex[2]}`,
		);
	});
});

describe('hsl2rgb', () => {
	it.each([
		{ hsl: [0, 100, 100], rgb: [255, 255, 255] },
		{ hsl: [0, 0, 0], rgb: [0, 0, 0] },
		{ hsl: [300, 80, 20], rgb: [92, 10, 92] },
		{ hsl: [249, 90, 41], rgb: [39, 10, 199] },
	] as { hsl: HSL; rgb: RGB }[])('returns proper values (%p)', (color) => {
		expect(hsl2rgb(color.hsl)).toEqual(color.rgb);
	});
});

describe('rgb2hsl', () => {
	it.each([
		{ hsl: [0, 0, 100], rgb: [255, 255, 255] },
		{ hsl: [0, 0, 0], rgb: [0, 0, 0] },
		{ hsl: [300, 80, 20], rgb: [92, 10, 92] },
		{ hsl: [249, 90, 41], rgb: [40, 10, 200] },
	] as { hsl: HSL; rgb: RGB }[])('returns proper values (%p)', (color) => {
		expect(rgb2hsl(color.rgb)).toEqual(color.hsl);
	});
});

describe('hex2rgb', () => {
	it.each([
		{ hex: ['f', 'f', 'f'], rgb: [255, 255, 255] },
		{ hex: ['0', '0', '0'], rgb: [0, 0, 0] },
		{ hex: ['5c', '0a', '5c'], rgb: [92, 10, 92] },
		{ hex: ['27', '0a', 'c7'], rgb: [39, 10, 199] },
	] as { hex: Hex; rgb: RGB }[])('returns proper values (%p)', (color) => {
		expect(hex2rgb(color.hex)).toEqual(color.rgb);
	});
});

describe('rgb2hex', () => {
	it.each([
		{ hex: ['ff', 'ff', 'ff'], rgb: [255, 255, 255] },
		{ hex: ['00', '00', '00'], rgb: [0, 0, 0] },
		{ hex: ['5c', '0a', '5c'], rgb: [92, 10, 92] },
		{ hex: ['28', '0a', 'c8'], rgb: [40, 10, 200] },
	] as { hex: Hex; rgb: RGB }[])('returns proper values (%p)', (color) => {
		expect(rgb2hex(color.rgb)).toEqual(color.hex);
	});
});

describe('getHSLColorArray', () => {
	it.each([
		{ hsl: 'hsl(0, 100%, 100%)', arr: [0, 100, 100] },
		{ hsl: 'hsl(0, 0%, 0%)', arr: [0, 0, 0] },
		{ hsl: 'hsl(300, 80%, 20%)', arr: [300, 80, 20] },
	] as {
		hsl: string;
		arr: HSL;
	}[])('returns proper values (%p)', (c) => {
		expect(getHSLColorArray(c.hsl)).toEqual(c.arr);
	});
});

describe('getRGBColorArray', () => {
	it.each([
		{ rgb: 'rgb(255, 255, 255)', arr: [255, 255, 255] },
		{ rgb: 'rgb(0, 0, 0)', arr: [0, 0, 0] },
		{ rgb: 'rgb(200, 80, 20)', arr: [200, 80, 20] },
	] as {
		rgb: string;
		arr: RGB;
	}[])('returns proper values (%p)', (c) => {
		expect(getRGBColorArray(c.rgb)).toEqual(c.arr);
	});
});

describe('getHexColorArray', () => {
	it.each([
		{ hex: '#ffffff', arr: ['ff', 'ff', 'ff'] },
		{ hex: '#fff', arr: ['f', 'f', 'f'] },
		{ hex: '#000', arr: ['0', '0', '0'] },
		{ hex: '#C85014', arr: ['C8', '50', '14'] },
	] as {
		hex: string;
		arr: Hex;
	}[])('returns proper values (%p)', (c) => {
		expect(getHexColorArray(c.hex)).toEqual(c.arr);
	});
});

describe('getColorArray', () => {
	it.each([
		{ input: '#ffffff', output: [0, 0, 100] },
		{ input: '#000', output: [0, 0, 0] },
		{ input: '#C85014', output: [20, 82, 43] },
		{ input: 'rgb(255, 255, 255)', output: [0, 0, 100] },
		{ input: 'rgb(0,0,0)', output: [0, 0, 0] },
		{ input: 'rgb(200, 80, 20)', output: [20, 82, 43] },
		{ input: 'hsl(0, 100%, 100%)', output: [0, 100, 100] },
		{ input: 'hsl(0, 0%, 0%)', output: [0, 0, 0] },
		{ input: 'hsl(20, 81%, 43%)', output: [20, 81, 43] },
	] as {
		input: string;
		output: HSL;
	}[])('returns proper values (%p)', (c) => {
		expect(getColorArray(c.input)).toEqual(c.output);
	});
});
