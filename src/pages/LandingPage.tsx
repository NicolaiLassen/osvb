import React, {useState} from 'react';
import {Box, CircularProgress, Container, Grid, IconButton, Paper, TextField, Tooltip} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";
import FileExcelLineIcon from "remixicon-react/FileExcelLineIcon";
import {Autocomplete} from '@material-ui/lab';
import gradient from '../assets/sec-top-gradient.png';
import {CategoricSelect, NSVBSearch, sex, theme, wellbeingCoefficient} from "../services/nsvbLogic";

// https://material-ui.com/components/autocomplete/

function LandingPage() {

    const [search, setSearch] = useState<NSVBSearch | undefined>(undefined);
    const [fakeLoad, setFakeLoad] = useState(false);

    const handleSearch = () => {
        setSearch(undefined);
        setFakeLoad(true);
    }

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
                            onClick={handleSearch}
                        >
                            <Box
                                pr={1}
                                pl={1}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                style={{borderRight: '2px solid #F5F9FF'}}>
                                <Autocomplete
                                    freeSolo
                                    disableClearable
                                    options={theme}
                                    style={{width: 150}}
                                    getOptionLabel={(option: CategoricSelect) => option.type}
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Theme"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        InputProps={{...params.InputProps}}
                                    />
                                    }
                                />
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
                                    freeSolo
                                    disableClearable
                                    options={sex}
                                    style={{width: 150}}
                                    getOptionLabel={(option: CategoricSelect) => option.type}
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Sex"
                                        size='small'
                                        variant="outlined"
                                        InputProps={{...params.InputProps}}
                                    />
                                    }
                                />
                            </Box>
                        </Box>
                    </FloatContainer>
                    <Grid container spacing={3} style={{paddingTop: 32}}>
                        <Grid item md={11}>
                            <Box
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                            >
                                <Paper style={{width: '100%'}}>
                                    <Box
                                        p={3}
                                        width='100%'
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        {(!search && !fakeLoad) &&
                                        <p style={{textAlign: 'center', fontSize: 18}}>
                                            Please Select a filter...
                                        </p>
                                        }

                                        {fakeLoad &&
                                        <div>
                                            <CircularProgress/>
                                        </div>
                                        }
                                        {
                                            wellbeingCoefficient.map((entry) => {
                                                return (
                                                    <div>{entry}</div>
                                                )
                                            })
                                        }
                                    </Box>
                                </Paper>

                            </Box>
                        </Grid>
                        <Grid item md={1}>
                            <Paper>
                                <Box p={1} display='flex' alignItems='center' justifyContent='center'>
                                    <Tooltip title='Export csv'>
                                        <IconButton>
                                            <FileExcelLineIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default LandingPage;
