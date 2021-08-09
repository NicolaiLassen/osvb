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
                    <Box display='flex'>
                        <div style={{fontSize: 13}}>
                            © {n} NSVB
                        </div>
                        <Box flex={1}/>
                        <div style={{fontWeight: 500, fontSize: 13}}>
                            beta 0.0.1
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}