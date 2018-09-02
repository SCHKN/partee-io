import React, { Component } from "react";
import EventDashboardMenu from "./EventDashboardMenu";
import { Grid } from "semantic-ui-react";
import { EventList } from "./EventList";

export class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <EventDashboardMenu />
            <EventList />
          </Grid.Column>
          <Grid.Column width={6}>abc</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default EventDashboard;
