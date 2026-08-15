import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./AboutPage.styles.scss";

function DisplayAboutPage() {
    useEffect(() => {
        document.title = "Idoria | About"
    }, []);
    return (
        <div className="about-page">
            <h1>About Divines of Idoria</h1>
            <section>
                <h2>What's the purpose of this web-page?</h2>
                <p>This page is primarly a vault of commissioned illustrations for a Dungeons and Dragons world. Because of the DnD project's scope, the vault expanded to also serve as an art exhibition, with brief documentation covering some of the making behind each illustration. These documentations also serve as proof that the work is entirely human made.</p>
            </section>
            <section>
                <h2>Who are involved?</h2>
                <p>
                    Midnatt Lantern (Alma) is the commissioned artist behind all the illustrations featured on this page, as well as the web-developer for this page.
                    <br/>Yviira (Avery) is the mind behind the DnD world "Idoria", and the director/ commissioner behind the illustrations.
                    <br/>There are several people involved with producing content for the world of Idoria. For more details, please visit <a href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">Yviira's WorldAnvil page</a>.
                </p>
            </section>
            <section>
                <h2>What are the Divines?</h2>
                <p>
                    In the world of Idoria, there are different kinds of celestial profiles. This page feature four of "the nine divines", as of writing this, a fifth is on its way.
                    <br/>The nine divines micro-manage the material and behavioural aspects of Idoria, such as the wind or innovative spirit of the people who live there. This vault/ gallery depict the divinities roles and nature thorugh visual storytelling, serving as a complement to the paragraphs.
                    <br/>Read more <a href="https://www.worldanvil.com/w/idoria-yviira/c/the-divines-category" target="_blank">about the divines on WorldAnvil</a>.
                </p>
            </section>
        </div>
    );
};

function AboutPage() {
    return (
        <Routes>
            <Route index element={<DisplayAboutPage/>}/>
        </Routes>
    )
};

export default AboutPage;