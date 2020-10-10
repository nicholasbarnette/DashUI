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
										label={`--color-${pattern}`}
									/>
									<ColorChip
										color={`var(--pattern-neutral-${pattern}-bd)`}
										label={`--color-${pattern}`}
									/>
									<ColorChip
										color={`var(--pattern-neutral-${pattern}-fg)`}
										label={`--color-${pattern}`}
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
										label={`--color-${pattern}`}
									/>
									<ColorChip
										color={`var(--pattern-primary-${pattern}-bd)`}
										label={`--color-${pattern}`}
									/>
									<ColorChip
										color={`var(--pattern-primary-${pattern}-fg)`}
										label={`--color-${pattern}`}
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
										label={`--color-${pattern}`}
									/>
									<ColorChip
										color={`var(--pattern-secondary-${pattern}-bd)`}
										label={`--color-${pattern}`}
									/>
									<ColorChip
										color={`var(--pattern-secondary-${pattern}-fg)`}
										label={`--color-${pattern}`}
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
