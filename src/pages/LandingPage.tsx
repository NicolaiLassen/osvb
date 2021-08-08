import React from 'react';
import {Box, Container, IconButton, TextField} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";
import FileExcelLineIcon from "remixicon-react/FileExcelLineIcon";
import {Autocomplete} from '@material-ui/lab';
import gradient from '../assets/sec-top-gradient.png';
import {sex} from "../services/nsvbLogic";

function LandingPage() {
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
                        Nordic Social Value Bank
                    </p>
                    <p style={{fontSize: 20, margin: 0}}>
                        For wiser socioeconomics decisions.
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{transform: 'translateY(-44px)'}}>
                    <FloatContainer style={{height: 88, overflow: 'hidden'}}>
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
                                style={{borderRight: '2px solid #F5F9FF'}}>
                            </Box>
                            <Box
                                pr={1}
                                pl={1}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                style={{borderRight: '2px solid #F5F9FF'}}>
                                <Autocomplete
                                    options={sex}
                                    style={{width: 150}}
                                    getOptionLabel={(option: any) => option.title}
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Sex"
                                        size='small'
                                        variant="outlined"
                                    />
                                    }
                                />
                            </Box>
                            <Box
                                pr={1}
                                pl={1}>
                                <IconButton size='small'>
                                    <FileExcelLineIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </FloatContainer>
                </div>
            </Container>
        </div>
    );
}

export default LandingPage;
