import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landingPage">
    <p className="text-3xl">airbevy</p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "80vw"
      }}
    >
      <Link
        to="/login"
        style={{ marginTop: 150, width: "30vw" }}
        className="btn bg-transparent hover:bg-purple text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
      >
        Login
      </Link>
      <Link
        to="/signup"
        style={{ marginTop: 150, width: "30vw" }}
        className="btn bg-transparent hover:bg-purple text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
      >
        Signup
      </Link>
    </div>
  </div>
);

export default LandingPage;
