import React, { FC, useState, useRef, useEffect, Fragment } from 'react';
import { Component } from '../../types';

// Components
import { SVG, Hamburger } from '../SVG';

// Styles
import cx from 'classnames';
import cn from './NavigationDrawer.scss';

export interface NavigationDrawerMenuItem {
	key?: string;
	title: string;
	link: string;
	display?: boolean;
}

export interface NavigationDrawerItemProps {
	href: string;
	children: string;
	isFocused?: boolean;
}

export interface NavigationDrawerProps extends Component {
	items: NavigationDrawerMenuItem[];
}

export const NavigationDrawerItem: FC<NavigationDrawerItemProps> = (props) => {
	const itemRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		if (props.isFocused) {
			itemRef.current?.focus();
		}
	}, [props.isFocused, itemRef]);

	return (
		<li>
			<a className={cn.item} tabIndex={0} href={props.href} ref={itemRef}>
				{props.children}
			</a>
		</li>
	);
};

export const NavigationDrawer: FC<NavigationDrawerProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [focusedIdx, setFocusedIdx] = useState(-1);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setFocusedIdx(0);
	}, [isOpen]);

	useEffect(() => {
		if (focusedIdx === -1) {
			menuRef.current?.focus();
		}
	}, [focusedIdx]);

	return (
		<Fragment>
			<div
				className={cn.menu}
				title="Open Menu"
				onClick={(event) => {
					event.preventDefault();
					setIsOpen(!isOpen);
				}}
				onKeyPress={(event) => {
					event.preventDefault();
					(event.which === 13 || event.which === 32) &&
						setIsOpen(!isOpen);
				}}
				onKeyDown={(event) => {
					switch (event.which) {
						case event.shiftKey && 9: // reverse tab
						case 38: // up
							setFocusedIdx(
								focusedIdx - 1 <= -2 ? -1 : focusedIdx - 1,
							);
							return;
						case 9: // tab
						case 40: // down
							setFocusedIdx(
								focusedIdx + 1 >= 3
									? focusedIdx
									: focusedIdx + 1,
							);
							return;
						case 27:
							setFocusedIdx(-1);
							setIsOpen(false);
							return;
						default:
							return;
					}
				}}
				tabIndex={0}
				ref={menuRef}
			>
				<SVG
					svg={Hamburger}
					tooltip="Toggle navigation drawer"
					design="inverted"
				/>
			</div>
			<div
				className={cx(
					cn.navigationOverlay,
					(isOpen && cn.open) || cn.closed,
					props.className,
				)}
			>
				<nav className={cx(cn.navigationBar, props.className)}>
					<ul
						className={cn.list}
						onKeyDown={(event) => {
							switch (event.which) {
								case event.shiftKey && 9: // reverse tab
								case 38: // up
									setFocusedIdx(
										focusedIdx - 1 <= -2
											? -1
											: focusedIdx - 1,
									);
									return;
								case 9: // tab
								case 40: // down
									setFocusedIdx(
										focusedIdx + 1 >= props.items.length
											? focusedIdx
											: focusedIdx + 1,
									);
									return;
								case 27:
									setFocusedIdx(-1);
									setIsOpen(false);
									return;
								default:
									return;
							}
						}}
					>
						{props.items.map((itm, idx) => {
							return (
								<NavigationDrawerItem
									key={itm.key ?? itm.title}
									href={itm.link}
									isFocused={isOpen && focusedIdx === idx}
								>
									{itm.title}
								</NavigationDrawerItem>
							);
						})}
					</ul>
				</nav>
				<div
					className={cn.overlay}
					onClick={() => {
						setIsOpen(false);
					}}
				></div>
			</div>
		</Fragment>
	);
};
