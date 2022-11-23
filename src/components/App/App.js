import React from "react";
import Registration from "../Registration/Registration";
import '../../styles/index.scss'
import '../../styles/normalize.scss'
import logo from '../../assets/logo/codebrologo.svg'
import Login from "../Login/Login";

function App() {

    const [auth, setAuth] = React.useState(false)

    const changeAuth = () => {
        setAuth(!auth)
    }

    return (
        <div className="wrapper">
            <div className="authorization">
                <img src={logo} alt="" className="authorization__logo" />
                {auth ? (
                    <Login changeAuth={changeAuth} />
                ) : (
                    <Registration changeAuth={changeAuth} />
                )}
            </div>
        </div>
    );
}

export default App;
