import React from 'react'
import PropTypes from 'prop-types'

export default class DropDownItem extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onSelectItem: PropTypes.func.isRequired
  }

  onSelectItem = () => {
    this.props.onSelectItem(this.props.value)
  }

  render() {
    const { value, label } = this.props
    if (value && label) {
      return (
        <li data-origin-key={value} onClick={this.onSelectItem}><a href="#">{label}</a></li>
      )
    } else {
      return <div />
    }
  }
}