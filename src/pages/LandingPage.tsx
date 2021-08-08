import React from 'react';
import {Box, Container, TextField} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";
import {Autocomplete} from '@material-ui/lab';
// import gradient from '../assets/top-gradient.png';

const sex = [
    {title: 'Male'},
    {title: 'Female'},
];

function LandingPage() {
    return (
        <div>
            <Box display='flex' alignItems='center'
                 style={{
                     height: 400,
                     background: '#231E23'
                 }}>
                <Container>
                    <p style={{color: 'white', fontWeight: 'bold', fontSize: 34}}>
                        Nordic Social Value Bank
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{transform: 'translateY(-44px)'}}>
                    <FloatContainer style={{height: 88}}>
                        <Box
                            display='flex'
                            alignItems='center'
                            height='100%'
                            pr={1}
                            pl={1}
                        >
                            <Box
                                pr={1}
                                pl={1}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                style={{borderRight: '1px solid #F5F9FF'}}>
                                <Autocomplete
                                    options={sex}
                                    style={{width: 150}}
                                    getOptionLabel={(option: any) => option.title}
                                    renderInput={(params: any) => <TextField
                                        {...params} label="Sex"
                                        size='small'
                                        variant="outlined"
                                        style={{border: 'none'}}
                                    />
                                    }
                                />
                            </Box>
                        </Box>
                    </FloatContainer>
                </div>
            </Container>
        </div>
    );
}

export default LandingPage;
