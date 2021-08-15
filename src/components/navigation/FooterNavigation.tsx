import React from "react";
import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";


export const FooterNavigation = () => {
    const d = new Date();
    const n = d.getFullYear();

    return (
        <Box style={{background: '#F5F9FF', flexShrink: 0}}>
            <Container>
                <Box pt={2} pb={2}>
                    <TextIconWrapper style={{fontSize: 20}}>
                        NSVB
                    </TextIconWrapper>
                    <Box height={16}/>
                    <Box display='flex'>
                        <div style={{fontSize: 13}}>
                            © {n} NSVB
                        </div>
                        <Box flex={1}/>
                        <div style={{fontWeight: 500, fontSize: 13}}>
                            alpha 0.0.1
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}