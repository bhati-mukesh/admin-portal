import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = (props) => {
  const { pathname } = useLocation();
  const activeItem = sidebar_items.findIndex((item) => item.route === pathname);
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {sidebar_items.map((item, idx) => {
        return (
          <Link to={item.route} key={idx}>
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={idx === activeItem}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
