import React from 'react';
import { Switch } from '../Switch';

export default {
	component: Switch,
	title: 'Switch',
};

export const Basic = () => {
	return <Switch />;
};

export const withLabels = () => {
	return <Switch labels={['Left', 'Right']} />;
};
