import React from 'react';
import FloatContainer from "../components/containers/FloatContainer";
import {Box, Container, Grid} from "@material-ui/core";
import LifebuoyLineIcon from 'remixicon-react/LifebuoyLineIcon';
import KeyLineIcon from 'remixicon-react/KeyLineIcon';
import FileList3LineIcon from "remixicon-react/FileList3LineIcon";
import Slideshow3LineIcon from "remixicon-react/Slideshow3LineIcon";
import {Link} from "react-router-dom";
import RouteNames from "../constants/RouteNames";
import gradient from "../assets/gradients/main-top-gradient.png";

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
                        Åben integration
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{transform: 'translateY(-80px)'}}>
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Link to={RouteNames.docs} style={{
                                textDecoration: 'none'
                            }}>
                                <FloatContainer>
                                    <Box p={4} flexDirection='column' display='flex'
                                         justifyContent='center'>
                                        <Box
                                            mb={2}
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='center'
                                            borderRadius={8}
                                            style={{background: 'rgba(99,163,238,0.2)', height: 45, width: 45}}>
                                            <FileList3LineIcon color='#63A3EE' size={22}/>
                                        </Box>
                                        <h3 style={{
                                            fontWeight: 400,
                                            margin: 0
                                        }}>Dokumentation</h3>
                                    </Box>
                                </FloatContainer>
                            </Link>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FloatContainer>
                                <Box p={4} flexDirection='column' display='flex'
                                     justifyContent='center'>
                                    <Box
                                        mb={2}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        borderRadius={8}
                                        style={{background: 'rgba(99,163,238,0.2)', height: 45, width: 45}}>
                                        <KeyLineIcon color='#63A3EE' size={22}/>
                                    </Box>
                                    <h3 style={{fontWeight: 400, margin: 0}}>API nøgle</h3>
                                </Box>
                            </FloatContainer>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FloatContainer>
                                <Box p={4} flexDirection='column' display='flex'
                                     justifyContent='center'>
                                    <Box
                                        mb={2}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        borderRadius={8}
                                        style={{background: 'rgba(99,163,238,0.2)', height: 45, width: 45}}>
                                        <Slideshow3LineIcon color='#63A3EE' size={22}/>
                                    </Box>
                                    <h3 style={{fontWeight: 400, margin: 0}}>Eksempler</h3>
                                </Box>
                            </FloatContainer>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <FloatContainer>
                                <Box p={4} flexDirection='column' display='flex'
                                     justifyContent='center'>
                                    <Box
                                        mb={2}
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        borderRadius={8}
                                        style={{background: 'rgba(99,163,238,0.2)', height: 45, width: 45}}>
                                        <LifebuoyLineIcon color='#63A3EE' size={22}/>
                                    </Box>
                                    <h3 style={{fontWeight: 400, margin: 0}}>Support</h3>
                                </Box>
                            </FloatContainer>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default DeveloperPage;
