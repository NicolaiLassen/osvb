import React from "react";
import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";


export const FooterNavigation = () => {
    const d = new Date();
    const n = d.getFullYear();

    return (
        <Box style={{
            background: '#F5F9FF'
        }}>
            <Container>
                <Box pt={3} pb={3}>
                    <TextIconWrapper>
                        NSVB
                    </TextIconWrapper>
                    <Box height={16}/>
                    <p>
                        © {n} NSVB
                    </p>
                </Box>
            </Container>
        </Box>
    )
}