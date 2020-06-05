import React, { Component } from 'react';
import axios from "axios";
import Zipcode from "./Zipcode.js";

//Dictionary Class
class Dictionary extends Component {

  constructor(props) {

    super(props);

    this.state = {

      zip: "", //Zipcode

      data: [] //Data

    }

    this.setData = this.setData.bind(this);

    this.setZip = this.setZip.bind(this);

  }

  render() {

    var output = this.state.data.map((data) =>

      <Zipcode
      
        prop_city = { data.City }

        prop_latitude = { data.Lat }

        prop_longitude = { data.Long }

        prop_population = { data.EstimatedPopulation }

        prop_wages = { data.TotalWages } />);

    // eslint-disable-next-line
    if (output.length === 0) { //No output

      return (

        <div>

          <input type = 'numbers' onChange = { this.setZip } /> <br/>

          <button onClick = { this.setData }> Search </button>

        </div>

      );

    } else { //Output data

      return (

        <div>

          <input type='numbers' onChange = { this.setZip } /> <br/>

          <button onClick = { this.setData }> Search </button>

          <div>

            { output }

          </div>

        </div>

      );

    } //End else

  }

  setData() { //setData

    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + this.state.zip)

      .then((get) => {

        this.setState({ data: get.data });

      })

  } //End setData

  setZip(e) { //setZip

    this.setState({ zip: e.target.value });

  } //End setZip

} //End Dictionary class

export default Dictionary;