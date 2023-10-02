import React,{useContext} from "react";
import classes from "./Navigation.module.css";
import CreateCtx from "../UI/Auth-com";

const Navigation = (props) => {
  const cxt = useContext(CreateCtx)
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
          <button onClick={cxt.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>
  );
};

export default Navigation;
