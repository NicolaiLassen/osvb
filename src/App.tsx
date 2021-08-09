import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteNames from "./constants/RouteNames";
import LandingPage from "./pages/LandingPage";
import {HeaderNavigation} from "./components/navigation/HeaderNavigation";
import DeveloperPage from "./pages/DeveloperPage";
import ResearchPage from "./pages/ResearchPage";
import AboutPage from "./pages/AboutPage";
import {FooterNavigation} from "./components/navigation/FooterNavigation";
import {Box} from "@material-ui/core";
import ErrorPage from "./pages/ErrorPage";
import DocsPage from "./pages/DocsPage";
import {ThemeProvider} from '@material-ui/core/styles';
import appTheme from "./theme/appTheme";
import CookieBanner from "./components/CookieBanner";

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <Router>
                <HeaderNavigation/>

                <Box
                    position='relative'
                    display='flex'
                    height='100vh'
                    flexDirection='column'
                    justifyContent='space-between'>
                    <Switch>
                        <Route path={RouteNames.about} component={AboutPage}/>
                        <Route path={RouteNames.research} component={ResearchPage}/>

                        <Route path={RouteNames.docs} component={DocsPage}/>
                        <Route path={RouteNames.developer} component={DeveloperPage}/>

                        <Route exact path={RouteNames.landing} component={LandingPage}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                    <FooterNavigation/>
                </Box>
                {/*<CookieBanner/>*/}
            </Router>
        </ThemeProvider>
    );
}

export default App;
