import React from 'react';
import FloatContainer from "../components/containers/FloatContainer";
import {Box, Container, Grid} from "@material-ui/core";
import gradient from "../assets/sec-top-gradient.png";
import AlertLineIcon from 'remixicon-react/AlertLineIcon';
import LifebuoyLineIcon from 'remixicon-react/LifebuoyLineIcon';

function DeveloperPage() {
    return (
        <div>
            <Box display='flex' alignItems='center' style={{
                height: 400,
                background: '#F5F9FF',
                backgroundImage: `url(${gradient})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <Container>
                    <p style={{color: '#273A6B', fontWeight: 'bold', fontSize: 34}}>
                        Created with developers in mind
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{position: 'relative', width: '100%'}}>
                    <div style={{position: "absolute", left: 0, right: 0, top: -72, zIndex: 10, width: '100%'}}>
                        <Grid container spacing={3}>
                            <Grid item md={6} sm={12} xs={12}>
                                <FloatContainer>
                                    <Box p={4} flexDirection='column' display='flex'
                                         justifyContent='center'>
                                        <Box mb={2}>
                                            <AlertLineIcon size={26}/>
                                        </Box>
                                        <h3 style={{margin: 0}}>Documentation</h3>
                                    </Box>
                                </FloatContainer>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FloatContainer>
                                    <Box p={4} flexDirection='column' display='flex'
                                         justifyContent='center'>
                                        <Box mb={2}>
                                            <AlertLineIcon size={26}/>
                                        </Box>
                                        <h3 style={{margin: 0}}>Examples</h3>
                                    </Box>
                                </FloatContainer>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FloatContainer>
                                    <Box p={4} flexDirection='column' display='flex'
                                         justifyContent='center'>
                                        <Box mb={2}>
                                            <AlertLineIcon size={26}/>
                                        </Box>
                                        <h3 style={{margin: 0}}>API key</h3>
                                    </Box>
                                </FloatContainer>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <FloatContainer>
                                    <Box p={4} flexDirection='column' display='flex'
                                         justifyContent='center'>
                                        <Box mb={2}>
                                            <LifebuoyLineIcon size={26}/>
                                        </Box>
                                        <h3 style={{margin: 0}}>Support</h3>
                                    </Box>
                                </FloatContainer>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default DeveloperPage;
