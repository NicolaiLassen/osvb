import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {HeaderNavigation} from "./components/navigation/HeaderNavigation";

function App() {
    return (
        <div>
            <Router>
                <HeaderNavigation/>
                <Switch>
                    <Route path='/' component={LandingPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
