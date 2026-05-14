import { NavLink, Route, Routes } from 'react-router';
import './App.scss'
import MoraPage from './pages/mora/MoraPage';
import KorainPage from './pages/korian/KorainPage';
import PooraatPage from './pages/pooraat/PooraatPage';
import SunbawnPage from './pages/sunbawn/sunbawnPage';
import DisplayHomePage from './pages/HomePage';

function handleTogglePrimaryNavBar() {
    const primaryNavBarElement = document.getElementById("primaryNavBar");
    if (!primaryNavBarElement) return;
    primaryNavBarElement.classList.toggle("phone-only-hidden");
};

function App() {

    return (
        <>
            <button onClick={handleTogglePrimaryNavBar} id="togglePrimaryNavBarButton">menu</button>
            <header id="primaryNavBar" className="phone-only-hidden">
                <nav aria-label="Primary navigation bar">
                    <ul>
                        <li>
                            <NavLink to={"/"} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/mora-goddess"}>Mora</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/korain-god"}>Korain</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pooraat-god"}>Po'oraat</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/sunbawn-god"}>Sunbawn</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                <Route index element={<DisplayHomePage/>}/>
                <Route path='/mora-goddess/*' element={<MoraPage/>}/>
                <Route path='/korain-god/*' element={<KorainPage/>}/>
                <Route path='/pooraat-god/*' element={<PooraatPage/>}/>
                <Route path='/sunbawn-god/*' element={<SunbawnPage/>}/>
                </Routes>
            </main>
            <footer>
                <NavLink to={"/"} >Home</NavLink>
                <a href="https://midnattlantern.github.io/portfolio/" target='_blank'>Developer & artist homepage</a>
                <a href="https://www.worldanvil.com/w/idoria-yviira/" target="_blank">World of Idoria</a>
                <a href="https://github.com/MidnattLantern/divinesofidoria#ai-disclosure" target="_blank" aria-label="AI disclosure">
                    <img src="no-ai-icon-02.svg" alt="No AI" width={50} height={50}/>
                </a>
            </footer>
        </>
    )
}

export default App
