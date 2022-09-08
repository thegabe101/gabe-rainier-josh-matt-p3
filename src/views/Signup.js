import React, { Component, useState, useEffect } from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PasswordStr from "../utils/PasswordStr";
import "../styles/Signup.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import API from '../utils/API';
import SignUpContainer from "../utils/SignUpContainer";
import { useHistory } from "react-router-dom";

const URL_PREFIX = "http://localhost:3001/" || "http://lifter-backend-build.herokuapp.com/";
// const URL_PREFIX = 'https://lifter-backend-build.herokuapp.com/';


const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  toggleCoachState,
  onPwChange
}) => {
  const [buttonText, setButtonText] = useState('I am a Coach')

  // RD added function -----------------------------

  function handleOnClick() {
    toggleCoachState()
    handleButtonChange()
  }
  // Added
  function handleButtonChange() {
    if (buttonText === "I am a Coach") {
      setButtonText('I am a Client')
    } else {
      setButtonText('I am a Coach')
    }

  }

  let lebronJames = useHistory();


  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          floatingLabelText="user name"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <TextField
          name="email"
          floatingLabelText="email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <TextField
          type={type}
          name="password"
          floatingLabelText="password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={btnTxt} onClick={pwMask}
                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
          )}
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        // onClick={() => {
        //   lebronJames.push("/login")
        // }}
        />
        <button className="superCoolButton" type="button" onClick={handleOnClick}>{buttonText}</button>
        <label for="coach"></label>
      </form>
      <p>
        Aleady have an account? <br />
        <button className="logButton" onClick={() => {
          lebronJames.push("/login");
        }}>Log In</button>
      </p>
    </div>
  );
};

export default SignUpForm;

// 9/4/22 RD- MHH added change to the button "supercoolbutton" change onClick function. Seems to work
