import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteNames from "./constants/RouteNames";
import {HeaderNavigation} from "./components/navigation/HeaderNavigation";
import DeveloperPage from "./pages/DeveloperPage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";
import {FooterNavigation} from "./components/navigation/FooterNavigation";
import ErrorPage from "./pages/ErrorPage";
import DocsPage from "./pages/DocsPage";
import {ThemeProvider} from '@material-ui/core/styles';
import appTheme from "./theme/appTheme";
import PanelPage from "./pages/Panel/PanelPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {

    const [fakeLoad, setFakeLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFakeLoad(false)
        }, 400)
    }, [fakeLoad]);

    return (
        <ThemeProvider theme={appTheme}>
            <Router>
                <div style={{flex: '1 0 auto'}}>
                    <HeaderNavigation/>
                    <Switch>
                        <Route path={RouteNames.about} component={AboutPage}/>
                        <Route path={RouteNames.research} component={ResearchPage}/>

                        <Route path={RouteNames.panel} component={PanelPage}/>

                        <Route path={RouteNames.docs} component={DocsPage}/>
                        <Route path={RouteNames.developer} component={DeveloperPage}/>

                        <Route exact path={RouteNames.landing}>
                            <LandingPage fakeLoad={fakeLoad}/>
                        </Route>

                        <Route component={ErrorPage}/>
                    </Switch>
                </div>
                <FooterNavigation/>
                {/*<CookieBanner/>*/}
            </Router>
        </ThemeProvider>
    );
}

export default App;
