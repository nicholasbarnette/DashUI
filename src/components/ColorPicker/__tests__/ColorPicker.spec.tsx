import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { ColorPicker } from '../ColorPicker';

afterEach(cleanup);

describe('basic color picker', () => {
	it('renders', () => {
		const { getByRole } = render(<ColorPicker color="hsl(0, 0%, 0%)" />);
		expect(getByRole('button')).toBeTruthy();
	});

	it('renders with default color', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(
			<ColorPicker color="hsl(250, 15%, 20%)" onChange={handleChange} />,
		);
		fireEvent.click(getByRole('button')); // Open color picker
		expect(handleChange.mock.calls[0][0]).toBe('hsl(250, 15%, 20%)');
		expect(handleChange.mock.calls[1][0]).toBe('hsl(250, 15%, 20%)');
		expect(handleChange.mock.calls.length).toBe(2);
	});

	it('handles clicks', () => {
		const handleChange = jest.fn();
		const { getByRole, getAllByRole } = render(
			<ColorPicker color="hsl(0, 0%, 0%)" onChange={handleChange} />,
		);
		fireEvent.click(getByRole('button')); // Open color picker
		fireEvent.click(getAllByRole('slider')[0], {
			clientY: 20,
			clientX: 20,
		});
		fireEvent.click(getAllByRole('slider')[1], {
			clientY: 20,
			clientX: 20,
		});
		expect(handleChange.mock.calls[0][0]).toBe('hsl(0, 0%, 0%)');
		expect(handleChange.mock.calls[1][0]).toBe('hsl(0, 0%, 0%)');
		expect(handleChange.mock.calls[2][0]).toBe('hsl(0, 13%, 88%)');
		expect(handleChange.mock.calls[3][0]).toBe('hsl(45, 13%, 88%)');
		expect(handleChange.mock.calls.length).toBe(4);
	});

	it('updates if color prop is updated externally', async () => {
		const { getByRole, findByText, rerender } = render(
			<ColorPicker color="hsl(0, 0%, 0%)" />,
		);
		fireEvent.click(getByRole('button')); // Open color picker
		expect(await findByText('hsl(0, 0%, 0%)')).toBeTruthy();
		fireEvent.click(getByRole('button')); // Open color picker
		rerender(<ColorPicker color="hsl(100, 100%, 100%)" />);
		fireEvent.click(getByRole('button')); // Open color picker
		expect(await findByText('hsl(100, 100%, 100%)')).toBeTruthy();
	});
});
