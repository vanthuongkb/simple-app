import React from 'react'

import { Col } from '../../../components/layout'
import LocationForm from './LocationForm'

export default class SetupLocation extends React.Component {

  onSubmitLocation = (e) => {
    //e.preventDefault();
    setTimeout(2000);
    console.log("onSubmit func is called");
  }

  render() {
    return (
      <Col lg={6}>
        <LocationForm onSubmit={this.onSubmitLocation}/>
      </Col>
    )
  }
}