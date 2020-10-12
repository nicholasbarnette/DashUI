import React, { FC } from 'react';
import { Component } from '../../types';
import { SpacingSize } from '../../theme/ThemeDerivation';

// Styles
import cn from './Divider.scss';
import cx from 'classnames';

export interface DividerProps extends Component {
	variant?: 'light' | 'dark';
	orientation?: 'horizontal' | 'vertical';
	spacing?: SpacingSize;
}

export const Divider: FC<DividerProps> = (props) => {
	return (
		<hr
			data-testid={props.testId}
			className={cx(
				cn.divider,
				props.variant === 'dark' ? cn.dark : cn.light,
				cn[props.orientation ?? 'horizontal'],
				props.className,
			)}
			role="separator"
			style={{
				...props.style,
				marginBlockStart:
					props.spacing && `var(--spacing-${props.spacing})`,
				marginBlockEnd:
					props.spacing && `var(--spacing-${props.spacing})`,
			}}
		/>
	);
};
