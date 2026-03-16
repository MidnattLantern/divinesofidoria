import { NavLink, Route, Routes } from 'react-router';
import './App.css'
import MoraPage from './pages/mora/MoraPage';
import KorainPage from './pages/korian/KorainPage';
import PooraatPage from './pages/pooraat/PooraatPage';
import { useEffect } from 'react';
import SunbawnPage from './pages/sunbawn/sunbawnPage';

function DisplayIndex () {
    useEffect(() => {
        document.title = "Divines of Idoria";
    }, []);

    return (
      <>
        <h1>Divines of Idoria</h1>
      </>
    );
};

function handleTogglePrimaryNavBar() {
    const primaryNavBarElement = document.getElementById("primaryNavBar");
    if (!primaryNavBarElement) return;
    primaryNavBarElement.classList.toggle("phone-only-hidden");
};

function App() {

  return (
    <>
      <header>
        <nav id="primaryNavBar" className="phone-only-hidden" aria-label="Primary navigation bar">
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
        <div>
            <button onClick={handleTogglePrimaryNavBar} id="togglePrimaryNavBarButton">menu</button>
        </div>
      </header>
      <main>
        <Routes>
          <Route index element={<DisplayIndex/>}/>
          <Route path='/mora-goddess/*' element={<MoraPage/>}/>
          <Route path='/korain-god/*' element={<KorainPage/>}/>
          <Route path='/pooraat-god/*' element={<PooraatPage/>}/>
          <Route path='/sunbawn-god/*' element={<SunbawnPage/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
