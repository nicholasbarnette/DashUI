import React from 'react';
import { Badge } from '../../Badge';

export default {
	component: Badge,
	title: 'Components/Badge',
};

export const Basic = () => {
	return (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<Badge>Neutral Badge</Badge>
			<Badge variant="primary">Primary Badge</Badge>
			<Badge variant="secondary">Secondary Badge</Badge>
			<Badge variant="secondary">Primary badge with long content.</Badge>
		</div>
	);
};

export const Clickable = () => {
	return <Badge onPress={() => {}}>This is my test app.</Badge>;
};
