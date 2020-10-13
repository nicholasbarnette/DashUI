import React, { FC } from 'react';
import { useCookies } from '../../../hooks';
import { Button } from '../../Button';
import { StarFilled } from '../../SVG';

export default {
	component: Button,
	title: 'Components/Button',
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
			<Button tooltip="Basic Button" variant="secondary">
				Secondary Button
			</Button>
			<Button tooltip="Basic Button" variant="lightweight">
				Neutral Light Button
			</Button>
			<Button tooltip="Basic Button" shape="pill">
				Pill Button
			</Button>

			<Button tooltip="Button with icon" icon={{ svg: StarFilled }}>
				Icon Button
			</Button>
			<Button
				tooltip="Button with icon"
				icon={{ svg: StarFilled }}
				variant="primary"
			>
				Icon Button
			</Button>
			<Button
				tooltip="Button with icon"
				icon={{ svg: StarFilled }}
				variant="secondary"
			>
				Icon Button
			</Button>
			<Button
				tooltip="Button with icon"
				icon={{ svg: StarFilled }}
				variant="lightweight"
			>
				Icon Button
			</Button>

			<Button tooltip="Button with icon" icon={{ svg: StarFilled }} />
			<Button
				tooltip="Button with icon"
				icon={{ svg: StarFilled }}
				variant="primary"
			/>
			<Button
				tooltip="Button with icon"
				icon={{ svg: StarFilled }}
				variant="secondary"
			/>
			<Button
				tooltip="Button with icon"
				icon={{ svg: StarFilled }}
				variant="lightweight"
			/>
		</div>
	);
};

export const Disabled = () => {
	return (
		<div>
			<Button tooltip="Basic Button" disabled>
				Neutral Button
			</Button>
			<Button tooltip="Basic Button" disabled variant="primary">
				Primary Button
			</Button>
			<Button tooltip="Basic Button" disabled variant="secondary">
				Secondary Button
			</Button>
			<Button tooltip="Basic Button" disabled variant="lightweight">
				Lightweight Button
			</Button>
		</div>
	);
};
