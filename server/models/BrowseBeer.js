const mongoose = require('mongoose');
const { beerSchema } = require('./beerSchema');

/* BrowseBeer Model to represent all beers */
const BrowseBeerModel = mongoose.model('browsebeers', beerSchema);

/* Get All Beer */
module.exports.getAllBeer = () => {
	try {
		return BrowseBeerModel.find();
	} catch ( e ) {
		console.log( e );
	}
}