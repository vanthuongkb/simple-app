import React from 'react'

import { Col, Row } from '../../../components/layout'
import LocationForm from './LocationForm'
import LocationTable from './LocationTable'

export default class SetupLocation extends React.Component {
  state = {
    locations: [/*
      {
        parent: '',
        value: 'bar',
        label: 'Bar',
        order: 0,
        isSelected: false
      },
      {
        parent: 'bar',
        value: 'under-counter',
        label: 'Under Counter',
        order: 0,
        isSelected: false
      },
      {
        parent: 'bar',
        value: 'top-counter',
        label: 'Top Counter',
        order: 1,
        isSelected: false
      }*/
    ]
  }

  isExisted = (locationName) => {
    const { locations } = this.state
    return locations.find(location => location.label === locationName)
  }

  findLocation = (propertyName, value) => {
    const { locations } = this.state
    return locations.find(location => {
      if (Object.prototype.hasOwnProperty.call(location, propertyName)) {
        return location[propertyName] === value
      }

      return undefined
    })
  }

  onSubmitLocation = (values) => {
    const locationName = values.get('locationName')
    const existedLocation = this.isExisted(locationName)
    if (existedLocation) {
      alert("Location is existed in system")
    } else {
      const { locations } = this.state;
      const value = locationName.split(' ').join('-')
      const parentLocation = this.findLocation('isSelected', true)
      const parent = parentLocation ? parentLocation.value : ''
      if (parentLocation) parentLocation.isSelected = false
      this.setState({
        locations: [...locations, {
          parent,
          value,
          label: locationName,
          order: locations.length,
          isSelected: false
        }]
      })
    }
  }

  onSelectLocation = (value) => {
    const { locations } = this.state
    const selectedLocations = locations.filter(location => location.isSelected)
    selectedLocations.forEach(location => { location.isSelected = false })

    const location = locations.find(location => location.value === value)
    if (location) {
      location.isSelected = true
    }
  }

  render() {
    return (
      <div>
        <Col lg={6}>
          <LocationForm
            locations={this.state.locations}
            onSubmit={this.onSubmitLocation}
            onSelectLocation={this.onSelectLocation}
          />
        </Col>
        <Col lg={12}>
          <Row>
            <LocationTable locations={this.state.locations} />
          </Row>
        </Col>
      </div>
    )
  }
}