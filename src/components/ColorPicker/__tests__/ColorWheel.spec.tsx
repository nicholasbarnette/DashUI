import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { ColorWheel } from '../ColorWheel';

afterEach(cleanup);

describe('basic color wheel', () => {
	it('renders', () => {
		const { getByRole } = render(
			<ColorWheel
				defaultColor={[0, 0, 0]}
				hue={0}
				saturation={0}
				lightness={0}
			/>,
		);
		expect(getByRole('slider')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(
			<ColorWheel
				defaultColor={[0, 0, 0]}
				hue={0}
				saturation={0}
				lightness={0}
				onChange={handleChange}
			/>,
		);
		fireEvent.click(getByRole('slider'), { clientY: 40, clientX: 40 });
		expect(handleChange).toHaveBeenCalled();
		expect(handleChange.mock.calls[0][0]).toEqual([0, 25, 75]);
	});

	it('handles drags', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(
			<ColorWheel
				defaultColor={[0, 0, 0]}
				hue={0}
				saturation={0}
				lightness={0}
				onChange={handleChange}
			/>,
		);
		fireEvent.mouseDown(getByRole('slider'), { clientY: 0, clientX: 0 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 10, clientX: 10 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 20, clientX: 20 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 30, clientX: 30 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 40, clientX: 40 });
		fireEvent.mouseUp(getByRole('slider'), { clientY: 40, clientX: 40 });
		expect(handleChange.mock.calls[0][0]).toEqual([0, 6, 94]);
		expect(handleChange.mock.calls[1][0]).toEqual([0, 13, 88]);
		expect(handleChange.mock.calls[2][0]).toEqual([0, 19, 81]);
		expect(handleChange.mock.calls[3][0]).toEqual([0, 25, 75]);
		expect(handleChange.mock.calls.length).toBe(4);
	});
});
