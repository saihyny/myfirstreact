import React, { useState, useEffect, useReducer } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import InputComponent from "../UI/InputCom";
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
        RenderPassword.isValid 
    );
  }, [RenderEmail, RenderPassword]);

  const emailChangeHandler = (event) => {
    SetRenderEmail({ type: "inputEmail", val: event.target.value });
  };

  const validateEmailHandler = () => {
    SetRenderEmail({ type: "validEmail" });
  };

  const passwordChangeHandler = (event) => {
    SetRenderPassword({type:"inputEmail", val:event.target.value})
  };

  const validatePasswordHandler = () => {
    SetRenderPassword({type: "validEmail"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(RenderEmail.value, RenderPassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       
        <div>
          <InputComponent
          id='email'
          label='E-mail'
          type='email'
          isValid={RenderEmail.isValid}
          value={RenderEmail.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          >
          </InputComponent>
        </div>
        <div>
          <InputComponent
          id='password'
          label='password'
          type='Password'
          isValid={RenderPassword.isValid}
          value={RenderPassword.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          >
          </InputComponent>
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
