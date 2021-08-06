import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import React from "react";
import HeaderLink from "./HeaderLink";
import RouteNames from "../../constants/routeNames";

export const HeaderNavigation = () => {
    return (
        <div style={{position: "absolute", left: 0, right: 0}}>
            <Container>
                <Box display='flex' alignItems='center'>
                    <Box pt={3} pb={3}>
                        <HeaderLink to='/'>
                            <TextIconWrapper style={{fontWeight: "lighter", color: 'white', margin: 0}}>
                                NSVB
                            </TextIconWrapper>
                        </HeaderLink>
                    </Box>
                    <Box flex={1}/>
                    <Box display='flex' alignItems='center' style={{color: 'white'}}>
                        <HeaderLink to='/'>
                            About
                        </HeaderLink>
                        <HeaderLink to='/'>
                            Research
                        </HeaderLink>
                        <HeaderLink to={RouteNames.developer}>
                            Developer
                        </HeaderLink>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default HeaderNavigation;