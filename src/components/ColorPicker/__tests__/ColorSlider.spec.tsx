import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { ColorSlider } from '../ColorSlider';

afterEach(cleanup);

describe('basic color slider', () => {
	it('renders', () => {
		const { getByRole } = render(<ColorSlider defaultValue={0} />);
		expect(getByRole('slider')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(
			<ColorSlider defaultValue={0} onChange={handleChange} />,
		);
		fireEvent.click(getByRole('slider'), { clientY: 40 });
		expect(handleChange).toHaveBeenCalled();
		expect(handleChange.mock.calls[0][0]).toBe(90);
	});

	it('handles drags', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(
			<ColorSlider defaultValue={0} onChange={handleChange} />,
		);
		fireEvent.mouseDown(getByRole('slider'), { clientY: 0 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 10 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 20 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 30 });
		fireEvent.mouseMove(getByRole('slider'), { clientY: 40 });
		fireEvent.mouseUp(getByRole('slider'), { clientY: 40 });
		expect(handleChange.mock.calls[0][0]).toBe(23);
		expect(handleChange.mock.calls[1][0]).toBe(45);
		expect(handleChange.mock.calls[2][0]).toBe(68);
		expect(handleChange.mock.calls[3][0]).toBe(90);
		expect(handleChange.mock.calls.length).toBe(4);
	});
});
