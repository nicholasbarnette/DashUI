import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Tabbar } from '..';

afterEach(cleanup);

describe('basic tabbar', () => {
	it('renders', () => {
		const { getByText } = render(
			<Tabbar
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByText('Tab 1')).toBeTruthy();
	});

	it('renders accessibly', () => {
		const { getByRole, getByTestId } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByRole('tablist')).toBeTruthy();
		expect(getByRole('tabpanel')).toBeTruthy();
		expect(getByTestId('tabbar').getAttribute('aria-label')).toBe(
			'MyTabbar',
		);
	});

	it('renders content', () => {
		const { getByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByText('Tab 1 Content')).toBeTruthy();
	});

	it('renders multiple tabs', () => {
		const { getByText, findByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
					{
						id: 1,
						title: 'Tab 2',
						content: <p>Tab 2 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByText('Tab 1')).toBeTruthy();
		expect(getByText('Tab 1 Content')).toBeTruthy();
		expect(getByText('Tab 2')).toBeTruthy();
		expect(() => findByText('Tab 2 Content')).rejects;
	});

	it('does not show hidden tab', () => {
		const { getByText, findByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
					{
						id: 1,
						title: 'Tab 2',
						content: <p>Tab 2 Content</p>,
						hidden: true,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByText('Tab 1')).toBeTruthy();
		expect(getByText('Tab 1 Content')).toBeTruthy();
		expect(() => findByText('Tab 2')).rejects;
	});

	it('renders selected tab', () => {
		const { getByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
					{
						id: 1,
						title: 'Tab 2',
						content: <p>Tab 2 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByText('Tab 1').getAttribute('aria-selected')).toBe('true');
		expect(getByText('Tab 2').getAttribute('aria-selected')).toBe('false');
	});

	it('sets another tab as selected', () => {
		const { getByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
					{
						id: 1,
						title: 'Tab 2',
						content: <p>Tab 2 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		expect(getByText('Tab 1').getAttribute('aria-selected')).toBe('true');
		expect(getByText('Tab 2').getAttribute('aria-selected')).toBe('false');
		fireEvent.click(getByText('Tab 2'));
		expect(getByText('Tab 1').getAttribute('aria-selected')).toBe('false');
		expect(getByText('Tab 2').getAttribute('aria-selected')).toBe('true');
	});

	it('focus moves around with arrows (left/right arrow)', () => {
		const { getByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
					{
						id: 1,
						title: 'Tab 2',
						content: <p>Tab 2 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		fireEvent.focus(getByText('Tab 1'));
		fireEvent.keyDown(getByText('Tab 1'), {
			key: 'ArrowRight',
			code: 'ArrowRight',
			keyCode: 39,
			charCode: 39,
		});
		expect(document.activeElement).toBe(getByText('Tab 2'));
		fireEvent.keyDown(getByText('Tab 2'), {
			key: 'ArrowRight',
			code: 'ArrowRight',
			keyCode: 39,
			charCode: 39,
		});
		expect(document.activeElement).toBe(getByText('Tab 2'));
		fireEvent.keyDown(getByText('Tab 2'), {
			key: 'ArrowLeft',
			code: 'ArrowLeft',
			keyCode: 37,
			charCode: 37,
		});
		expect(document.activeElement).toBe(getByText('Tab 1'));
		fireEvent.keyDown(getByText('Tab 1'), {
			key: 'ArrowLeft',
			code: 'ArrowLeft',
			keyCode: 37,
			charCode: 37,
		});
		expect(document.activeElement).toBe(getByText('Tab 1'));
	});

	it('focus moves past hidden items', () => {
		const { getByText } = render(
			<Tabbar
				testId="tabbar"
				tabs={[
					{
						id: 0,
						title: 'Tab 1',
						content: <p>Tab 1 Content</p>,
					},
					{
						id: 1,
						title: 'Tab 2',
						content: <p>Tab 2 Content</p>,
						hidden: true,
					},
					{
						id: 2,
						title: 'Tab 3',
						content: <p>Tab 3 Content</p>,
					},
				]}
				label="MyTabbar"
			/>,
		);
		fireEvent.focus(getByText('Tab 1'));
		fireEvent.keyDown(getByText('Tab 1'), {
			key: 'ArrowRight',
			code: 'ArrowRight',
			keyCode: 39,
			charCode: 39,
		});
		expect(document.activeElement).toBe(getByText('Tab 3'));
		fireEvent.keyDown(getByText('Tab 3'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 37,
			charCode: 37,
		});
		expect(document.activeElement).toBe(getByText('Tab 1'));
	});
});
