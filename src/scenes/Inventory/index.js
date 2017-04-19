import React from 'react'
import PropTypes from 'prop-types'
import { echoButtonFactory } from 'echo-component-library/Button';
import { echoDropDownFactory } from 'echo-component-library/DropDown';

import ModuleContainer from '../../components/ModuleContainer'
import SolidLine from '../../components/SolidLine'

import SetupCount from './SetupCount'
import SetupLocation from './SetupLocation'

const EchoButton = echoButtonFactory.getClass();
const EchoDropDown = echoDropDownFactory.getClass();

export default class Inventory extends React.Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  handleClick = () => {
    alert('Clicked!');
  }

  render() {
    const actionItems = [
      {
        label: 'Action #1',
        onClick: () => {
          alert('Action #1 is Clicked')
        }
      },
      {
        label: 'Action #2',
        onClick: () => {
          alert('Action #2 is Clicked')
        }
      }
    ]

    return (
      <ModuleContainer title="Setup Count">
        <div className="pull-right">
          <EchoButton
            label="Print"
            type="secondary"
            onClick={this.handleClick}
          />
          <EchoDropDown items={actionItems} justify="right" offset={10}>
            <EchoButton label="Action" />
          </EchoDropDown>
        </div>
        <SolidLine top={10} bottom={10} weight={1} />
        <SetupCount />
        <SetupLocation />
      </ModuleContainer>
    )
  }
}