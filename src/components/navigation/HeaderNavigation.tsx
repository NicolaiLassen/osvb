import {Box, Container, makeStyles} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import React from "react";
import HeaderLink from "./HeaderLink";
import {useLocation} from "react-router";
import {notFoundHeaderStyleProps, headerRouteProps} from "../../constants/Navigation";
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
    const color = headerRouteProps[location.pathname] ?? notFoundHeaderStyleProps;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Box pt={3} pb={3}>
                        <TextIconWrapper>
                            <HeaderLink to='/' color={color.logo} style={{margin: 0}}>
                                NSVB
                                <span style={{fontSize: 9, position: 'absolute'}}>alpha</span>
                            </HeaderLink>
                        </TextIconWrapper>
                    </Box>
                    <DesktopNavigation color={color.mainNavDesktop}/>
                    <MobileNavigation color={color.mainNavMobile}/>
                </Box>
            </Container>
        </div>
    )
}

export default HeaderNavigation;