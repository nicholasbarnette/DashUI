import React, { FC, Fragment } from 'react';
import { Component } from '../../types';
import { Text } from '../Text';

// Styles
import cx from 'classnames';
import cn from './ProgressBar.scss';

export interface ProgressBarProps extends Component {
	/**
	 * Percentage on the scale [0-100]
	 */
	percentage: number;
	label: string;
}

export const ProgressBar: FC<ProgressBarProps> = (props) => {
	return (
		<div style={props.style} className={cx(cn.container, props.className)}>
			<Fragment>
				<div
					style={{
						width: `${props.percentage}%`,
					}}
					className={cn.progress}
				></div>
				<Text className={cn.percentage}>{`${
					props.percentage ?? '0'
				}%`}</Text>
			</Fragment>
			<Text className={cn.label}>{props.label}</Text>
		</div>
	);
};
