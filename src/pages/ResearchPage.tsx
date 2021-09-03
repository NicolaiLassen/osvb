import React from 'react';
import gradient from '../assets/gradients/main-top-gradient.png';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import nordic from "../assets/articles/1589849-PREVIEW01.jpg"
import waly from "../assets/articles/waly.webp"

function ResearchPage() {
    return (
        <div>
            <Box display='flex' alignItems='center'
                 style={{
                     height: 400,
                     background: '#F5F9FF',
                     backgroundImage: `url(${gradient})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat'
                 }}>
                <Container>
                    <p style={{fontWeight: 'bold', fontSize: 34, marginTop: 0, marginBottom: 16}}>
                        Socioøkonomisk forskning
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{transform: 'translateY(-80px)'}}>
                    <Grid container spacing={3}>
                        <Grid item md={3} xs={12}>
                            <a target='_blank' rel="noreferrer"
                               href='https://www.norden.org/en/publication/towards-nordic-wellbeing-economy'>
                                <Paper elevation={2}
                                       style={{
                                           backgroundImage: `url(${nordic})`,
                                           height: 400,
                                           width: '100%',
                                           boxShadow: '0px 8px 30px rgb(112 144 176 / 30%)',
                                           backgroundRepeat: 'no-repeat',
                                           backgroundPosition: 'center',
                                           backgroundSize: 'cover'
                                       }}
                                >
                                </Paper>
                            </a>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <a target='_blank' rel="noreferrer"
                               href='https://www.happinessresearchinstitute.com/waly'>
                                <Paper elevation={2}
                                       style={{
                                           backgroundImage: `url(${waly})`,
                                           height: 400,
                                           width: '100%',
                                           boxShadow: '0px 8px 30px rgb(112 144 176 / 30%)',
                                           backgroundRepeat: 'no-repeat',
                                           backgroundPosition: 'center',
                                           backgroundSize: 'cover'
                                       }}
                                >
                                </Paper>
                            </a>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default ResearchPage;
