import React, { Component } from "react";
import {
  Segment,
  Item,
  Label,
  Statistic,
  Icon,
  Image,
  List,
  Button,
  Progress
} from "semantic-ui-react";
import EventAttendee from "./EventAttendee";

export class EventListItem extends Component {
  render() {
    return (
      <Segment.Group raised>
        <Segment color="blue">
          <Item.Group>
            <Item>
              <Image
                src="https://randomuser.me/api/portraits/women/65.jpg"
                circular
              />
              <Item.Content>
                <Item.Header as="a">Eva's Party</Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    This is a description for Bob birthday, much fun, so wow.
                    This is a description for Bob birthday, much fun, so wow.
                    This is a description for Bob birthday, much fun, so wow.
                  </span>
                </Item.Meta>
                <Item.Description>A description</Item.Description>
                <Item.Extra>
                  01/02/2018 at 6:45pm @ San Francisco, USA
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <Label attached="top">Event Stats</Label>
          <Statistic.Group widths="four" size="mini">
            <Statistic>
              <Statistic.Value>28</Statistic.Value>
              <Statistic.Label>Attendees</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>14</Statistic.Value>
              <Statistic.Label>Cars</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>3</Statistic.Value>
              <Statistic.Label>Beds</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>7</Statistic.Value>
              <Statistic.Label>Products</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
        <Segment secondary>
          <List horizontal>
            <EventAttendee />
            <EventAttendee />
            <EventAttendee />
          </List>
          <Button floated="right">Preview</Button>
          <Button floated="right" color="blue">
            Visit
          </Button>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
