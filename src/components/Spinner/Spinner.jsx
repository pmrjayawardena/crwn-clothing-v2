import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './SpinnerStyle';
export const Spinner = (props) => {
	return (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	);
};

export default Spinner;
