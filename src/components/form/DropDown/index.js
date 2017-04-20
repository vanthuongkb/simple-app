import React from 'react'
import PropTypes from 'prop-types'
import DropDownList from './DropDownList'

export default class DropDown extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number]),
        label: PropTypes.string
      })
    ),
    theme: PropTypes.oneOf(['default','primary', 'success', 'warning', 'danger']),
    onSelect: PropTypes.func
  }

  static defaultProps = {
    label: '',
    items: [],
    theme: 'default',
    onSelect: (e) => {}
  }

  state = {
    isOpened: false,
    buttonLabel: this.props.label
  }

  toggleDropDown = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  changeButtonLabel = (buttonLabel) => {
    this.setState({ buttonLabel })
  }

  onSelectItem = (value) => {
    this.toggleDropDown()
    const buttonLabel = this.props.items.find(item => item.value === value)

    if (buttonLabel) {
      this.changeButtonLabel(buttonLabel.label)
    }

    this.props.onSelectItem(value)
  }



  render() {
    const { items, theme } = this.props
    const { isOpened, buttonLabel } = this.state;
    return (
      <div className={`dropdown ${isOpened ? 'open' : ''}`}>
        <button className={`text-left btn btn-block btn-${theme}`}
                type="button"
                onClick={this.toggleDropDown}
        >
          {buttonLabel} <span className="caret" />
        </button>
        <DropDownList items={items} onSelectItem={this.onSelectItem} />
      </div>
    )
  }
}