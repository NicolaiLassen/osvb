import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {HeaderNavigation} from "./components/navigation/HeaderNavigation";
import DeveloperPage from "./pages/DeveloperPage";
import RouteNames from "./constants/routeNames";

function App() {
    return (
        <div>
            <Router>
                <HeaderNavigation/>
                <Switch>
                    <Route path={RouteNames.developer} component={DeveloperPage}/>
                    <Route path={RouteNames.landing} component={LandingPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
