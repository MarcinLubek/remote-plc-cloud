import React from "react";
import fire from "./Config/Firebase";

function Menu(props) {
	function logOut() {
		fire.auth()
			.signOut()
			.then(() => {})
			.catch(error => {});
	}

	function toggleMenu(e) {
		let menu = document.getElementById("menu");
		let menuContainer = document.getElementById("menuContainerId");
		let navIcon = document.getElementById("navIcon");
		menu.classList.toggle("hidden");
		menuContainer.classList.toggle("positionAbsolute");
		navIcon.classList.toggle("closeIcon");
		navIcon.classList.toggle("hamburgerIcon");
	}

	return (
		<nav role="navigation">
			<div id="navIcon" className="hamburgerIcon" onClick={toggleMenu}>
				<div />
			</div>
			<div id="menu" className="hidden">
				<ul>
					<li onClick={props.navigateToDashboard}>
						Panel sterowania
					</li>
					<li onClick={props.navigateToSettings}>Ustawienia</li>
					<li onClick={logOut}>Wyloguj się</li>
				</ul>
			</div>
		</nav>
	);
}

export default Menu;
