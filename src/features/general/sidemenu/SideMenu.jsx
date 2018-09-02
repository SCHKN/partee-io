import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class SideMenu extends Component {
    handleItemClick = name => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state || {}

        return (
            <Menu vertical size='large' className="side-menu">
                <Menu.Item>
                 <Image src="https://react.semantic-ui.com/logo.png" size="tiny" centered/>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Events</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name='Event Dashboard'
                            active={activeItem === 'Event Dashboard'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Personal</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name='Profile'
                            active={activeItem === 'Profile'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Shopping List'
                            active={activeItem === 'Shopping List'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}

