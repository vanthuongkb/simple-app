import React from 'react'
import PropTypes from 'prop-types'

export default class LocationTable extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired
  }

  renderLocation(locations) {
    return (
      locations.map(location => (
        <tr key={location.value}>
          <td data-origin-key={location.value}>{location.label}</td>
          <td></td>
        </tr>
      )))
  }

  render() {
    const { locations } = this.props
    return (
      <table className="table table-bordered m-t-md">
        <thead>
          <tr>
            <th>Locations</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
        {locations && locations.length > 0
          ? this.renderLocation(locations)
          : <tr><td colSpan="2"><strong>No location yet</strong></td></tr>
        }
        </tbody>
      </table>
    )
  }
}