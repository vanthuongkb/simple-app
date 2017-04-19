import React from 'react'

const SolidLine = (props) => {
  const { top = 0, bottom = 0, weight = 1 } = props;

  return (<hr className="solid-line" style={{marginTop: `${top}px`, marginBottom: `${bottom}px`, borderWidth: `${weight}px`}}/>)
}

export default SolidLine;