import React, { useState, useEffect, useReducer } from "react";
import CreateCtx from "../UI/Auth-com";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const EmailRenderFn = (state, action) => {
  if (action.type === "inputEmail") {
    return { value: action.val, isValid: action.val.includes("@") };
    
  } 
  if (action.type === "validEmail") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const PasswordRenderFn = (state,action) => {
  if (action.type === "inputEmail") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
    
  } 
  if (action.type === "validEmail") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState("");
  const [collegeisValid, setCollegeIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [RenderEmail, SetRenderEmail] = useReducer(EmailRenderFn, {
    value: "",
    isValid: null,
  });
  const [RenderPassword, SetRenderPassword] = useReducer(PasswordRenderFn, {
    value: "",
    isValid: null,
  });
  useEffect(() => {
    setFormIsValid(
      RenderEmail.isValid &&
        RenderPassword.isValid &&
        enteredCollege.trim().length > 0
    );
  }, [RenderEmail, RenderPassword, enteredCollege]);

  const emailChangeHandler = (event) => {
    SetRenderEmail({ type: "inputEmail", val: event.target.value });
  };

  const validateEmailHandler = () => {
    SetRenderEmail({ type: "validEmail" });
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };

  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length > 0);
  };

  const passwordChangeHandler = (event) => {
    SetRenderPassword({type:"inputEmail", val:event.target.value})
  };

  const validatePasswordHandler = () => {
    SetRenderPassword({type: "validEmail"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(RenderEmail.value, RenderPassword.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            RenderEmail.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={RenderEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeisValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">College</label>
          <input
            type="text"
            id="collegeName"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            RenderPassword.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={RenderPassword.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
