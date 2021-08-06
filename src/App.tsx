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
                        <Box style={{color: 'white'}}>
                            <p>
                                t
                            </p>
                        </Box>
                    </Box>

                </Container>
            </div>
            <div style={{height: 400, background: '#273A6B'}}>
            </div>
            <Container>
                <div style={{position: 'relative'}}>
                    <div style={{position: "absolute", left: 0, right: 0, top: -32, zIndex: 10}}>
                        <FloatContainer>
                            Picker
                        </FloatContainer>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default App;
