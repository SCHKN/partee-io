import React, { Component } from 'react';
import SideMenu from './features/general/sidemenu/SideMenu'
import TopMenu from './features/general/topmenu/TopMenu'
import { EventDashboard } from './features/event/EventDashboard';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SideMenu className="app-sidemenu" />
        <div className="app-content">
          <TopMenu />
          <div className="content-container">
            <EventDashboard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
