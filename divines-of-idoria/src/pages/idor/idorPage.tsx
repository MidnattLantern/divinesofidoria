import { useEffect } from "react";

import { Route, Routes } from "react-router";

function DisplayIdorPage() {
    useEffect(() => {
        document.title = "Idoria | Idor";
    }, []);

    return (
        <div className="Idor-page-view">
            <h1>Idor God</h1>
            <p>Coming soon</p>
            {/* <NavLink to={"portrait"}>Portrait</NavLink> */}
        </div>
    );
};

function IdorPage() {
    return (
        <Routes>
            <Route index element={<DisplayIdorPage/>}/>
        </Routes>
    )
};

export default IdorPage;
