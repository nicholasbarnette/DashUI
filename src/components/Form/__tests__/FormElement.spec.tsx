import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { FormElement } from '..';

afterEach(cleanup);

describe('basic form element', () => {
	it('renders', () => {
		const { getByText, getByDisplayValue } = render(
			<FormElement
				testId="element"
				id="element"
				label="Element:"
				element={{ element: 'input', props: { value: 'text input' } }}
			/>,
		);
		expect(getByText('Element:')).toBeTruthy();
		expect(getByDisplayValue('text input')).toBeTruthy();
	});

	it('renders input accessibly', () => {
		const { getByText, getByDisplayValue } = render(
			<FormElement
				id="element"
				label="Element:"
				element={{ element: 'input', props: { value: 'text input' } }}
			/>,
		);
		expect(getByText('Element:')).toBeTruthy();
		expect(getByText('Element:').getAttribute('for')).toBe('element');
		expect(getByDisplayValue('text input')).toBeTruthy();
		expect(getByDisplayValue('text input').getAttribute('id')).toBe(
			'element',
		);
		expect(getByDisplayValue('text input').getAttribute('name')).toBe(
			'element',
		);
	});

	it('renders switch accessibly', () => {
		const { getByText, getByRole } = render(
			<FormElement
				id="element"
				label="Element:"
				element={{ element: 'switch' }}
			/>,
		);
		expect(getByText('Element:')).toBeTruthy();
		expect(getByText('Element:').getAttribute('for')).toBe('element');
		expect(getByRole('switch')).toBeTruthy();
	});

	it('renders text area accessibly', () => {
		const { getByText, getByDisplayValue } = render(
			<FormElement
				id="element"
				label="Element:"
				element={{ element: 'textarea', props: { value: 'text area' } }}
			/>,
		);
		expect(getByText('Element:')).toBeTruthy();
		expect(getByText('Element:').getAttribute('for')).toBe('element');
		expect(getByDisplayValue('text area')).toBeTruthy();
		expect(getByDisplayValue('text area').getAttribute('id')).toBe(
			'element',
		);
		expect(getByDisplayValue('text area').getAttribute('name')).toBe(
			'element',
		);
	});

	it('renders a required signifier', () => {
		const { getByText, getByDisplayValue } = render(
			<FormElement
				testId="element"
				id="element"
				label="Element:"
				element={{ element: 'input', props: { value: 'text input' } }}
				required
			/>,
		);
		expect(getByText('Element: *')).toBeTruthy();
		expect(getByText('Element: *').getAttribute('for')).toBe('element');
		expect(getByDisplayValue('text input').getAttribute('id')).toBe(
			'element',
		);
		expect(getByDisplayValue('text input').getAttribute('name')).toBe(
			'element',
		);
	});
});
