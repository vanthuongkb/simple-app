import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import { Row, Col } from '../../../components/layout'

import asyncValidate from './asyncValidate'

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div className={asyncValidating ? 'async-validating' : ''}>
    <input {...input} type={type} placeholder={label} className="form-control"/>
    {touched && error && <span>{error}</span>}
  </div>
)

const LocationForm = (props) => {
    const { handleSubmit, submitting } = props;
    console.log('handleSubmit', handleSubmit);
    return (
      <Row>
        <form className="" onSubmit={handleSubmit}>
          <h4>Locations</h4>
          <Col lg={4}>
            <Row classNames="p-r-md">
              <Field name="locationName" type="text" component={renderField} label="Add location"/>
            </Row>
          </Col>
          <Col lg={4}>
            <Row>
              <button type="submit" className="btn btn-sm btn-primary" disabled={submitting}>Add</button>
            </Row>
          </Col>
        </form>
      </Row>
    )
}

export default reduxForm({
  form: 'locationForm',
  validate: values => {
    const errors = {}
    const locationName = values.get('locationName')
    console.log('locationName: ', locationName)
    if (!locationName || locationName.trim() === "") {
      errors.locationName = 'Required'
    }

    return errors
  },
  asyncValidate,
  asyncBlurFields: [ 'locationName' ]
})(LocationForm)