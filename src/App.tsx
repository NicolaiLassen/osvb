import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteNames from "./constants/RouteNames";
import LandingPage from "./pages/LandingPage";
import {HeaderNavigation} from "./components/navigation/HeaderNavigation";
import DeveloperPage from "./pages/DeveloperPage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <div>
            <Router>
                <HeaderNavigation/>
                <Switch>
                    <Route path={RouteNames.about} component={AboutPage}/>
                    <Route path={RouteNames.research} component={ResearchPage}/>
                    <Route path={RouteNames.developer} component={DeveloperPage}/>
                    <Route component={LandingPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
