import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Registration({ changeAuth, clickCheckPassword, checkPassword }) {

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
		fetch(`${url}/users/user/`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json",
				"Content-length": JSON.stringify(data).length,
				"Accept": "*/*"
			}
		})
			.then(data => data.json())
			.then(r => console.log(r))
		console.log(JSON.stringify(data))
	}

	return (

		<form className="block__authorization authorization-block"
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>

			<div>
				<input type="text" className="authorization-block__google-input form__input " />
			</div>

			<span className="authorization-block__text">or</span>
			<div className={"relative"}>
				<input
					{...register("email", {
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
							value: /\w+@\w+\.\w+/,
							message: "Некорректное поле"
						},

					})}

					type="email" className={errors?.email ? "authorization-block__password form__input relative" +
						" border-red-500" : "authorization-block__password form__input relative"} placeholder="Email"

				/>
				{errors.email &&
					<p className={"absolute bottom-[-22px] left-1 text-md text-red-500 font-medium"}>{errors?.email?.message || "Error!"}</p>}
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

					type={checkPassword ? 'text' : 'password'} className={errors?.password ? "authorization-block__password form__input relative" +
						" border-red-500" : "authorization-block__password form__input relative"}
					placeholder="Password"

				/>
				{errors.password &&
					<p className={"absolute bottom-[-22px] left-1 text-md text-red-500 font-medium"}>{errors?.password?.message || "Error!"}</p>}

				<span onClick={clickCheckPassword} className={checkPassword ? 'plus open' : 'plus'}></span>

			</div>


			<button className="authorization-block__create-account"

			>Create account
			</button>

			<p className="authorization-block__log-in">Already have an account? <span
				className="authorization-block__link" onClick={changeAuth}>Log in</span></p>

		</form>


	);
}

export default Registration;
