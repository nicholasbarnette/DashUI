import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Dialog } from '..';

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
});
