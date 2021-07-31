import React, { useState } from 'react';
import { register } from "./controllers/userController";
import "./Signup.css";


function Signup(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [password2, setPassword2] = useState('');
    let [emailValid, setEmailValid] = useState(true);
    let [passwordValid, setPasswordValid] = useState(true);
    let [pass2Valid, setPass2Valid] = useState(true);
    let [error, setError] = useState(null);

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const pass2ChangeHandler = (e) => {
        setPassword2(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if(!email.includes('@')) {
            setEmailValid(false);
        } else if(password.length<8){
            setPasswordValid(false);
        } else if(password2 !== password){
            setPass2Valid(false);
        } else {
            register(email, password).then(res => {
                props.history.push('/login');
            }).catch(err=>{
                console.log(err);
                setError("Registration failed");
                props.history.push('/register');
            })
        }
    }

    let emailClasses = emailValid ? 'auth-form' : 'auth-form invalid'
    let passwordClasses = passwordValid ? 'auth-form' : 'auth-form invalid'
    let pass2Classes = pass2Valid ? 'auth-form' : 'auth-form invalid'

    return (
        <div className="user-form">
            <h1>Sign up for a New Account!</h1>
            <form onSubmit={submitHandler}>
                <div className={emailClasses}>
                    <label htmlFor="email">Email: </label>
                    {!emailValid&&<p>Must provide a valid email address</p>}
                    <input type="text" name="email" id="email" onChange={emailChangeHandler} value={email}/>
                </div>
                <div className={passwordClasses}>
                    <label htmlFor="password">Password: </label>
                    {!passwordValid&&<p>Password must be at least 8 characters</p>}
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} value={password}/>
                </div>
                <div className={pass2Classes}>
                    <label htmlFor="password2">Retype Password: </label>
                    {!pass2Valid&&<p>Passwords must match</p>}
                    <input type="password" name="password2" id="password2" onChange={pass2ChangeHandler} value={password2}/>
                </div>
                {error !== null && (<div>{error}</div>)}
                <button className="form-btn" type="submit">Login</button>
            </form>
            <p>
                Already have an account? <a href="/login">Sign In!</a>
            </p>
        </div>
    )
}

export default Signup;