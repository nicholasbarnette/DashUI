import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { VerticalTabs } from '..';

afterEach(cleanup);

describe('basic vertical tabs', () => {
	it('renders', () => {
		const { getByText } = render(
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByText('Item 1')).toBeTruthy();
	});

	it('renders content', () => {
		const { getByText } = render(
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByText('Content 1')).toBeTruthy();
	});

	it('has description', () => {
		const { getByText } = render(
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						description: 'Description.',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByText('Description.')).toBeTruthy();
	});

	it('has tooltips', () => {
		const { getByTitle } = render(
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						description: 'Item description.',
						content: <p>Content 1</p>,
					},
				]}
			/>,
		);
		expect(getByTitle('Item 1')).toBeTruthy();
	});

	it('switches content on click', () => {
		const { getByText } = render(
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						title: 'Item 2',
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
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						title: 'Item 2',
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

	it("doesn't render hidden tabs", () => {
		const { getAllByTitle } = render(
			<VerticalTabs
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						title: 'Item 2',
						content: <p>Content 2</p>,
						hidden: true,
					},
				]}
			/>,
		);
		expect(getAllByTitle(/Item /).length).toBe(1);
	});

	it('focus moves around with arrows (up/down arrow)', () => {
		const { getByTestId } = render(
			<VerticalTabs
				testId="verticalTabs"
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						title: 'Item 2',
						content: <p>Content 2</p>,
						hidden: true,
					},
					{
						title: 'Item 3',
						content: <p>Content 3</p>,
					},
				]}
			/>,
		);
		fireEvent.focus(getByTestId('verticalTabs0'));
		expect(document.activeElement).toBe(getByTestId('verticalTabs0'));
		fireEvent.keyDown(getByTestId('verticalTabs0'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs2'));
		fireEvent.keyDown(getByTestId('verticalTabs2'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs2'));
		fireEvent.keyDown(getByTestId('verticalTabs2'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs0'));
		fireEvent.keyDown(getByTestId('verticalTabs0'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs0'));
	});

	it('focus moves around with arrows (up/down arrow)', () => {
		const { getByTestId } = render(
			<VerticalTabs
				testId="verticalTabs"
				tabs={[
					{
						title: 'Item 1',
						content: <p>Content 1</p>,
					},
					{
						title: 'Item 2',
						content: <p>Content 2</p>,
						hidden: true,
					},
					{
						title: 'Item 3',
						content: <p>Content 3</p>,
					},
				]}
			/>,
		);
		fireEvent.focus(getByTestId('verticalTabs0'));
		expect(document.activeElement).toBe(getByTestId('verticalTabs0'));
		fireEvent.keyDown(getByTestId('verticalTabs0'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs2'));
		fireEvent.keyDown(getByTestId('verticalTabs0'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs0'));
		fireEvent.keyDown(getByTestId('verticalTabs0'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs2'));
		fireEvent.keyDown(getByTestId('verticalTabs0'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
			shiftKey: true,
		});
		expect(document.activeElement).toBe(getByTestId('verticalTabs0'));
	});
});
