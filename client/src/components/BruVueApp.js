import React, { Component } from 'react';
import axios from 'axios';
import AppRouter from '../routers/AppRouter';

class BruVueApp extends Component {
  constructor( props ) {
  	super( props );
    this.state = {
        draftMenu : [],
        browseBeer : [],
    }
    this.loadDraftMenu = this.loadDraftMenu.bind( this ); 
    this.loadBeerDB = this.loadBeerDB.bind( this ); 
  };

  loadDraftMenu() {
      axios.get( this.props.draftMenu )
       .then(( res ) => {
          
          const draftMenu = [];
          
          Object.keys( res.data ).forEach(( beer ) => {
            draftMenu.push( res.data[beer] );
          });

          this.setState({
            draftMenu
          });

       })
       .catch(( err ) =>{
          console.log( err );
      });
  };

  loadBeerDB() {
    axios.get( this.props.browseBeer )
     .then(( res ) => {
        const browseBeer = [];

        Object.keys( res.data ).forEach(( beer ) => {
            browseBeer.push( res.data[beer] );
        });
        
        this.setState({
            browseBeer
        });

     })
      .catch(( err ) => {
        console.log( err );
     });
  };

  componentDidMount() {
    this.loadDraftMenu();
    this.loadBeerDB();
  };

  addToDraftMenu = ( draftMenu ) => {
    var config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    // const beerArr = {beerArr: draftMenu};
    axios.post( 'https://brutap-server.herokuapp.com/api/addToDraftMenu', draftMenu, config )
      .then(( res ) => {
        /* Successfull message */
      })
      .catch(( err ) =>{
        console.log( err );
      });
  };

  removeBeerFromDraftMenu = ( _id ) => {
    axios.delete( 'https://brutap-server.herokuapp.com/api/removeBeer/' + _id )
      .then(( res ) => {
        /* Successfull message */
      })
      .catch(( err ) =>{
        console.log( err );
      });
  }

  handleAddBeer = async ( arr ) => {

    if ( arr.length <= 10 && arr.length > 0 ) {

      const newArr = this.state.draftMenu.concat( arr );
      const draftMenu = [];
      const idArr = [];

      /* Find draftMenu to update state */
      for( let i in newArr ) {
        if ( !idArr.includes( newArr[i]["_id"] ) ) {
            idArr.push( newArr[i]["_id"] );
            draftMenu.push( newArr[i] );
        }
      }

      /* Find newDraftMenu to update database */
      const newDraftMenu = [];
      const stateDraftMenuIDArr = [];

      for ( let i in this.state.draftMenu ) {
        stateDraftMenuIDArr.push( this.state.draftMenu[i]["_id"] );
      }

      for( let i in arr ) {
        if ( !stateDraftMenuIDArr.includes( arr[i]["_id"] ) ) {
            newDraftMenu.push( arr[i] );
        }
      }

      /* Do not call server if there is no change */
      if ( newDraftMenu.length > 0) {
        await this.addToDraftMenu( newDraftMenu);
        alert( "Successfully added " + newDraftMenu.length + " new Beers!" );
      } else {
        alert( "Already added the beers" );
      }

      this.setState({
        draftMenu
      });

    } else if ( arr.length > 10 ) {
        alert( "Please select maximum 10 beers at a time" );
    } else {
        alert( "No Beer Selected" );
    }
  };

  handleRemoveBeer = async ( _id ) => {
    await this.removeBeerFromDraftMenu( _id );
    alert("Successfully removed");

    this.setState(( prevState ) => ({
        draftMenu: prevState.draftMenu.filter(( menu ) => _id !== menu["_id"])
    }));
  }

  render() {
    return (
      <React.Fragment>
        <AppRouter 
            browseBeer = { this.state.browseBeer } 
            draftMenu = { this.state.draftMenu } 
            handleAddBeer = { this.handleAddBeer } 
            handleRemoveBeer = { this.handleRemoveBeer }
        />
      </React.Fragment>
    );
  };
}

export default BruVueApp;
