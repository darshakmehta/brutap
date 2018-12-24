import React from 'react';
import Options from '../components/Options';

const DraftMenu = ( props ) => (
	<React.Fragment>
		<Options 
			options = { props.draftMenu } 
			handleRemoveBeer = { props.handleRemoveBeer } 
		/>
	</React.Fragment>	
);

export default DraftMenu;