import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';
// dropdown component (may be deprecated)

function FPIDropdown() {
	return (
		<PopupState variant="popover" popupId="demo-popup-menu">
			{popupState => (
				<React.Fragment>
					<Button variant="contained" {...bindTrigger(popupState)}>
            			Select Dietary Restriction
					</Button>
					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>Vegetarian</MenuItem>
						<MenuItem onClick={popupState.close}>Vegan</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
}

export default FPIDropdown;