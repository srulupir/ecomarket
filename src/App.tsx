import React from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Layout} from "./components/Layout";
import {EcoMarket} from "./components/content/EcoMarket";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/ecomarket" element={<EcoMarket/>}></Route>
            </Route>
        </Routes>
    )
}
export default App;
