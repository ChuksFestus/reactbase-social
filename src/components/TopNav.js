import React from "react";

const TopNav = () => (
  <div className="bg-white">
    <div
      style={{ top: 0, width: "100vw" }}
      className="container fixed pin-t mx-auto z-10 flex items-center py-3 shadow bg-red-jazz text-white"
    >
      <div style={{ marginLeft: 30 }} className="w-4/5">
        airbevy
      </div>
      <nav className="w-1/5 topnav">
        <i className="ion-ios-people" />
        <i className="ion-ios-bell" />
        <i className="ion-log-out" />
      </nav>
    </div>
  </div>
);

export default TopNav;
