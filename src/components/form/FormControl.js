import React from 'react'
import PropTypes from 'prop-types'

import PureInput from './PureInput';

const FormControl = ({ type, props }) => {
  switch (type) {
    case 'hidden': {
      return <PureInput type="hidden" {...props} />
    }
    case 'text': {
      return <PureInput type="text" className="form-control" {...props}/>
    }
    case 'number': {
      return <PureInput type="number" className="form-control"  {...props}/>
    }
    default:
    {
      return <PureInput {...props}/>
    }
  }
}

FormControl.propTYpes = {
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired
}

export default FormControl