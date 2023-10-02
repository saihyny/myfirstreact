import React from "react";
import CreateCtx from "../UI/Auth-com";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <CreateCtx.Consumer>
      {(cxt) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {cxt.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {cxt.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {cxt.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </CreateCtx.Consumer>
  );
};

export default Navigation;
