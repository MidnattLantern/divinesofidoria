import { NavLink } from "react-router";
import "./NavBar.scss";
import { useState } from "react";
import BurgerMenu from "../../assets/vector-icons/burger-menu.svg?react";

function NavBar() {
    const [showNavBar, setShowNavBar] = useState<boolean>(false);

    function handleToggleShowNavBar() {
        setShowNavBar(!showNavBar);
    };

    function handleHideNavBar() {
        setShowNavBar(false);
    };

    return (
        <header onClick={showNavBar ? handleHideNavBar : () => {}} className={showNavBar ? "" : "header-no-events"} id="primaryNavBar">
            <button className="toggle-navbar-button" onClick={handleToggleShowNavBar}>
                <BurgerMenu/>
            </button>
                <nav className={showNavBar ? "header-is-visible" : "header-is-hidden"} id="primaryNavigationBar" aria-label="Primary navigation bar">
                    <ul>
                        <li>
                            <NavLink to={"/"} end tabIndex={showNavBar ? 0 : -1}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/mora-goddess"} tabIndex={showNavBar ? 0 : -1}>Mora</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/korain-god"} tabIndex={showNavBar ? 0 : -1}>Korain</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pooraat-god"} tabIndex={showNavBar ? 0 : -1}>Po'oraat</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/sunbawn-god"} tabIndex={showNavBar ? 0 : -1}>Sunbawn</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/idor-god"} tabIndex={showNavBar ? 0 : -1}>Idor</NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
    )
};

export default NavBar;