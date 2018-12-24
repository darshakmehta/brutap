const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded( { extended: false } );

const DraftMenu = require( __dirname + '/models/DraftMenu' );
const BrowseBeer = require( __dirname + '/models/BrowseBeer' );
const mongoose = require( __dirname + '/mongoose' );

const app = express();

app.use(cors());
app.get('/api/browseBeer', async ( req, res ) => {
	const menu = await BrowseBeer.getAllBeer();
	res.send( menu );
});

app.get('/api/draftMenu', async ( req, res ) => {
	const menu = await DraftMenu.getDraftMenu();
	res.send( menu );
});

app.post('/api/addToDraftMenu', urlencodedParser, async ( req, res ) => {
	await DraftMenu.addToDraftMenu( req.body );
});

app.delete('/api/removeBeer/:id', async ( req, res ) => {
	await DraftMenu.removeBeerFromDraftMenu( req.params.id ); 
});

/* Listen Express app on Port 8080 */
const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log( 'App listening at port ' + port );
});