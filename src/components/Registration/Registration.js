import React from "react";

function Registration({ changeAuth }) {
  return (


    <div className="block__authorization authorization-block">

      <input type="text" className="authorization-block__google-input" />

      <span className="authorization-block__text">or</span>

      <input type="mail" className="authorization-block__mail" placeholder="Email" />
      <input type="password" className="authorization-block__password" placeholder="Password" />
      <button className="authorization-block__create-account">Create account</button>

      <p className="authorization-block__log-in">Already have an account? <span className="authorization-block__link" onClick={changeAuth}>Log in</span></p>

    </div>


  );
}

export default Registration;
