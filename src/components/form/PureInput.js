import React from 'react'
import PropTypes from 'prop-types';

class PureInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.field !== nextProps.field
  }

  render() {
    const {...rest } = this.props
    return <input{...rest}/>
  }
}

PureInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default PureInput
