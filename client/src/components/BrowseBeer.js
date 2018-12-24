import React, { Component } from 'react';
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css';
import '../styles/components/BrowseBeer.css';

const CheckboxTable = checkboxHOC(ReactTable);

class BrowseBeer extends Component {
	constructor( props ) {
		super( props );
		this.state = {
	  		selection: [],
	  		selectAll: false
	  	};
	};

	toggleSelection = ( key, shift, row ) => {
	    let selection = [...this.state.selection];
	    const keyIndex = selection.indexOf( key );
	    if ( keyIndex >= 0 ) {
	      selection = [
	        ...selection.slice( 0, keyIndex ),
	        ...selection.slice( keyIndex + 1 )
	      ];
	    } else {
	      selection.push( key );
	    }
	    this.setState( { selection } );
	};

	toggleAll = () => {
	    const selectAll = this.state.selectAll ? false : true;
	    const selection = [];
	    if ( selectAll ) {
	      const wrappedInstance = this.checkboxTable.getWrappedInstance();
	      const currentRecords = wrappedInstance.getResolvedState().sortedData;
	      currentRecords.forEach( item => {
	        selection.push(item._original._id);
	      });
	    }
	    this.setState( { selectAll, selection } );
	};

	isSelected = key => {
		return this.state.selection.includes( key );
	};

	handleAddBeer = (e) => {
		e.preventDefault();

		const arr = this.props.browseBeer.filter(( menu ) => {
			return this.state.selection.includes( menu._id )
		});
		const error = this.props.handleAddBeer( arr ); /* Return error state for improving UX */

		this.setState({
			selection: [],
	  		selectAll: false
		});
	};

	render() {
		
		const { toggleSelection, toggleAll, isSelected, handleAddBeer } = this;
    	const { selectAll } = this.state;

		const checkboxProps = {
	      getTrProps: (s, r) => {
	        const selected = r ? this.isSelected(r.original._id) : false;
	        return {
	          style: {
	            backgroundColor: selected ? "#03a9e2" : "inherit",
	            color: selected ? 'white' : 'inherit',
	          }
	        };
	      },
	      isSelected,
	      selectAll,
	      selectType: "checkbox",
	      toggleAll,
	      toggleSelection,
	    };

		const columns = [
		  	{
		  		Header: "Browse Your Favorite Beer",
		  		columns: [
		  			{
		  				accessor: "Brewery Name",
		  				filterMethod: ( filter, row ) =>
            				row[filter.id].toUpperCase().includes( filter.value.toUpperCase() ),
		  				Header: "Brewery Name",
		  				width: 350,
		  			},
		  			{
		  				accessor: "Beer Name",
		  				filterMethod: ( filter, row ) =>
            				row[filter.id].toUpperCase().includes( filter.value.toUpperCase() ),
		  				Header: "Beer Name",
		  				width: 350,
		  			},
		  			{
		  				accessor: "Beer Style",
		  				filterMethod: ( filter, row ) =>
            				row[filter.id].toUpperCase().includes( filter.value.toUpperCase() ),
		  				Header: "Beer Style",
		  				width: 500,
		  			},
		  			{
		  				accessor: "ABV",
		  				filterMethod: ( filter, row ) =>
            				row[filter.id].toUpperCase().includes( filter.value.toUpperCase() ),
		  				Header: "ABV",
		  				width: 100,
		  			},
		  			{
		  				accessor: "IBU",
		  				filterMethod: ( filter, row ) =>
            				row[filter.id].toUpperCase().includes( filter.value.toUpperCase() ),
		  				Header: "IBU",
		  				width: 100,
		  			},
		  		]
		  	}
		  	];

		return (
			<React.Fragment>
				<form onSubmit={handleAddBeer}> <button className="addBeer"> Tap Beer </button> {` (${this.state.selection.length}) beers selected`} </form>

 				<CheckboxTable
				  { ...checkboxProps }
				  className = "browseBeer -striped -highlight"
				  columns = { columns }
				  defaultPageSize = { 20 }
				  data = { this.props.browseBeer }
				  defaultFilterMethod =
				  { 
				  	( filter, row ) =>
            			String( row[filter.id] ) === filter.value
            	  }
 				  filtered = { this.state.filtered }
				  filterable
 				  ref = 
 				  {
 				  	r => 
 				  		(this.checkboxTable = r)
 				  }
				  style = {
				  	{
			        	height: "550px"
			  	    }
			  	  }
				/>
			</React.Fragment>	
		);
	}
}

export default BrowseBeer;