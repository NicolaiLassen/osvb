import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import React from "react";
import HeaderLink from "./HeaderLink";


export const HeaderNavigation = () => {
    return (
        <div style={{position: "absolute", left: 0, right: 0}}>
            <Container>
                <Box display='flex' alignItems='center'>
                    <Box pt={3} pb={3}>
                        <HeaderLink href='/'>
                            <TextIconWrapper style={{fontWeight: "lighter", color: 'white', margin: 0}}>
                                NSVB
                            </TextIconWrapper>
                        </HeaderLink>
                    </Box>
                    <Box flex={1}/>
                    <Box display='flex' alignItems='center' style={{color: 'white'}}>
                        <HeaderLink href='/'>
                            About
                        </HeaderLink>
                        <HeaderLink href='/' style={{marginLeft: 16}}>
                            Research
                        </HeaderLink>
                        <HeaderLink href='/' style={{marginLeft: 16}}>
                            Developer
                        </HeaderLink>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}