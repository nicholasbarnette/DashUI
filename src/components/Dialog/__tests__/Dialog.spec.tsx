import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Dialog } from '..';
import { Button } from '../../Button';

afterEach(cleanup);

describe('basic dialog', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Dialog
				testId="dialog"
				closeButton={{
					text: 'Close',
					props: {
						tooltip: 'Close',
						onPress: () => {},
					},
				}}
				showDialog={true}
				title="Dialog"
			>
				Basic Button
			</Dialog>,
		);
		expect(getByTestId('dialog')).toBeTruthy();
	});

	it('custom buttons', () => {
		const { getByText } = render(
			<Dialog
				testId="dialog"
				showDialog={true}
				title="Dialog"
				submitButton={{
					text: 'Submit Me',
					props: {
						onPress: () => {},
						variant: 'primary',
						tooltip: 'Submit',
					},
				}}
			>
				Basic Button
			</Dialog>,
		);
		expect(getByText('Submit Me')).toBeTruthy();
	});
});
