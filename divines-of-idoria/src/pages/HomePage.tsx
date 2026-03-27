import { useEffect } from "react";
import "./HomePage.css";
import KorainPosterImage from "../assets/korain-assets/posters/Korain-super-poster.webp";
import PooraatPosterImage from "../assets/pooraat-assets/posters/pooraat-god-poster.png";
import { NavLink } from "react-router";

function DisplayHomePage() {
    useEffect(() => {
        document.title = "Divines of Idoria";
    }, [])

    return (
        <section className="home-page">
            <h1>Divines of Idoria</h1>
            <NavLink to={"/korain-god"} className="home-page_navposter">
                <img src={KorainPosterImage} alt="Poster of Korain" loading="lazy"/>
            </NavLink>
            <NavLink to={"/pooraat-god"} className="home-page_navposter">
                <img src={PooraatPosterImage} alt="Poster of Po'oraat" loading="lazy"/>
            </NavLink>
        </section>
    );
};

export default DisplayHomePage;
