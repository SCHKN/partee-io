import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import { EventListItem } from "./EventListItem";

export class EventList extends Component {
  render() {
    return (
      <List className="event-list">
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </List>
    );
  }
}
