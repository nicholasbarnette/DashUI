import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { FormElement } from '..';

afterEach(cleanup);

describe('basic form element', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<FormElement
				testId="element"
				id="element"
				label="Element:"
				element={{ element: 'input' }}
			/>,
		);
		expect(getByTestId('elementLabel')).toBeTruthy();
		expect(getByTestId('elementElement')).toBeTruthy();
	});

	it('renders accessibly', () => {
		const { getByTestId } = render(
			<FormElement
				testId="element"
				id="element"
				label="Element:"
				element={{ element: 'input' }}
			/>,
		);
		expect(getByTestId('elementLabel').getAttribute('for')).toBe('element');
		expect(getByTestId('elementElement').getAttribute('id')).toBe(
			'element',
		);
		expect(getByTestId('elementElement').getAttribute('name')).toBe(
			'element',
		);
	});
});
