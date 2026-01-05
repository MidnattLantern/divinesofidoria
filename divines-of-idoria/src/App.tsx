import { NavLink, Route, Routes } from 'react-router';
import './App.css'
import MoraPage from './pages/mora/MoraPage';
import KorainPage from './pages/korian/KorainPage';
import PooraatPage from './pages/pooraat/PooraatPage';
import { useEffect } from 'react';

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

function App() {

  return (
    <>
      <header>
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
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<DisplayIndex/>}/>
          <Route path='/mora-goddess/*' element={<MoraPage/>}/>
          <Route path='/korain-god/*' element={<KorainPage/>}/>
          <Route path='/pooraat-god/*' element={<PooraatPage/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
