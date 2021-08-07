import React from "react";
import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";


export const FooterNavigation = () => {

    return (
        <Box mt={2} style={{
            background: '#F5F9FF'
        }}>
            <Container>
                <Box pt={5} pb={5}>
                    <TextIconWrapper>
                        NSVB
                    </TextIconWrapper>
                </Box>
            </Container>
        </Box>
    )
}