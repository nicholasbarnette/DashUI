import React, {
	FC,
	ReactElement,
	useEffect,
	useRef,
	KeyboardEvent,
} from 'react';
import { Component } from '../../types';

// Styles
import cn from './VerticalTab.scss';
import cx from 'classnames';

export interface VerticalTab {
	title: string;
	description?: string;
	content: ReactElement;
	hidden?: boolean;
}

export interface VerticalTabProps extends Component {
	title: string;
	description?: string;
	isFocused?: boolean;
	selected?: boolean;
	onPress?: () => void;
}

export const VerticalTab: FC<VerticalTabProps> = (props) => {
	const itemRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (props.isFocused) {
			itemRef.current?.focus();
		}
	}, [props.isFocused, itemRef]);

	return (
		<li
			data-testid={props.testId}
			className={cx(
				cn.tab,
				props.selected && cn.selected,
				props.className,
			)}
			style={props.style}
			ref={itemRef}
			tabIndex={props.selected && props.isFocused ? 0 : -1}
			onClick={() => {
				props.onPress?.();
			}}
			onKeyPress={(event: KeyboardEvent) => {
				(event.which === 13 || event.which === 32) && props.onPress?.();
			}}
		>
			<span className={cn.title} title={props.title}>
				{props.title}
			</span>
			{!!props.description ? (
				<span className={cn.description} title={props.description}>
					{props.description}
				</span>
			) : null}
		</li>
	);
};
