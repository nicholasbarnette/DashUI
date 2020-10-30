import React, { FC } from 'react';
import { Component } from '../../types';

// Styles
import cx from 'classnames';
import cn from './BusyIndicator.scss';

export interface BusyIndicatorProps extends Component {
	title?: string;
	fillContainer?: boolean;
}

export const BusyIndicator: FC<BusyIndicatorProps> = (props) => {
	return (
		<div
			style={props.style}
			className={cx(
				cn.container,
				props.fillContainer && cn.fillContainer,
				props.className,
			)}
			data-testid={props.testId}
			title={props.title ?? 'Loading...'}
			aria-busy={true}
		>
			<div className={cn.dot}></div>
			<div className={cn.dot}></div>
			<div className={cn.dot}></div>
		</div>
	);
};
