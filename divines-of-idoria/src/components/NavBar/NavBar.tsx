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
        document.getElementById("testFocMe")?.focus();
    };

    return (
        <header
        onClick={showNavBar ? handleHideNavBar : undefined}
        className={showNavBar ? "" : "header-no-events"}
        id="primaryNavBar"
        >
            <button tabIndex={0} className="toggle-navbar-button" onClick={handleToggleShowNavBar}>
                <BurgerMenu/>
            </button>
                <nav className={showNavBar ? "header-is-visible" : "header-is-hidden"} id="primaryNavigationBar" aria-label="Primary navigation bar">
                    <div className="navbar-logo">
                        <NavLink onClick={handleHideNavBar} to={"/"} end>Divines Of Idoria</NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/"} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/mora-goddess"}>Mora</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/korain-god"}>Korain</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/pooraat-god"}>Po'oraat</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/sunbawn-god"}>Sunbawn</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/idor-god"}>Idor</NavLink>
                        </li>
                    </ul>
                    <ul className="bottom-section">
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/aboout"} end>About</NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
    )
};

export default NavBar;