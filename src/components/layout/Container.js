import React from 'react';
import PropTypes from 'prop-types';
import { getCustomClassNames } from './utils';

const Container = (props) => {
  const { children, fuildContainer, classNames } = props;
  const clazzNames = getCustomClassNames(classNames);
  return (
    <div className={`${fuildContainer ? 'container-fluid' : 'container'} ${clazzNames}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element.isRequired
}

export default Container;