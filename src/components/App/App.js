import React from "react";
import '../../styles/index.scss'
import '../../styles/normalize.scss'
import logo from '../../assets/logo/codebrologo.svg'

import Registration from "/Users/vladimir/Desktop/Frontend/Frontend/src/components/Authorization/Registration/Registration.js";
import Login from "/Users/vladimir/Desktop/Frontend/Frontend/src/components/Authorization/Login/Login.js";

import { Routes, Route, Link } from 'react-router-dom'

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
        <div className="wrapper">
            <div className="authorization">
                <img src={logo} alt="" className="authorization__logo" />
                {auth ? (
                    <Login
                        changeAuth={changeAuth}
                        clickCheckPassword={clickCheckPassword}
                        checkPassword={checkPassword} />
                ) : (
                    <Registration
                        changeAuth={changeAuth}
                        clickCheckPassword={clickCheckPassword}
                        checkPassword={checkPassword}
                    />
                )}

            </div>
        </div>
    );
}

export default App;
