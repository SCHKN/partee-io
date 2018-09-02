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
                        <Menu.Item
                            name='Subsection Two'
                            active={activeItem === 'Subsection Two'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Another Section</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name='Subsection One'
                            active={activeItem === 'Subsection One'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Subsection Two'
                            active={activeItem === 'Subsection Two'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}

