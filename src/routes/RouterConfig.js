//libraries
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Import Components
import LandingPage from '../pages/LandingPage.js/LandingPage';

const RouterConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'  element={<LandingPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default RouterConfig
