import React, { Fragment } from 'react';
import { AppRoot } from '../../AppRoot';
import {
	LeftNavigation,
	NavigationBar,
	NavigationDrawer,
	NavigationLink,
} from '../../Navigation';
import {
	SVG,
	GitHub,
	YouTube,
	Twitter,
	Home,
	Profile,
	Document,
} from '../../SVG';
import { VerticalTabs } from '../../VerticalTabs';

export default {
	component: AppRoot,
	title: 'Components/AppRoot',
};

export const AppWithLeftNavigation = () => {
	return (
		<AppRoot>
			<NavigationBar
				left={
					<NavigationLink link="/">Application Name</NavigationLink>
				}
				right={
					<Fragment>
						<NavigationLink link="/">
							<SVG
								svg={GitHub}
								tooltip="Link"
								design="inverted"
							/>
						</NavigationLink>
						<NavigationLink link="/">
							<SVG
								svg={YouTube}
								tooltip="Link"
								design="inverted"
							/>
						</NavigationLink>
						<NavigationLink link="/">
							<SVG
								svg={Twitter}
								tooltip="Link"
								design="inverted"
							/>
						</NavigationLink>
					</Fragment>
				}
			/>
			<LeftNavigation
				items={[
					{
						svg: Home,
						text: 'Item 1',
						content: (
							<VerticalTabs
								tabs={[
									{
										title: 'Tab 1',
										content: <p>Content 1</p>,
									},
									{
										title: 'Tab 2',
										content: <p>Content 2</p>,
									},
									{
										title:
											'Tab 3 has a really really long name',
										description:
											'This is a very very ver long description',
										content: <p>Content 3</p>,
									},
									{
										title: 'Tab 4',
										description: 'This is a description',
										content: <p>Content 4</p>,
									},
								]}
							/>
						),
					},
					{ svg: Profile, text: 'Item 2', content: <p>Content 2</p> },
					{
						svg: Document,
						text: 'Item 3',
						content: <p>Content 3</p>,
					},
				]}
			/>
		</AppRoot>
	);
};

export const AppWithNavigationDrawer = () => {
	return (
		<AppRoot>
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
								key: 'hidden',
								title: 'Hidden',
								link: '/hidden',
								hidden: true,
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
								link:
									'https://abormalcompany.com/privacy-policy/',
							},
							{
								key: 'profile',
								title: 'Profile',
								link: '/profile',
							},
						]}
					/>
				}
				center={
					<NavigationLink link="/">Application Name</NavigationLink>
				}
				right={
					<Fragment>
						<NavigationLink link="/">
							<SVG
								svg={GitHub}
								tooltip="Link"
								design="inverted"
							/>
						</NavigationLink>
						<NavigationLink link="/">
							<SVG
								svg={YouTube}
								tooltip="Link"
								design="inverted"
							/>
						</NavigationLink>
						<NavigationLink link="/">
							<SVG
								svg={Twitter}
								tooltip="Link"
								design="inverted"
							/>
						</NavigationLink>
					</Fragment>
				}
			/>
			<LeftNavigation
				items={[
					{
						svg: Home,
						text: 'Item 1',
						content: (
							<VerticalTabs
								tabs={[
									{
										title: 'Tab 1',
										content: <p>Content 1</p>,
									},
									{
										title: 'Tab 2',
										content: <p>Content 2</p>,
									},
									{
										title:
											'Tab 3 has a really really long name',
										description:
											'This is a very very ver long description',
										content: <p>Content 3</p>,
									},
									{
										title: 'Tab 4',
										description: 'This is a description',
										content: <p>Content 4</p>,
									},
								]}
							/>
						),
					},
					{ svg: Profile, text: 'Item 2', content: <p>Content 2</p> },
					{
						svg: Document,
						text: 'Item 3',
						content: <p>Content 3</p>,
					},
				]}
			/>
		</AppRoot>
	);
};
