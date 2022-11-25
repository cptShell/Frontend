import React, {useState} from "react";

function Login({changeAuth}) {
	const [email, setEmail] = useState(""),
		[password, setPassword] = useState("")

	return (


		<form className="block__authorization authorization-block">

			<input type="text" className="authorization-block__google-input form__input"/>

			<span className="authorization-block__text">or</span>

			<input
				value={email} onChange={(e) => setEmail(e.target.value)}
				type="email" className="authorization-block__mail form__input" placeholder="Email"/>
			<input
				value={password} onChange={(e) => setPassword(e.target.value)}
				type="password" className="authorization-block__password form__input" placeholder="Password"/>
			<button className="authorization-block__create-account">Log in</button>

			<p className="authorization-block__log-in">No account?
				<span className="authorization-block__link" onClick={changeAuth}>Create one</span>
			</p>

		</form>


	);
}

export default Login;
