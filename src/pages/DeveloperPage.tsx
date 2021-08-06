import React from 'react';
import FloatContainer from "../components/containers/FloatContainer";
import {Box, Container, Grid} from "@material-ui/core";

function DeveloperPage() {
    return (
        <div>
            <Box display='flex' alignItems='center' style={{height: 400, background: '#E7F1F7'}}>
                <Container>
                    <p style={{color: '#273A6B', fontWeight: 'bold', fontSize: 34}}>
                        Build with developers in mind
                    </p>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <FloatContainer>
                            t
                        </FloatContainer>
                    </Grid>
                    <Grid item md={6}>
                        <FloatContainer>
                            t
                        </FloatContainer>
                    </Grid>
                    <Grid item md={6}>
                        <FloatContainer>
                            t
                        </FloatContainer>
                    </Grid>
                    <Grid item md={6}>
                        <FloatContainer>
                            t
                        </FloatContainer>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default DeveloperPage;
