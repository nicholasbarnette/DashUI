import React from 'react';
import { Button } from '../../Button';

export default {
	component: Button,
	title: 'Button',
};

export const Basic = () => {
	return <Button tooltip="Basic Button">Basic Button</Button>;
};

export const Design = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridGap: '1rem',
				gridTemplateColumns: '1fr',
				gridAutoRows: 'auto',
				justifyItems: 'flex-start',
			}}
		>
			<Button tooltip="Basic Button">Neutral Button</Button>
			<Button tooltip="Basic Button" variant="primary">
				Primary Button
			</Button>
			<Button tooltip="Basic Button" variant="lightweight">
				Neutral Light Button
			</Button>
			<Button tooltip="Basic Button" shape="pill">
				Pill Button
			</Button>
		</div>
	);
};

export const Disabled = () => {
	return (
		<Button tooltip="Basic Button" disabled>
			Neutral Button
		</Button>
	);
};
