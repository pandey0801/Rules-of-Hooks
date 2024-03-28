import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enterCollege, setEnterCollege] = useState('');
  const [collegeValid, setCollegeValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {

    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enterCollege.trim().length > 5
    );

  }, [enteredEmail, enteredPassword, enterCollege]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const collegeChangeHandler = (event) =>{
    setEnterCollege(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   enteredEmail.includes('@') && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollegeHandler = () =>
  {
    setCollegeValid(enterCollege.trim().length > 3);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword, enterCollege);
  };

  return (
    
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
      
      <Input
      id="email"
      label="E-Mail"
      type="email"
      isValid={emailIsValid}
      value={enteredEmail}
      onChange={emailChangeHandler}
      onBlur={validateEmailHandler}

      />

      <Input
      id="password"
      label="password"
      type="password"
      isValid={passwordIsValid}
      value={enteredPassword}
      onChange={passwordChangeHandler}
      onBlur={validatePasswordHandler}
      />

      <Input
      id="college"
      label="college"
      type="college"
      isValid={collegeValid}
      value={enterCollege}
      onChange={collegeChangeHandler}
      onBlur={validateCollegeHandler}
      />
        <div className={classes.actions}></div>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
      </form>
    </Card>
    
  );
};

export default Login;


