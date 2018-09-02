import React, { Component } from "react";
import { List, Image } from 'semantic-ui-react'

class EventAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image avatar src="https://randomuser.me/api/portraits/women/65.jpg" />
      </List.Item>
    );
  }
}

export default EventAttendee;
