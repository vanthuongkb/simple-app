import React from 'react';
import PropTypes from 'prop-types';
import { getCustomClassNames } from './utils';

const Col = (props) => {
  const { children, classNames, xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset } = props;
  const clazz = getCustomClassNames(classNames);
  const colClasses = [];

  if (xs) colClasses.push(`col-xs-${xs}`);
  if (xsOffset) colClasses.push(`col-xs-offset-${xsOffset}`);
  if (sm) colClasses.push(`col-sm-${sm}`);
  if (smOffset) colClasses.push(`col-sm-offset-${smOffset}`);
  if (md) colClasses.push(`col-md-${md}`);
  if (mdOffset) colClasses.push(`col-md-offset-${mdOffset}`);
  if (lg) colClasses.push(`col-lg-${lg}`);
  if (lgOffset) colClasses.push(`col-lg-offset-${lgOffset}`);

  return (
    <div className={`${colClasses.join(' ')} ${clazz}`}>
      {children}
    </div>
  )
}

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  classNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
}

export default Col;