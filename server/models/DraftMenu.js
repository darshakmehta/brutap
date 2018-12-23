const mongoose = require('mongoose');
const { beerSchema } = require('./beerSchema');

/* DraftMenu Model to represent Users tapped beers */
const DraftMenu = mongoose.model( 'draftmenus', beerSchema );

/* Add User chosen Beer to Draft menu */
module.exports.addToDraftMenu = async ( beer ) => {
	
	let json = [];

	await Object.keys( beer ).forEach(( item ) => {
		json = JSON.parse( item);
	});
	
	for( let i = 0; i < json.length; i++ ) {
		const newBeer = new DraftMenu( json[i] );
		saveBeer( newBeer );
	}
};

/* Store Beer in draftmenus Collection */
const saveBeer = ( beer ) => {
	beer.save(( err ) => {
		if( err ) throw err;
	});
};

/* Remove Beer from database */
module.exports.removeBeerFromDraftMenu = ( _id ) => {
	try {
		DraftMenu.findOneAndRemove( { _id }, ( err, doc ) => {
			if ( err ) throw err;
		});
	} catch ( e ) {
		console.log( e );
	}
}

/* Get Draft Menu */
module.exports.getDraftMenu = () => {
	try {
		return DraftMenu.find();
	} catch(e) {
		console.log(e);
	}
}