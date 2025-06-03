import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar bg-body-tertiary">
		<form className="container-fluid ">
			<Link to="/">
				<button className="btn btn-outline-success me-2" type="button">Main</button>
			</Link>
			<Link to="/AddContact">
				<button className="btn btn-outline-success me-2" type="button">New contact</button>
			</Link>
		</form>
		</nav>
	);
};




		// <nav className="navbar navbar-light bg-light">
		// 	<div className="container">
		// 		<Link to="/">
		// 			<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 		</Link>
		// 		<div className="ml-auto">
		// 			<Link to="/demo">
		// 				<button className="btn btn-primary">Check the Context in action</button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </nav>