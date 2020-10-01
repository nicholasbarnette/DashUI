import React, { Fragment } from 'react';
import { NavigationBar, NavigationDrawer, NavigationLink } from '../';
import { SVG, GitHub, YouTube, Twitter } from '../../SVG';

export default {
	component: NavigationBar,
	title: 'NavigationBar',
};

export const Basic = () => {
	return (
		<NavigationBar
			left={
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
						{
							key: 'question',
							title: 'Questions',
							link: '/question',
						},
						{
							key: 'userQuestion',
							title: 'User Questions',
							link: '/question/public',
						},
						{
							key: 'questionCreate',
							title: 'Ask a Question',
							link: '/question/create',
						},
						{
							key: 'terms',
							title: 'Terms of Service',
							link:
								'https://abormalcompany.com/terms-of-service/',
						},
						{
							key: 'privacy',
							title: 'Privacy Policy',
							link: 'https://abormalcompany.com/privacy-policy/',
						},
						{
							key: 'profile',
							title: 'Profile',
							link: '/profile',
						},
					]}
				/>
			}
			center={<NavigationLink link="/">Am I Bormal?</NavigationLink>}
			right={
				<Fragment>
					<NavigationLink link="/">
						<SVG svg={GitHub} tooltip="Link" />
					</NavigationLink>
					<NavigationLink link="/">
						<SVG svg={YouTube} tooltip="Link" />
					</NavigationLink>
					<NavigationLink link="/">
						<SVG svg={Twitter} tooltip="Link" />
					</NavigationLink>
				</Fragment>
			}
		/>
	);
};
