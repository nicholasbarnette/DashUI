import React, { useState } from 'react';
import { create } from 'react-test-renderer';
import { List } from '../../List';
import { ListItem } from '../ListItem';

export default {
	component: List,
	title: 'Components/List',
};

const createItems = (n: number, desc: boolean) => {
	let items: ListItem[] = [];
	for (let i = 0; i < n; i++) {
		items.push({
			text: `List Item ${i + 1}`,
			description: desc
				? `List item ${i + 1} description text`
				: undefined,
		});
	}
	return items;
};

export const Basic = () => {
	return <List items={createItems(10, false)} />;
};

export const WithDescription = () => {
	return <List items={createItems(10, true)} />;
};

export const Interactable = () => {
	const [selected, setSelected] = useState<string | number>(0);
	return (
		<List
			items={createItems(10, true)}
			interactable
			selectedKey={selected}
			onPress={(key) => setSelected(key ?? 0)}
		/>
	);
};

export const Display = () => {
	const [selected, setSelected] = useState<string | number>(0);
	const [display, setDisplay] = useState(10);
	return (
		<div style={{ height: '20rem' }}>
			<List
				items={createItems(40, true)}
				interactable
				selectedKey={selected}
				onPress={(key) => setSelected(key ?? 0)}
				display={display}
				increaseDisplay={() => setDisplay(display + 5)}
			/>
		</div>
	);
};
