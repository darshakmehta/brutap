import React from 'react';
import Header from '../components/Header';
import DraftMenu from '../components/DraftMenu';
import BrowseBeer from '../components/BrowseBeer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = ( props ) => (
    <BrowserRouter>
    	<React.Fragment>
	        <Header title = "BruTap" />
	        <Switch>
	            <Route 
	            	exact = { true }
	            	path = "/" 
	            	render = 
	            	{ 
	            		() => 
			            	<DraftMenu 
			            		draftMenu = { props.draftMenu } 
			            		handleRemoveBeer = { props.handleRemoveBeer }
			            	/> 
	            	} 
	            />                
	            <Route 
	            	exact = { true }
	            	path = "/browseBeer" 
	            	render = 
	            	{
	            		 () => 
	            		 	<BrowseBeer 
	            		 		browseBeer = { props.browseBeer } 
	            		 		handleAddBeer = { props.handleAddBeer } 
	            		 	/> 
	            	} 
	            />    
	        </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;