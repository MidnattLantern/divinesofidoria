import { NavLink } from "react-router";
import "./NavBar.scss";
import { useState } from "react";
import BurgerMenu from "../../assets/vector-icons/burger-menu.svg?react";
import MoraSVGSymbol from "../../assets/vector-icons/mora-symbol.svg?react";
import KorainSVGSymbol from "../../assets/vector-icons/korain-symbol.svg?react";
import PooraatSVGSymbol from "../../assets/vector-icons/pooraat-symbol.svg?react";
import SunbawnSVGSymbol from "../../assets/vector-icons/sunbawn-symbol-silhouette.svg?react";

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
                        <NavLink className={"justify-to-center"} onClick={handleHideNavBar} to={"/"} end>
                            <span>Divines Of Idoria</span>
                        </NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/mora-goddess"}>
                                <MoraSVGSymbol/>
                                <span>Mora</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/korain-god"}>
                            <KorainSVGSymbol/>
                                <span>Korain</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/pooraat-god"}>
                            <PooraatSVGSymbol/>
                                <span>Po'oraat</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleHideNavBar} to={"/sunbawn-god"}>
                                <SunbawnSVGSymbol/>
                                <span>Sunbawn</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"justify-to-center"} onClick={handleHideNavBar} to={"/idor-god"}>
                                <span>Idor</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="bottom-section">
                        <li>
                            <NavLink className={"justify-to-center"} onClick={handleHideNavBar} to={"/"} end>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"justify-to-center"} onClick={handleHideNavBar} to={"/about"} end>
                                <span>About</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
    )
};

export default NavBar;