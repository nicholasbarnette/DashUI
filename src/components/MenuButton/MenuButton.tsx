import React, { FC, useState, useEffect, useRef } from 'react';
import { Component } from '../../types';

// Components
import { Menu, MenuItem, GenerateMenuId } from '../Menu';
import { getVariantClassName, ButtonVariant } from '../Button';

// Styles
import cx from 'classnames';
import cn from './MenuButton.scss';
import btnCN from '../Button/Button.scss';

export interface MenuButtonProps extends Component {
	items?: MenuItem[];
	tooltip: string;
	onPress?: (id: string) => void;
	variant?: ButtonVariant;
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
	const [menuId, setMenuId] = useState(GenerateMenuId);
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const checkClick = (event: any) => {
		let shouldClose = true;
		for (let p of event.path) {
			if (p && p.getAttribute && p.getAttribute('data-menuid')) {
				shouldClose =
					shouldClose && !(p.getAttribute('data-menuid') === menuId);
				if (!shouldClose) break;
			}
		}
		shouldClose && setIsOpen(false);
	};

	const checkBlur = (event: any) => {
		let shouldClose = true;
		for (let p of event.path) {
			if (p && p.getAttribute && p.getAttribute('data-menuid')) {
				shouldClose =
					shouldClose && !(p.getAttribute('data-menuid') === menuId);
				if (!shouldClose) break;
			}
		}
		shouldClose && setIsOpen(false);
	};

	useEffect(() => {
		window.addEventListener('click', checkClick);
		return () => {
			window.removeEventListener('click', checkClick);
		};
	}, []);

	return (
		<div
			ref={btnRef}
			className={cx(cn.container, props.className)}
			data-testid={props.testId}
			data-menuid={menuId}
		>
			<button
				className={cx(
					btnCN.button,
					getVariantClassName(props.variant),
					cn.button,
					props.className,
				)}
				title={props.tooltip}
				tabIndex={0}
				onClick={(event) => {
					event.preventDefault();
					setIsOpen(!isOpen);
				}}
				onKeyPress={(event) => {
					event.preventDefault();
					(event.which === 13 || event.which === 32) &&
						setIsOpen(!isOpen);
				}}
				aria-expanded={isOpen ? 'true' : 'false'}
				aria-haspopup='true'
				aria-controls={menuId}
				ref={buttonRef}
				aria-label={props.tooltip}
				style={props.style}
			>
				{props.children}
			</button>
			<Menu
				originRef={btnRef}
				items={props.items}
				isOpen={isOpen}
				onPress={(id: string) => {
					if (id === '') {
						setIsOpen(false);
						buttonRef.current?.focus();
					}
					props.onPress?.(id);
				}}
				className={cn.menu}
				menuId={menuId}
			></Menu>
		</div>
	);
};
