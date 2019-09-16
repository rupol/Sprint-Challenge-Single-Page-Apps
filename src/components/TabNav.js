import React from "react";
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
  return (
    <nav className="ui attached tabular menu">
      <NavLink to="/character" className="item">
        <Icon name="users" />
        Characters
      </NavLink>
      <NavLink to="/location" className="item">
        <Icon name="map outline" />
        Locations
      </NavLink>
      <NavLink to="/episode" className="item">
        <Icon name="video camera" />
        Episodes
      </NavLink>
    </nav>
  );
}
