import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import React from "react";
import HeaderLink from "./HeaderLink";
import RouteNames from "../../constants/RouteNames";
import {useLocation} from "react-router";
import {RouteToColor} from "../../constants/Navigation";

export const HeaderNavigation: React.FC = () => {
    const location = useLocation();
    const color = RouteToColor[location.pathname] ?? '#273A6B';
    return (
        <div style={{position: "absolute", zIndex: 10, left: 0, right: 0}}>
            <Container>
                <Box display='flex' alignItems='center'>
                    <Box pt={3} pb={3}>
                        <TextIconWrapper>
                            <HeaderLink to='/' color={color} style={{margin: 0}}>
                                NSVB
                            </HeaderLink>
                        </TextIconWrapper>
                    </Box>
                    <Box flex={1}/>
                    <Box display='flex' alignItems='center'>
                        <HeaderLink to={RouteNames.about} color={color}>
                            About
                        </HeaderLink>
                        <HeaderLink to={RouteNames.research} color={color}>
                            Research
                        </HeaderLink>
                        <HeaderLink to={RouteNames.developer} color={color}>
                            Developer
                        </HeaderLink>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default HeaderNavigation;