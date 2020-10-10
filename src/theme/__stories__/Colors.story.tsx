import React, { FC, ReactElement } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default {
	title: 'Design/Colors',
};

const ColorChip: FC<{ color: string; label: string }> = (props) => {
	return (
		<div style={{ display: 'flex' }}>
			<div
				style={{
					height: '2rem',
					width: '2rem',
					backgroundColor: props.color,
					border: '1px solid #ffffff',
				}}
			></div>
			<span style={{ marginInlineStart: '1rem' }}>{props.label}</span>
		</div>
	);
};

export const Palette = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme.color).map((color) => {
						colors.push(
							<ColorChip
								color={`var(--color-${color})`}
								label={`--color-${color}`}
							/>,
						);
					});
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};

export const Backgrounds = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme.background).map((color) => {
						colors.push(
							<ColorChip
								color={`var(--background-${color})`}
								label={`--background-${color}`}
							/>,
						);
					});
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};

export const TextColors = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme.text).map((color) => {
						colors.push(
							<ColorChip
								color={`var(--text-${color})`}
								label={`--text-${color}`}
							/>,
						);
					});
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};
