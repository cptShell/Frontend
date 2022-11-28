import React from "react";
import Registration from "../Registration/Registration";
import '../../styles/index.scss'
import '../../styles/normalize.scss'
import logo from '../../assets/logo/codebrologo.svg'
import Login from "../Login/Login";

import {Routes, Route, Link} from 'react-router-dom'
import MainPage from "../MainPage/MainPage";

function App() {

	// auth log / reg
	const [auth, setAuth] = React.useState(false)
	const changeAuth = () => {
		setAuth(!auth)
	}

	// Скрытие / открытие пароля
	const [checkPassword, setcheckPassword] = React.useState(false);
	const clickCheckPassword = () => {
		setcheckPassword(!checkPassword);
	}

	return (
		<>
			<Routes>
				<Route path="/" element={MainPage}>
					<Route index element={MainPage}/>
					<Route path="/login" element={Login}/>
					<Route path="/registration" element={Registration}/>
				</Route>
			</Routes>

			<div className="wrapper">
				<div className="authorization">
					<img src={logo} alt="" className="authorization__logo"/>
					{auth ? (
						<Login
							changeAuth={changeAuth}
							clickCheckPassword={clickCheckPassword}
							checkPassword={checkPassword}/>
					) : (
						<Registration
							changeAuth={changeAuth}
							clickCheckPassword={clickCheckPassword}
							checkPassword={checkPassword}
						/>
					)}

				</div>
			</div>
		</>
	);
}

export default App;
