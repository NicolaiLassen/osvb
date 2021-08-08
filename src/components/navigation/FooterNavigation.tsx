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
                    <TextIconWrapper style={{fontSize: 20}}>
                        NSVB
                    </TextIconWrapper>
                    <Box height={32}/>
                    <span style={{fontSize: 13}}>
                        © {n} NSVB
                    </span>
                </Box>
            </Container>
        </Box>
    )
}