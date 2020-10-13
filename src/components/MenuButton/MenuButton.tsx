import React, { FC, useState, useEffect, useRef } from 'react';
import { Component } from '../../types';
import { useGenerateUniqueId } from '../../hooks';

// Components
import { Menu, MenuItem } from '../Menu';
import { ButtonVariant } from '../Button';
import { ChevronDown, SVG } from '../SVG';

// Styles
import cx from 'classnames';
import cn from './MenuButton.scss';
import btnCN from '../Button/Button.scss';

export interface MenuButtonProps extends Component {
	items: MenuItem[];
	tooltip: string;
	onPress?: (id: string) => void;
	variant?: ButtonVariant;
	id?: string;
	hideDropdownArrow?: boolean;
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
	const menuId = useGenerateUniqueId(props.id ?? 'menu', 16);
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const checkClick = () => {
		setIsOpen(false);
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
			style={props.style}
		>
			<button
				className={cx(
					btnCN.button,
					btnCN[props.variant ?? 'neutral'],
					cn.button,
					props.className,
				)}
				title={props.tooltip}
				tabIndex={0}
				onClick={(event) => {
					event.preventDefault();
					event.stopPropagation();
					setIsOpen(!isOpen);
				}}
				onKeyPress={(event) => {
					event.preventDefault();
					event.stopPropagation();
					(event.which === 13 || event.which === 32) &&
						setIsOpen(!isOpen);
				}}
				aria-expanded={isOpen ? 'true' : 'false'}
				aria-haspopup="true"
				aria-controls={menuId}
				ref={buttonRef}
				aria-label={props.tooltip}
				style={props.style}
			>
				{props.children}
				{!props.hideDropdownArrow ? (
					<SVG
						svg={ChevronDown}
						tooltip=""
						design={
							props.variant === 'lightweight'
								? 'default'
								: 'inverted'
						}
						style={{ marginInlineStart: 'var(--spacing-sm)' }}
					/>
				) : null}
			</button>
			<Menu
				originRef={btnRef}
				items={props.items}
				isOpen={isOpen}
				onPress={(id: string) => {
					props.onPress?.(id);
				}}
				className={cn.menu}
				menuId={menuId}
				onClose={() => {
					setIsOpen(false);
				}}
			></Menu>
		</div>
	);
};
