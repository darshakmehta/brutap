import React from 'react';
import Option from './Option';
import '../styles/components/Options.css';

const Options = ( props ) => (
      <React.Fragment>
          {
            ( props.options.length !== 0 ) 
                ? <h1 className = "options__header">Your Currently Tapped Beers</h1>
                : <h1 className = "options__header">No Tapped Beers</h1>
          }
          {
            props.options.map(( option, index ) => 
            <Option 
                key = { option._id }
                count = { index + 1 }
                BreweryName = { option["Brewery Name"] }
                BeerName = { option["Beer Name"] }
                BeerStyle = { option["Beer Style"] }
                ABV = { option["ABV"] }
                IBU = { option["IBU"] }
                id = { option._id }
                handleRemoveBeer = { props.handleRemoveBeer }
            />
          )}
      </React.Fragment>
  );

export default Options;