import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Form, FormElement } from '..';

afterEach(cleanup);

describe('basic form', () => {
	it('renders', () => {
		const { getByTestId } = render(<Form testId="form"></Form>);
		expect(getByTestId('form')).toBeTruthy();
	});

	it('renders submit button', () => {
		const { getByText } = render(<Form></Form>);
		expect(getByText('Submit')).toBeTruthy();
	});

	it('hides submit button', () => {
		const { findByText } = render(<Form></Form>);
		expect(() => findByText('Submit')).rejects;
	});

	it('renders submit button', () => {
		const handleSubmit = jest.fn();
		const { getByText } = render(
			<Form testId="form" onSubmit={handleSubmit}></Form>,
		);
		fireEvent.click(getByText('Submit'));
		expect(handleSubmit).toHaveBeenCalled();
	});

	it('renders form element', () => {
		const { getByText, getByDisplayValue } = render(
			<Form>
				<FormElement
					testId="element"
					id="element"
					label="Element:"
					element={{
						element: 'input',
						props: { value: 'text input' },
					}}
				/>
			</Form>,
		);
		expect(getByText('Element:')).toBeTruthy();
		expect(getByDisplayValue('text input')).toBeTruthy();
	});
});
