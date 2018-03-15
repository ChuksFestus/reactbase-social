import React from "react";

const MainMenu = () => (
  <div className="bg-white">
    <div
      style={{ width: "100vw" }}
      className="container fixed z-10 pin-b mx-auto justify-around flex items-center py-3 shadow bg-white text-red-jazz"
    >
      <i className="ion-ios-home" />
      <i className="ion-person" />
      <i className="ion-plus-circled" />
      <i className="ion-card" />
      <i className="ion-ios-calendar" />
    </div>
  </div>
);

export default MainMenu;
