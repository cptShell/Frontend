import React from "react";
import '../../styles/index.scss'
import '../../styles/normalize.scss'
import logo from '../../assets/logo/codebrologo.svg'

import Login from "../Authorization/Login/Login";
import Registration from "../Authorization/Registration/Registration";
import {Routes, Route, Link, Outlet, BrowserRouter} from 'react-router-dom'
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";

function App() {

	// auth log / reg
	const [auth, setAuth] = React.useState(false)
	const changeAuth = () => {
		setAuth(!auth)
		setcheckPassword(false);
	}

	// Скрытие / открытие пароля
	const [checkPassword, setcheckPassword] = React.useState(false);
	const clickCheckPassword = () => {
		setcheckPassword(!checkPassword);
	}

	return (
		<>
			<Routes>
				<Route path={"/"} element={<Navbar/>}>
					<Route index element={<Main/>}/>
					<Route path={"login"} element={<Login/>}/>
					<Route path={"registration"} element={<Registration/>}/>
				</Route>
			</Routes>

			<Outlet/>
			{/*<div className="authorization">*/}
			{/*	<img src={logo} alt="" className="authorization__logo"/>*/}
			{/*	{auth ? (*/}
			{/*		<Login*/}
			{/*			changeAuth={changeAuth}*/}
			{/*			clickCheckPassword={clickCheckPassword}*/}
			{/*			checkPassword={checkPassword}/>*/}
			{/*	) : (*/}
			{/*		<Registration*/}
			{/*			changeAuth={changeAuth}*/}
			{/*			clickCheckPassword={clickCheckPassword}*/}
			{/*			checkPassword={checkPassword}*/}
			{/*		/>*/}
			{/*	)}*/}

			{/*</div>*/}
		</>

	);
}

export default App;
