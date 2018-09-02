import React from "react";
import { Menu, Input, Button } from "semantic-ui-react";

const EventDashboardMenu = () => {
  return (
    <Menu fluid>
      <Menu.Item header>Dashboard</Menu.Item>
      <Menu.Item>
        <Input className="icon" icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
            <Button color="blue">Create Event</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default EventDashboardMenu;
