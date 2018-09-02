import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default class TopMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu size='huge' className="top-menu" fluid >
        <Menu.Menu position='right'>
        <Menu.Item>
            <Button secondary >Log In</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}