import React from 'react'
import PropTypes from 'prop-types';
import { Container, Row, Col } from './layout'

const ModuleContainer = (props) => {
  const { children, title } = props;

  return (
    <Container>
      <Row>
        <Col lg={12}>
          {title ? <h2 className="module__title module__title--default pull-left">{title}</h2> : ''}
          {children}
        </Col>
      </Row>
    </Container>
  )
}

ModuleContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ])
}

export default ModuleContainer;