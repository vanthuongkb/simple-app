import React from 'react';
import PropTypes from 'prop-types';
import { getCustomClassNames } from './utils';

const Row = (props) => {
  const { children, classNames } = props;
  const clazz = getCustomClassNames(classNames);

  return (
    <div className={`row ${clazz}`}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.element.isRequired,
  classNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string) ]),
}

export default Row;