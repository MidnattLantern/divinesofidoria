import { NavLink, Route, Routes } from 'react-router';
import './App.scss'
import MoraPage from './pages/mora/MoraPage';
import KorainPage from './pages/korian/KorainPage';
import PooraatPage from './pages/pooraat/PooraatPage';
import SunbawnPage from './pages/sunbawn/sunbawnPage';
import DisplayHomePage from './pages/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {

    return (
        <>
            <NavBar/>
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
