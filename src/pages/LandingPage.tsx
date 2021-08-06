import React from 'react';
import {Box, Container} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";

function LandingPage() {
    return (
        <div>
            <Box display='flex' alignItems='center' style={{height: 400, background: '#273A6B'}}>
                <Container>
                    <p style={{color: 'white', fontWeight: 'bold', fontSize: 32}}>
                        Nordic Social Value Bank
                    </p>
                </Container>
            </Box>
            <Container style={{position: 'relative'}}>
                <div style={{position: 'relative'}}>
                    <div style={{position: "absolute", left: 0, right: 0, top: -42, zIndex: 10, width: '100%'}}>
                        <FloatContainer>
                            Picker
                        </FloatContainer>
                    </div>
                </div>
                <Box height={80}/>
                <div style={{background: '#E7F1F7', height: 400, borderRadius: 8}}>
                </div>
            </Container>
        </div>
    );
}

export default LandingPage;
