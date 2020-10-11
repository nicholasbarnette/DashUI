import React, {
	FC,
	useState,
	useRef,
	useEffect,
	Fragment,
	KeyboardEvent,
} from 'react';
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
	hidden?: boolean;
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
		if (isOpen) {
			setFocusedIdx(0);
		} else {
			setFocusedIdx(-1);
			menuRef.current?.focus();
		}
	}, [isOpen]);

	const calculateFocus = (event: KeyboardEvent) => {
		let newIdx = focusedIdx;
		switch (event.which) {
			case event.shiftKey && 9: // reverse tab
			case 38: // up
				while (newIdx - 1 >= -1) {
					newIdx--;
					if (newIdx <= -1) {
						newIdx = 0;
						break;
					}
					if (!props.items[newIdx].hidden) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			case 9: // tab
			case 40: // down
				while (newIdx + 1 <= props.items.length) {
					newIdx++;
					if (newIdx >= props.items.length) {
						newIdx = focusedIdx;
						break;
					}
					if (!props.items[newIdx].hidden) {
						break;
					}
				}
				setFocusedIdx(newIdx);
				return;
			case 27:
				setFocusedIdx(-1);
				setIsOpen(false);
				return;
			default:
				return;
		}
	};

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
				data-testid={props.testId ? `${props.testId}-menu` : null}
			>
				<nav className={cx(cn.navigationBar, props.className)}>
					<ul
						className={cn.list}
						onKeyDown={(event) => {
							calculateFocus(event);
						}}
					>
						{props.items.map((itm, idx) => {
							return !itm.hidden ? (
								<NavigationDrawerItem
									key={itm.key ?? itm.title}
									href={itm.link}
									isFocused={isOpen && focusedIdx === idx}
								>
									{itm.title}
								</NavigationDrawerItem>
							) : null;
						})}
					</ul>
				</nav>
				<div
					className={cn.overlay}
					onClick={() => {
						setIsOpen(false);
					}}
					data-testid={
						props.testId ? `${props.testId}-overlay` : null
					}
				></div>
			</div>
		</Fragment>
	);
};
