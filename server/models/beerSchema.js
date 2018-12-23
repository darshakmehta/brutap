const mongoose = require('mongoose');

/* Represent Beer Schema for Mongoose Models */
module.exports.beerSchema = new mongoose.Schema({
	'Brewery Name': {
		type: String, required: true
	},
	'Beer Name': {
		type: String, required: true
	},
	'Beer Style': {
		type: String, required: true
	},
	ABV: {
		type: String, required: true
	},
	IBU: {
		type: String, required: true
	}
});