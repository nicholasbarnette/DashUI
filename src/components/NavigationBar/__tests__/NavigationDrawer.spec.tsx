import React from 'react';
import {
	cleanup,
	render,
	fireEvent,
	getByTestId,
} from '@testing-library/react';
import { NavigationDrawer } from '..';

afterEach(cleanup);

describe('basic navigation drawer', () => {
	it('renders', () => {
		const { getByTitle } = render(<NavigationDrawer items={[]} />);
		expect(getByTitle('Open Menu')).toBeTruthy();
	});

	it('renders items', () => {
		const { getByText, getByTitle } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(getByText('Home')).toBeTruthy();
		expect(getByText('About')).toBeTruthy();
	});

	it('does not render hidden items', () => {
		const { getByText, getByTitle, findByText } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'hidden',
						title: 'Hidden',
						link: '/hidden',
						hidden: true,
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(getByText('Home')).toBeTruthy();
		expect(getByText('About')).toBeTruthy();
		expect(async () => await findByText('Hidden')).rejects;
	});

	it('focuses first item when opened', () => {
		const { getByText, getByTitle } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(document.activeElement).toBe(getByText('Home'));
	});

	it('focus moves around with tab', () => {
		const { getByText, getByTitle } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(document.activeElement).toBe(getByText('Home'));
		fireEvent.keyDown(getByText('Home'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
		});
		expect(document.activeElement).toBe(getByText('About'));
		fireEvent.keyDown(getByText('About'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
			shiftKey: true,
		});
		expect(document.activeElement).toBe(getByText('Home'));
		fireEvent.keyDown(getByText('Home'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
			shiftKey: true,
		});
		expect(document.activeElement).toBe(getByText('Home'));
	});

	it('focus moves around with arrows (up/down arrow)', () => {
		const { getByText, getByTitle } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(document.activeElement).toBe(getByText('Home'));
		fireEvent.keyDown(getByText('Home'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByText('About'));
		fireEvent.keyDown(getByText('About'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByText('About'));
		fireEvent.keyDown(getByText('About'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByText('Home'));
		fireEvent.keyDown(getByText('Home'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByText('Home'));
	});

	it('escape closes menu', () => {
		const { getByText, getByTitle, findByText } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(getByText('Home')).toBeTruthy();
		fireEvent.keyDown(getByText('Home'), {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		expect(async () => await findByText('Home')).rejects;
		expect(document.activeElement).toBe(getByTitle('Open Menu'));
	});

	it('clicking on overlay closes menu', () => {
		const { getByText, getByTitle, findByText, getByTestId } = render(
			<NavigationDrawer
				testId="nav"
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.click(getByTitle('Open Menu'));
		expect(getByText('Home')).toBeTruthy();
		fireEvent.click(getByTestId('nav-overlay'));
		expect(async () => await findByText('Home')).rejects;
		expect(document.activeElement).toBe(getByTitle('Open Menu'));
	});

	it('menu opens on pressing space', () => {
		const { getByText, getByTitle } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.keyDown(getByTitle('Open Menu'), {
			key: ' ',
			code: 'Space',
			keyCode: 32,
			charCode: 32,
		});
		expect(getByText('Home')).toBeTruthy();
	});

	it('menu opens on pressing enter', () => {
		const { getByText, getByTitle } = render(
			<NavigationDrawer
				items={[
					{
						key: 'home',
						title: 'Home',
						link: '/',
					},
					{
						key: 'about',
						title: 'About',
						link: '/about',
					},
				]}
			/>,
		);
		fireEvent.keyDown(getByTitle('Open Menu'), {
			key: 'Enter',
			code: 'Enter',
			keyCode: 13,
			charCode: 13,
		});
		expect(getByText('Home')).toBeTruthy();
	});
});
