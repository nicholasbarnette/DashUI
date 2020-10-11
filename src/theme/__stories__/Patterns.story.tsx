import React, { FC, ReactElement } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default {
	title: 'Design/Patterns',
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

export const Neutral = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme['pattern-neutral']).map(
						(pattern) => {
							colors.push(
								<div style={{ display: 'row' }}>
									<ColorChip
										color={`var(--pattern-neutral-${pattern}-bg)`}
										label={`--pattern-neutral-${pattern}-bg`}
									/>
									<ColorChip
										color={`var(--pattern-neutral-${pattern}-bd)`}
										label={`--pattern-neutral-${pattern}-bd`}
									/>
									<ColorChip
										color={`var(--pattern-neutral-${pattern}-fg)`}
										label={`--pattern-neutral-${pattern}-fg`}
									/>
								</div>,
							);
						},
					);
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};

export const Primary = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme['pattern-primary']).map(
						(pattern) => {
							colors.push(
								<div style={{ display: 'row' }}>
									<ColorChip
										color={`var(--pattern-primary-${pattern}-bg)`}
										label={`--pattern-primary-${pattern}-bg`}
									/>
									<ColorChip
										color={`var(--pattern-primary-${pattern}-bd)`}
										label={`--pattern-primary-${pattern}-bd`}
									/>
									<ColorChip
										color={`var(--pattern-primary-${pattern}-fg)`}
										label={`--pattern-primary-${pattern}-fg`}
									/>
								</div>,
							);
						},
					);
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};

export const Secondary = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme['pattern-secondary']).map(
						(pattern) => {
							colors.push(
								<div style={{ display: 'row' }}>
									<ColorChip
										color={`var(--pattern-secondary-${pattern}-bg)`}
										label={`--pattern-secondary-${pattern}-bg`}
									/>
									<ColorChip
										color={`var(--pattern-secondary-${pattern}-bd)`}
										label={`--pattern-secondary-${pattern}-bd`}
									/>
									<ColorChip
										color={`var(--pattern-secondary-${pattern}-fg)`}
										label={`--pattern-secondary-${pattern}-fg`}
									/>
								</div>,
							);
						},
					);
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};

export const Lightweight = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<ThemeContext.Consumer>
				{({ theme }) => {
					let colors: ReactElement[] = [];
					Object.keys(theme.theme['pattern-lightweight']).map(
						(pattern) => {
							colors.push(
								<div style={{ display: 'row' }}>
									<ColorChip
										color={`var(--pattern-lightweight-${pattern}-bg)`}
										label={`--pattern-lightweight-${pattern}-bg`}
									/>
									<ColorChip
										color={`var(--pattern-lightweight-${pattern}-bd)`}
										label={`--pattern-lightweight-${pattern}-bd`}
									/>
									<ColorChip
										color={`var(--pattern-lightweight-${pattern}-fg)`}
										label={`--pattern-lightweight-${pattern}-fg`}
									/>
								</div>,
							);
						},
					);
					return colors;
				}}
			</ThemeContext.Consumer>
		</div>
	);
};
