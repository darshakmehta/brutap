import React from 'react';
import '../styles/components/Option.css';

const Option = ( props ) => (

      <React.Fragment>
        <div className = "option">
          <div className = "option__header">
            <span className = "option__count"> { props.count }. </span> 
            <div className = "option__text-header">
              <div className = "option__text"> { props.BreweryName } </div> 
              <div className = "option__text"> { props.BeerName } </div> 
              <div className = "option__text"> { props.BeerStyle } </div>
              <div className = "option__text"> ABV: { props.ABV } </div> 
              <div className = "option__text"> IBU: { props.IBU } </div>
            </div>
          </div>
          <button
            className = "option__button"
            onClick = 
            {
                (e) => {
                    if ( window.confirm( "Are you sure you want to remove Beer?" ) ) {
                        props.handleRemoveBeer( props.id );                
                    } else {
                        alert( "Thanks for sticking around!" );
                    }
                }
            }
            > remove 
          </button>
        </div>
      </React.Fragment>
  );
  
export default Option; 