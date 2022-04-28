import React from "react";
import Dropdown from "../dropdown/Dropdown";
import notifications from "../../assets/JsonData/notification.json";
import "./TopNav.css";
import { Link } from "react-router-dom";
import userImage from "../../assets/images/tuat.png";
import userMenu from "../../assets/JsonData/user_menus.json";
import ThemeMenu from "../theme-menu/ThemeMenu";

const curr_user = {
  image: userImage,
  display_name: "Mukesh",
};

const renderNotificationItem = (item, idx) => {
  return (
    <div className="notification-item" key={idx}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="user " />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, idx) => (
  <Link to="/" key={idx}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={userMenu}
            renderItems={renderUserMenu}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={renderNotificationItem}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
