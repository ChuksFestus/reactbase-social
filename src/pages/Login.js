import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  render() {
    return (
      <div className="landingPage">
        <p className="text-3xl">airbevy</p>
        <form className="bg-trasparent rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white"
              name="email"
              type="text"
              placeholder="email"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white"
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              to="/"
              className="bg-purple hover:bg-purple-dark text-white py-2 px-4 rounded"
              type="button"
            >
              Login
            </button>
            <Link
              className="inline-block align-baseline text-sm text-purple hover:text-purple-darker"
              to="/"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        <div>
          <button className="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded">
            Facebook
          </button>{" "}
          <button className="bg-blue-dark hover:bg-blue-dark text-white py-2 px-4 rounded">
            Linkedin
          </button>
        </div>
        <Link
          to="/signup"
          style={{ width: "40vw" }}
          className="btn bg-transparent hover:bg-purple text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
        >
          Signup
        </Link>
      </div>
    );
  }
}

export default Login;
