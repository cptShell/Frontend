import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Router, Route, Link} from "react-router-dom";

<<<<<<<< HEAD:src/components/Authorization/Login/Login.jsx
function Login({changeAuth, clickCheckPassword, checkPassword}) {
========
function Login({ changeAuth, clickCheckPassword, checkPassword }) {

	const [errorLog, setErrorLog] = useState(false)

>>>>>>>> 5895c2ebe4c04375c0dffaedeae69ea643dcd22e:src/components/Authorization/Login/Login.js
	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
	} = useForm({
		mode: "onBlur"
	})
	const url = "http://127.0.0.1:8000"
	const onSubmit = (data, e) => {
		e.preventDefault()
		fetch(`${url}/users/login/`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json",
				"Content-length": JSON.stringify(data).length,
				"Accept": "*/*"
			}
		})
			.then(data => {
				if (data.status === 200) {
					console.log('yes');
				} else {
					setErrorLog(true)
				}
			})

			.then(r => console.log(r))
		console.log(JSON.stringify(data))


	}
	return (
		<form className="block__authorization authorization-block"
		      onSubmit={handleSubmit(onSubmit)}
		      noValidate
		>

			<div>
				<input type="text" className="authorization-block__google-input form__input"/>
			</div>

			<span className="authorization-block__text">or</span>

			<div className="relative">
				<input
					{...register("name", {
						required: "Обязательное поле",
						minLength: {
							value: 5,
							message: "Минимальная длина 5 символов"
						},
						maxLength: {
							value: 35,
							message: "Максимальная длина 35 символов"
						},
						pattern: {
							value: /\w/,
							message: "Некорректное поле"
						},

					})}
					type="text" className={errors?.name ? "authorization-block__password form__input relative" +
					" border-red-500" : "authorization-block__password form__input relative"}
					placeholder="Email or Login"/>
				{errors.name &&
					<p className={"absolute bottom-[-22px] left-1 text-md text-red-500 font-medium"}>{errors?.name?.message || "Error!"}</p>}
			</div>
			<div className={"relative"}>
				<input
					{...register("password", {
						required: "Обязательное поле",
						minLength: {
							value: 4,
							message: "Минимальная длина 4 символов"
						},
						maxLength: {
							value: 20,
							message: "Максимальная длина 20 символов"
						},
						pattern: {
							value: /\w/,
							message: "Некорректное поле"
						}

					})}

					type={checkPassword ? 'text' : 'password'}
					className={errors?.password ? "authorization-block__password form__input relative" +
						" border-red-500" : "authorization-block__password form__input relative"}
					placeholder="Password"/>

				{errors.password &&
					<p className={"absolute bottom-[-22px] left-1 text-md text-red-500 font-medium"}>{errors?.password?.message || "Error!"}</p>}


				<span className={"absolute right-3 bottom-2 top-2"} onClick={clickCheckPassword}>{
					!checkPassword ?
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
						     viewBox="0 0 32 32">
							<path
								d="M16 9v0 0c9 0 13 7 13 7s-4 7-13 7c-9 0-13-7-13-7s4-7 13-7zM16 10c-8 0-11.8 6-11.8 6s3.8 6 11.8 6c8 0 11.8-6 11.8-6s-3.8-6-11.8-6v0 0zM16 20v0 0c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zM16 19c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3v0 0zM16 17c0.552 0 1-0.448 1-1s-0.448-1-1-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0 0z"></path>
						</svg>
						:
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
						     viewBox="0 0 32 32">
							<path
								d="M8.109 20.891c-3.492-2.061-5.109-4.891-5.109-4.891s4-7 13-7c1.305 0 2.504 0.147 3.601 0.399l-0.85 0.85c-0.855-0.158-1.772-0.248-2.752-0.248-8 0-11.8 6-11.8 6s1.515 2.392 4.645 4.155l-0.736 0.736zM12.399 22.601c1.097 0.252 2.297 0.399 3.601 0.399 9 0 13-7 13-7s-1.617-2.83-5.109-4.891l-0.736 0.736c3.13 1.763 4.645 4.155 4.645 4.155s-3.8 6-11.8 6c-0.98 0-1.897-0.090-2.752-0.248l-0.85 0.85zM19.899 15.101c0.066 0.289 0.101 0.59 0.101 0.899 0 2.209-1.791 4-4 4-0.309 0-0.61-0.035-0.899-0.101l0.899-0.899c0.768 0 1.536-0.293 2.121-0.879s0.879-1.354 0.879-2.121l0.899-0.899zM16.899 12.101c-0.289-0.066-0.59-0.101-0.899-0.101-2.209 0-4 1.791-4 4 0 0.309 0.035 0.61 0.101 0.899l0.899-0.899c0-0.768 0.293-1.536 0.879-2.121s1.354-0.879 2.121-0.879l0.899-0.899zM24 7l-17 17 1 1 17-17-1-1z"></path>
						</svg>
				}</span>

			</div>
			<button className="authorization-block__create-account">Log in</button>
			<span className={'authorization-block__errorLogin'}>{errorLog ? 'Неверный логин или пароль' : ''}</span>
			<p className="authorization-block__log-in">No account?
				<span className="authorization-block__link" onClick={changeAuth}> Create one</span>
			</p>

		</form>


	);
}

export default Login;
