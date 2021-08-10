import React, {useState} from 'react';
import {
    Box,
    Chip,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Tooltip
} from "@material-ui/core";
import FloatContainer from "../components/containers/FloatContainer";
import FileExcelLineIcon from "remixicon-react/FileExcelLineIcon";
import {Autocomplete} from '@material-ui/lab';
import gradient from '../assets/sec-top-gradient.png';
import {age, education, emptyNSVBSearch, NSVBEntry, NSVBSearch, sex, theme} from "../services/nsvbLogic";
import {fakeDB} from "../services/fakeDB";
import { CSVLink } from "react-csv";

function LandingPage() {

    const [search, setSearch] = useState<NSVBSearch>(emptyNSVBSearch);
    const [fakeLoad, setFakeLoad] = useState(false);

    const handleSetTheme = (param: string) => {
        if (!search.theme) {
            setFakeLoad(true);
            setTimeout(() => {
                setFakeLoad(false)
            }, 400)
        }
        setSearch({...search, theme: param});
    }


    const filteredFakeDB: NSVBEntry[] = fakeDB.filter((entry: NSVBEntry) => {
        let bool = true;

        // TODO: This is quick and dirty plz be smarter
        if (search.age.length > 0 && !search.age.includes(entry.age)) {
            bool = false;
        }

        if (search.sex.length > 0 && !search.sex.includes(entry.sex)) {
            bool = false;
        }

        if (search.education.length > 0 && !search.education.includes(entry.education)) {
            bool = false;
        }

        return bool;
    });

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
                            position='relative'
                            pr={1}
                            pl={1}
                        >
                            <Box
                                pr={2}
                                pl={2}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                width='100%'
                                style={{borderRight: '2px solid #F5F9FF'}}>
                                <Autocomplete
                                    freeSolo
                                    value={search?.theme}
                                    onChange={(event, newValue: string) => {
                                        handleSetTheme(newValue);
                                    }}
                                    disableClearable
                                    options={theme}
                                    style={{width: '100%'}}
                                    getOptionLabel={(option: string) => option}
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Theme"
                                        fullWidth
                                        required
                                        size='small'
                                        InputProps={{...params.InputProps, disableUnderline: true}}
                                    />
                                    }
                                />
                            </Box>
                            <Box
                                pr={2}
                                pl={2}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                width='100%'
                                style={{borderRight: '2px solid #F5F9FF'}}>
                                <Autocomplete
                                    freeSolo
                                    multiple
                                    value={search.age}
                                    disabled={!search.theme}
                                    onChange={(event, newValue: string[]) => {
                                        setSearch({...search, age: newValue});
                                    }}
                                    disableClearable
                                    options={age}
                                    style={{width: '100%'}}
                                    getOptionLabel={(option: string) => option}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                size="small"
                                                {...getTagProps({index})}
                                            />
                                        ))
                                    }
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Age"
                                        size='small'
                                        InputProps={{...params.InputProps, disableUnderline: true}}
                                    />
                                    }
                                />
                            </Box>
                            <Box
                                pr={2}
                                pl={2}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                width='100%'
                                style={{borderRight: '2px solid #F5F9FF'}}>
                                <Autocomplete
                                    freeSolo
                                    multiple
                                    value={search.sex}
                                    disabled={!search.theme}
                                    onChange={(event, newValue: string[]) => {
                                        setSearch({...search, sex: newValue});
                                    }}
                                    disableClearable
                                    options={sex}
                                    style={{width: '100%'}}
                                    getOptionLabel={(option: string) => option}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                size="small"
                                                {...getTagProps({index})}
                                            />
                                        ))
                                    }
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Sex"
                                        size='small'
                                        fullWidth
                                        InputProps={{...params.InputProps, disableUnderline: true}}
                                    />
                                    }
                                />
                            </Box>
                            <Box
                                pr={2}
                                pl={2}
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                height='100%'
                                width='100%'
                            >
                                <Autocomplete
                                    freeSolo
                                    multiple
                                    value={search.education}
                                    disabled={!search.theme}
                                    onChange={(event, newValue: string[]) => {
                                        setSearch({...search, education: newValue});
                                    }}
                                    disableClearable
                                    options={education}
                                    style={{width: '100%'}}
                                    getOptionLabel={(option: string) => option}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                size="small"
                                                {...getTagProps({index})}
                                            />
                                        ))
                                    }
                                    renderInput={(params: any) => <TextField
                                        {...params}
                                        label="Education"
                                        size='small'
                                        fullWidth
                                        InputProps={{...params.InputProps, disableUnderline: true}}
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
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        {fakeLoad &&
                                        <Box p={3}>
                                            <CircularProgress style={{color: '#273A6B'}}/>
                                        </Box>
                                        }

                                        {!fakeLoad &&
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={{fontWeight: 'bold'}}>Age</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Sex</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Education</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>Wellbeing
                                                        coefficient</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>1 point loss</TableCell>
                                                    <TableCell style={{fontWeight: 'bold'}}>1 point gain</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {filteredFakeDB.map((entry: NSVBEntry) => (
                                                    <TableRow key={entry.id}>
                                                        <TableCell component="th" scope="row">
                                                            {entry.age}
                                                        </TableCell>
                                                        <TableCell>{entry.sex}</TableCell>
                                                        <TableCell>{entry.education}</TableCell>
                                                        <TableCell>{entry.wellbeingCoefficient}</TableCell>
                                                        <TableCell>{entry.pointGain}</TableCell>
                                                        <TableCell>{entry.pointLoss}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        }
                                    </Box>
                                </Paper>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}>
                            <Paper>
                                <Box p={1}
                                     display='flex'
                                     alignItems='center'
                                     justifyContent='center'
                                >
                                    <Tooltip title='Export csv'>
                                        <CSVLink
                                            data={filteredFakeDB}
                                            filename={"nsvb.csv"}
                                            separator={";"}
                                        >

                                            <IconButton>
                                                <FileExcelLineIcon/>
                                            </IconButton>
                                        </CSVLink>
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