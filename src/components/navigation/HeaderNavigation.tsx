import {Box, Container, makeStyles} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import React from "react";
import HeaderLink from "./HeaderLink";
import {useLocation} from "react-router";
import {RouteToColor} from "../../constants/Navigation";
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
    const color = RouteToColor[location.pathname] ?? '#273A6B';
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Box display='flex' alignItems='center'>
                    <Box pt={3} pb={3}>
                        <TextIconWrapper>
                            <HeaderLink to='/' color={color} style={{margin: 0}}>
                                NSVB
                                <span style={{fontSize: 9, position: 'absolute'}}>alpha</span>
                            </HeaderLink>
                        </TextIconWrapper>
                    </Box>
                    <Box flex={1}/>
                    <MobileNavigation color={color}/>
                    <DesktopNavigation color={color}/>
                </Box>
            </Container>
        </div>
    )
}

export default HeaderNavigation;