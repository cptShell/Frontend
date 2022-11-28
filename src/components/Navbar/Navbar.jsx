import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
	return (
		<nav className={"bg-yellow-400 flex justify-between px-16"}>
			<Link to={"/login"}>login</Link>
			<Link to={"/registration"}>registration</Link>
		</nav>
	);
};

export default Navbar;