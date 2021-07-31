import React, { useState } from "react";


const PasswordReset = (props) => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const emailChangeHandler = (e) => {
      setEmail(e.currentTarget.value);
  };

  const sendResetEmail = (e) => {
    //TODO
  };

  return (
    <div>
      <h1>
        Reset your Password
      </h1>
      <div>
        <form>
          {emailHasBeenSent && (<div>An email has been sent to you!</div>)}
          {error !== null && (<div>{error}</div>)}
          <label htmlFor="userEmail">Email:</label>
          <input type="email" name="userEmail" id="userEmail" value={email}
            placeholder="Input your email" onChange={emailChangeHandler} />
          <button onClick={sendResetEmail}>Send me a reset link</button>
        </form>
        <a href="/login">&larr; back to login page</a>
      </div>
    </div>
  );
};
export default PasswordReset;