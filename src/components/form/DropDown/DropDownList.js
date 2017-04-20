import React from 'react'
import DropDownItem from './DropDownItem'

const DropDownList = (props) => {
  const { items, onSelectItem } = props;
  return (
    <ul className="dropdown-menu">
      {items.map(item => (
        <DropDownItem
          key={item.value}
          value={item.value}
          label={item.label}
          onSelectItem={onSelectItem}
        />
      ))}
    </ul>
  )
}

export default DropDownList;