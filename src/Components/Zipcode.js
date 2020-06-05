import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Zipcode class
class Zipcode extends Component {

  render() {

    //Display City, Location, Population, and Total Wages for given Zipcode
    return (

      <div>
        
        <h1> City: {this.props.prop_city} </h1>

        <h1> Location: ({this.props.prop_longitude}, {this.props.prop_latitude}) </h1>

        <h1> Population: {this.props.prop_population} </h1>

        <h1> Total Wages: {this.props.prop_wages} </h1>

      </div>

    );

  }

} //End Zipcode class

//Zipcode props
Zipcode.propTypes = {

  prop_city: PropTypes.string,

  prop_longitude: PropTypes.string,

  prop_latitude: PropTypes.string,

  prop_population: PropTypes.string,

  prop_wages: PropTypes.string

};

export default Zipcode;