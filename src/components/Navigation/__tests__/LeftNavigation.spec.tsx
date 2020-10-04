import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { LeftNavigation } from '..';
import { Instagram } from '../../SVG';

afterEach(cleanup);

describe('basic left navigation', () => {
	it('renders', () => {
		const { getByText } = render(
			<LeftNavigation
				items={[
					{
						svg: Instagram,
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByText('Item 1')).toBeTruthy();
	});

	it('renders content', () => {
		const { getByText } = render(
			<LeftNavigation
				items={[
					{
						svg: Instagram,
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByText('Content 1')).toBeTruthy();
	});

	it('navigation item has tooltip', () => {
		const { getByTitle } = render(
			<LeftNavigation
				items={[
					{
						svg: Instagram,
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByTitle('Item 1')).toBeTruthy();
	});

	it('renders SVG icon', () => {
		const { getAllByRole } = render(
			<LeftNavigation
				items={[
					{
						svg: Instagram,
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getAllByRole('img').length).toBe(2);
	});

	it('renders text icon', () => {
		const { getByText } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByText('I')).toBeTruthy();
	});

	it('switches content on click', () => {
		const { getByText } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						text: 'Item 2',
						content: <p>Content 2</p>,
					},
				]}
			/>,
		);
		expect(getByText('Content 1')).toBeTruthy();
		fireEvent.click(getByText('Item 2'));
		expect(getByText('Content 2')).toBeTruthy();
	});

	it('switches content on press', () => {
		const { getByTitle, getByText } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						text: 'Item 2',
						content: <p>Content 2</p>,
					},
				]}
			/>,
		);
		expect(getByText('Content 1')).toBeTruthy();
		fireEvent.keyPress(getByTitle('Item 2'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		expect(getByText('Content 2')).toBeTruthy();
		fireEvent.keyPress(getByTitle('Item 1'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(getByText('Content 1')).toBeTruthy();
	});

	it('renders expand left nav button', () => {
		const { getByRole, getByText } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByRole('img')).toBeTruthy();
		expect(getByText('Expand Menu')).toBeTruthy();
	});

	it('handles expanding by click', () => {
		const { getByRole, getByText } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByRole('img')).toBeTruthy();
		expect(getByText('Expand Menu')).toBeTruthy();
		fireEvent.click(getByText('Expand Menu'));
		expect(getByText('Collapse Menu')).toBeTruthy();
	});

	it('handles expanding by pressing', () => {
		const { getByTitle } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByTitle('Expand Menu')).toBeTruthy();
		fireEvent.keyPress(getByTitle('Expand Menu'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		expect(getByTitle('Collapse Menu')).toBeTruthy();
		fireEvent.keyPress(getByTitle('Collapse Menu'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(getByTitle('Expand Menu')).toBeTruthy();
	});

	it("doesn't render hidden items", () => {
		const { getAllByTitle } = render(
			<LeftNavigation
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						text: 'Item 2',
						content: <p>Content 2</p>,
						hidden: true,
					},
				]}
			/>,
		);
		expect(getAllByTitle(/Item /).length).toBe(1);
	});

	it('focus moves around with arrows (up/down arrow)', () => {
		const { getByTitle } = render(
			<LeftNavigation
				testId="leftnav"
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						text: 'Item 2',
						content: <p>Content 2</p>,
						hidden: true,
					},
					{
						text: 'Item 3',
						content: <p>Content 3</p>,
					},
				]}
			/>,
		);
		fireEvent.focus(getByTitle('Item 1'));
		expect(document.activeElement).toBe(getByTitle('Item 1'));
		fireEvent.keyDown(getByTitle('Item 1'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTitle('Item 3'));
		fireEvent.keyDown(getByTitle('Item 3'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTitle('Item 3'));
		fireEvent.keyDown(getByTitle('Item 3'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByTitle('Item 1'));
		fireEvent.keyDown(getByTitle('Item 1'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByTitle('Item 1'));
	});

	it('focus moves around with arrows (up/down arrow)', () => {
		const { getByTitle } = render(
			<LeftNavigation
				testId="leftnav"
				items={[
					{
						text: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						text: 'Item 2',
						content: <p>Content 2</p>,
						hidden: true,
					},
					{
						text: 'Item 3',
						content: <p>Content 3</p>,
					},
				]}
			/>,
		);
		fireEvent.focus(getByTitle('Item 1'));
		expect(document.activeElement).toBe(getByTitle('Item 1'));
		fireEvent.keyDown(getByTitle('Item 1'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTitle('Item 3'));
		fireEvent.keyDown(getByTitle('Item 1'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
		});
		expect(document.activeElement).toBe(getByTitle('Item 1'));
		fireEvent.keyDown(getByTitle('Item 1'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTitle('Item 3'));
		fireEvent.keyDown(getByTitle('Item 1'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
			shiftKey: true,
		});
		expect(document.activeElement).toBe(getByTitle('Item 1'));
	});
});
