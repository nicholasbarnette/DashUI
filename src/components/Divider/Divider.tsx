import React, { FC } from 'react';
import { Component } from '../../types';
import { SpacingSize } from '../../theme/ThemeDerivation';

// Styles
import cn from './Divider.scss';
import cx from 'classnames';

export interface DividerProps extends Component {
	variant?: 'light' | 'dark';
	spacing?: SpacingSize;
}

export const Divider: FC<DividerProps> = (props) => {
	return (
		<hr
			data-testid={props.testId}
			className={cx(
				cn.divider,
				props.variant === 'dark' ? cn.dark : cn.light,
				props.className,
			)}
			role="separator"
			style={{
				...props.style,
				marginBlockStart: `var(--spacing-${props.spacing})`,
				marginBlockEnd: `var(--spacing-${props.spacing})`,
			}}
		/>
	);
};
