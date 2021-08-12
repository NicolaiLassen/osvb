import {Box, Container, makeStyles} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import React from "react";
import HeaderLink from "./HeaderLink";
import {useLocation} from "react-router";
import {headerRouteProps, notFoundHeaderStyleProps} from "../../constants/Navigation";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        zIndex: 10,
        left: 0,
        right: 0
    }
}));

export const HeaderNavigation: React.FC = () => {
    const location = useLocation();
    const routeProps = headerRouteProps[location.pathname] ?? notFoundHeaderStyleProps;
    const classes = useStyles();

    return (
        <div className={classes.root} {...routeProps?.containerProps}>
            <Container>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Box pt={3} pb={3}>
                        <TextIconWrapper>
                            <HeaderLink to='/' color={routeProps.logo} style={{margin: 0}}>
                                NSVB
                                <span style={{fontSize: 9, position: 'absolute'}}>alpha</span>
                            </HeaderLink>
                        </TextIconWrapper>
                    </Box>
                    <DesktopNavigation color={routeProps.mainNavDesktop}/>
                    <MobileNavigation color={routeProps.mainNavMobile}/>
                </Box>
            </Container>
        </div>
    )
}

export default HeaderNavigation;