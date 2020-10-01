import React, { useState, Fragment } from 'react';
import { Dialog } from '../../Dialog';
import { Button } from '../../Button';

export default {
	component: Dialog,
	title: 'Dialog',
};

export const Basic = () => {
	const [showDialog, setShowDialog] = useState(false);
	return (
		<Fragment>
			<Button
				tooltip="Open Dialog"
				onPress={() => {
					setShowDialog(true);
				}}
			>
				Open Dialog
			</Button>
			<Dialog
				showDialog={showDialog}
				closeButton={{
					text: 'Close',
					props: {
						tooltip: 'Close',
						onPress: () => {
							setShowDialog(false);
						},
					},
				}}
				title="Dialog"
				width="45rem"
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</Dialog>
		</Fragment>
	);
};

export const Design = () => {
	return (
		<Dialog
			showDialog={true}
			closeButton={{
				text: 'Close',
				props: {
					onPress: () => {},
					tooltip: 'Close',
				},
			}}
			submitButton={{
				text: 'Submit',
				props: {
					onPress: () => {},
					variant: 'primary',
					tooltip: 'Submit',
				},
			}}
			title="Dialog"
			width="45rem"
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Dialog>
	);
};
