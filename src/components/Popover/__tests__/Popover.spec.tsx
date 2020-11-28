import React, { useState, FC, useRef } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Popover } from '..';

afterEach(cleanup);

describe('basic popover', () => {
	it('renders', () => {
		const { getByRole } = render(<Popover isOpen={true}></Popover>);
		expect(getByRole('dialog')).toBeTruthy();
	});

	it('escape closes menu', () => {
		const CloseablePopover: FC = () => {
			const [isOpen, setIsOpen] = useState(true);
			return (
				<Popover
					isOpen={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				>
					<p>popover content</p>
				</Popover>
			);
		};
		const { getByRole, findByText } = render(<CloseablePopover />);
		fireEvent.keyDown(getByRole('dialog'), {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		expect(() => findByText('popover content')).rejects;
	});

	it('escape closes menu', () => {
		const CloseablePopover: FC = () => {
			const [isOpen, setIsOpen] = useState(true);
			const popoverRef = useRef<HTMLDivElement>(null);
			return (
				<div ref={popoverRef}>
					<Popover
						isOpen={isOpen}
						onClose={() => {
							setIsOpen(false);
						}}
						originRef={popoverRef}
					>
						<p>popover content</p>
					</Popover>
				</div>
			);
		};
		const { getByRole, findByText } = render(<CloseablePopover />);
		fireEvent.keyDown(getByRole('dialog'), {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		expect(() => findByText('popover content')).rejects;
	});
});
