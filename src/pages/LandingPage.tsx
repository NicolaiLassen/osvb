import React from 'react';
import {Box, Container, TextField} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";
import {Autocomplete} from '@material-ui/lab';
// import gradient from '../assets/top-gradient.png';

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974}
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
                <div style={{position: 'relative', width: '100%'}}>
                    <div style={{position: "absolute", left: 0, right: 0, top: -44, zIndex: 10, width: '100%'}}>
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
                                    style={{borderRight: '1px solid #E7F1F7'}}>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option: any) => option.title}
                                        style={{width: 300}}
                                        renderInput={(params: any) => <TextField
                                            {...params} label="Combo box"
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
                </div>
                <Box height={80}/>
                <div style={{background: '#E7F1F7', height: 400, borderRadius: 8}}>
                </div>
            </Container>
        </div>
    );
}

export default LandingPage;
