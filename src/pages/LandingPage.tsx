import React, {useState} from 'react';
import {Box, CircularProgress, Container, Grid, IconButton, Paper, TextField, Tooltip} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";
import FileExcelLineIcon from "remixicon-react/FileExcelLineIcon";
import {Autocomplete} from '@material-ui/lab';
import gradient from '../assets/sec-top-gradient.png';
import {CategoricSelect, emptyNSVBSearch, NSVBEntry, NSVBSearch, sex, theme} from "../services/nsvbLogic";
import {fakeDB} from "../services/fakeDB";

// TEMP DINDONG PAGE

function LandingPage() {

    const [search, setSearch] = useState<NSVBSearch>(emptyNSVBSearch);
    const [fakeLoad, setFakeLoad] = useState(false);

    const handleSearch = (param: CategoricSelect) => {
        if (!search.theme) {
            setFakeLoad(true);
            setTimeout(() => {
                setFakeLoad(false)
            }, 500)
        }
        // @ts-ignore
        setSearch({...search, [param.type]: param.value});
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
                        Metrics for wiser socioeconomics decisions.
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
                                <Autocomplete
                                    freeSolo
                                    value={search?.theme}
                                    onChange={(event, newValue: any) => {
                                        handleSearch(newValue);
                                    }}
                                    disableClearable
                                    options={theme}
                                    style={{width: 150}}
                                    getOptionLabel={(option: CategoricSelect) => option.value}
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Theme"
                                        fullWidth
                                        required
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
                                    value={search?.sex}
                                    disabled={!search.theme}
                                    onChange={(event, newValue: any) => {
                                        handleSearch(newValue);
                                    }}
                                    disableClearable
                                    options={sex}
                                    style={{width: 150}}
                                    getOptionLabel={(option: CategoricSelect) => option.value}
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
                    <Grid
                        container
                        spacing={3}
                        style={{marginTop: 16, flexWrap: "wrap-reverse"}}
                    >
                        <Grid item xs={12} sm={12} md={11}>
                            <Box
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                            >
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    {(!search.theme && !fakeLoad) &&
                                    <p style={{textAlign: 'center', fontWeight: 500, fontSize: 17}}>
                                        Please Select a theme...
                                    </p>
                                    }
                                </Box>
                                {(search.theme || fakeLoad) &&
                                <Paper style={{width: '100%'}}>
                                    <Box
                                        p={3}
                                        display='flex'
                                        style={{background: '#F5F9FF'}}
                                    >
                                        <h4 style={{fontWeight: 500, margin: 0}}>{search.theme}</h4>
                                    </Box>
                                    <Box
                                        p={3}
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        {fakeLoad &&
                                        <div>
                                            <CircularProgress style={{color: '#273A6B'}}/>
                                        </div>
                                        }

                                        {!fakeLoad &&
                                        fakeDB.map((entry: NSVBEntry) => {
                                            return (
                                                <div>{entry.age}</div>
                                            )
                                        })}
                                    </Box>
                                </Paper>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}>
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
