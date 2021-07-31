import React, { useState } from 'react';
import { login } from "./controllers/userController";
import "./Login.css";


function Login (props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [emailValid, setEmailValid] = useState(true);
    let [passwordValid, setPasswordvalid] = useState(true);
    let [error, setError] = useState(null);

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
        if(email !== ''){
            setEmailValid(true);
        }
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
        if(password !== ''){
            setPasswordvalid(true);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(email !== '' && password !== ''){
            login(email, password).then(res=>{
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.user));
                props.user.changeUser(res.user);
                props.history.push('/');
            }).catch(err => {
                console.log(err);
                setError("Unable to log in.");
            })
        } else{
            if(email === ''){
                setEmailValid(false);
            }
            if(password === ''){
                setPasswordvalid(false);
            }
        }
    }

    let emailClasses = emailValid ? 'auth-form' : 'auth-form invalid'
    let passwordClasses = passwordValid ? 'auth-form' : 'auth-form invalid'

    return (
        <div className="user-form">
            <h1>Log In to Shadow Over the Isthmus</h1>
            <form onSubmit={submitHandler}>
                <div className={emailClasses}>
                    <label htmlFor="email">Email: </label>
                    {!emailValid&&<p>Email is required</p>}
                    <input type="text" name="email" id="email" onChange={emailChangeHandler} value={email}/>
                </div>
                <div className={passwordClasses}>
                    <label htmlFor="password">Password: </label>
                    {!passwordValid&&<p>Password is required</p>}
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} value={password}/>
                </div>
                {error !== null && (<div>{error}</div>)}
                <button className="form-btn" type="submit">Login</button>
            </form>
            <p>
                Need an account? <a href="/signup">Sign up!</a>
                <br />
                <a href="/passwordReset">Forgot Password</a>
            </p>
        </div>
    )
}

export default Login;