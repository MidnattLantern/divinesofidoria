import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import MoraPage from './pages/mora/MoraPage';

function DisplayIndex () {
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
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
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
      </header>
      <main>
        <Routes>
          <Route index element={<DisplayIndex/>}/>
          <Route path='/mora-goddess/*' element={<MoraPage/>}/>
          <Route path='/korain-god/*' element={<h1>Korain God</h1>}/>
          <Route path='/pooraat-god/*' element={<h1>Po'oraat God</h1>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
