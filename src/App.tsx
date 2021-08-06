import React from 'react';
import {Box, Container} from "@material-ui/core";
import FloatContainer from "./components/containers/FloatContainer";

function App() {
    return (
        <div>
            <div style={{position: "absolute", left: 0, right: 0}}>
                <Container>
                    <Box display='flex' alignItems='center'>
                        <Box pt={3} pb={3}>
                            <h2 style={{color: 'white', margin: 0}}>
                                NSVB
                            </h2>
                        </Box>
                        <Box flex={1}/>
                        <Box display='flex' alignItems='center' style={{color: 'white'}}>
                            <a>
                                About
                            </a>
                            <a style={{marginLeft: 16}}>
                                Research
                            </a>
                            <a style={{marginLeft: 16}}>
                                Developers
                            </a>
                        </Box>
                    </Box>
                </Container>
            </div>
            <Box display='flex' alignItems='center' style={{height: 400, background: '#273A6B'}}>
                <Container>
                    <h1 style={{color: 'white'}}>
                        Nordic Social Value Bank
                    </h1>
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

export default App;
