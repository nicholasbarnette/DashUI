import React from 'react';
import { Switch } from '../Switch';

export default {
	component: Switch,
	title: 'Components/Switch',
};

export const Basic = () => {
	return <Switch onSwitch={() => {}} />;
};

export const withLabels = () => {
	return <Switch labels={['Left', 'Right']} onSwitch={() => {}} />;
};
