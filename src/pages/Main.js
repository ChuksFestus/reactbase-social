import React from "react";

import TopNav from "../components/TopNav";
import MainMenu from "../components/MainMenu";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <TopNav />
        <div className="content bg-grey-light" style={{ height: "100vh" }}>
          conetnt
        </div>
        <MainMenu />
      </div>
    );
  }
}

export default Main;
