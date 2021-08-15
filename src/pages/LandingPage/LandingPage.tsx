import React, {useState} from 'react';
import {
    Box,
    Chip,
    CircularProgress,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import FloatContainer from "../../components/containers/FloatContainer";
import {Autocomplete} from '@material-ui/lab';
import gradient from '../../assets/gradients/main-top-gradient.png';
import {domain, emptyNSVBSearch, NSVBEntry, NSVBSearch} from "../../services/nsvbLogic";
import {fakeDB} from "../../services/fakeDB";

interface LandingPageProps {
    fakeLoad: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({fakeLoad}) => {
    const [search, setSearch] = useState<NSVBSearch>(emptyNSVBSearch);

    const filteredFakeDB: NSVBEntry[] = fakeDB.filter((entry: NSVBEntry) => {
        let bool = true;

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
                    <p style={{fontWeight: 'bold', fontSize: 38, marginTop: 0, marginBottom: 16}}>
                        Nordic Social Value Bank
                    </p>
                    <p style={{fontSize: 20, margin: 0}}>
                        Metrics for wiser socioeconomic decisions.
                    </p>
                </Container>
            </Box>
            <Container>
                <FloatContainer style={{overflow: 'hidden', transform: 'translateY(-80px)'}}>'
                    <Box p={2}>
                        <Autocomplete
                            freeSolo
                            multiple
                            value={search.domain}
                            onChange={(event, newValue: string[]) => {
                                setSearch({...search, domain: newValue});
                            }}
                            disableClearable
                            options={domain}
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
                                label="Domain"
                                size='small'
                                variant='filled'
                                InputProps={{...params.InputProps, disableUnderline: true}}
                            />
                            }
                        />
                    </Box>

                    {/*<Box*/}
                    {/*    display='flex'*/}
                    {/*    alignItems='center'*/}
                    {/*    height='100%'*/}
                    {/*    position='relative'*/}
                    {/*    pr={1}*/}
                    {/*    pl={1}*/}
                    {/*>*/}
                    {/*    <Box*/}
                    {/*        pr={2}*/}
                    {/*        pl={2}*/}
                    {/*        display='flex'*/}
                    {/*        alignItems='center'*/}
                    {/*        justifyContent='center'*/}
                    {/*        height='100%'*/}
                    {/*        width='100%'*/}
                    {/*        style={{borderRight: '2px solid #F5F9FF'}}>*/}
                    {/*        <Autocomplete*/}
                    {/*            freeSolo*/}
                    {/*            multiple*/}
                    {/*            value={search.domain}*/}
                    {/*            onChange={(event, newValue: string[]) => {*/}
                    {/*                setSearch({...search, domain: newValue});*/}
                    {/*            }}*/}
                    {/*            disableClearable*/}
                    {/*            options={domain}*/}
                    {/*            style={{width: '100%'}}*/}
                    {/*            getOptionLabel={(option: string) => option}*/}
                    {/*            renderTags={(value, getTagProps) =>*/}
                    {/*                value.map((option, index) => (*/}
                    {/*                    <Chip*/}
                    {/*                        variant="outlined"*/}
                    {/*                        label={option}*/}
                    {/*                        size="small"*/}
                    {/*                        {...getTagProps({index})}*/}
                    {/*                    />*/}
                    {/*                ))*/}
                    {/*            }*/}
                    {/*            renderInput={(params: any) => <TextField*/}
                    {/*                {...params}*/}
                    {/*                label="Domain"*/}
                    {/*                fullWidth*/}
                    {/*                size='small'*/}
                    {/*                InputProps={{...params.InputProps, disableUnderline: true}}*/}
                    {/*            />*/}
                    {/*            }*/}
                    {/*        />*/}
                    {/*    </Box>*/}
                    {/*    <Box*/}
                    {/*        pr={2}*/}
                    {/*        pl={2}*/}
                    {/*        display='flex'*/}
                    {/*        alignItems='center'*/}
                    {/*        justifyContent='center'*/}
                    {/*        height='100%'*/}
                    {/*        width='100%'*/}
                    {/*        style={{borderRight: '2px solid #F5F9FF'}}>*/}
                    {/*        <Autocomplete*/}
                    {/*            freeSolo*/}
                    {/*            multiple*/}
                    {/*            value={search.age}*/}
                    {/*            onChange={(event, newValue: string[]) => {*/}
                    {/*                setSearch({...search, age: newValue});*/}
                    {/*            }}*/}
                    {/*            disableClearable*/}
                    {/*            options={age}*/}
                    {/*            style={{width: '100%'}}*/}
                    {/*            getOptionLabel={(option: string) => option}*/}
                    {/*            renderTags={(value, getTagProps) =>*/}
                    {/*                value.map((option, index) => (*/}
                    {/*                    <Chip*/}
                    {/*                        variant="outlined"*/}
                    {/*                        label={option}*/}
                    {/*                        size="small"*/}
                    {/*                        {...getTagProps({index})}*/}
                    {/*                    />*/}
                    {/*                ))*/}
                    {/*            }*/}
                    {/*            renderInput={(params: any) => <TextField*/}
                    {/*                {...params}*/}
                    {/*                label="Age"*/}
                    {/*                size='small'*/}
                    {/*                InputProps={{...params.InputProps, disableUnderline: true}}*/}
                    {/*            />*/}
                    {/*            }*/}
                    {/*        />*/}
                    {/*    </Box>*/}
                    {/*    <Box*/}
                    {/*        pr={2}*/}
                    {/*        pl={2}*/}
                    {/*        display='flex'*/}
                    {/*        alignItems='center'*/}
                    {/*        justifyContent='center'*/}
                    {/*        height='100%'*/}
                    {/*        width='100%'*/}
                    {/*        style={{borderRight: '2px solid #F5F9FF'}}>*/}
                    {/*        <Autocomplete*/}
                    {/*            freeSolo*/}
                    {/*            multiple*/}
                    {/*            value={search.sex}*/}
                    {/*            onChange={(event, newValue: string[]) => {*/}
                    {/*                setSearch({...search, sex: newValue});*/}
                    {/*            }}*/}
                    {/*            disableClearable*/}
                    {/*            options={sex}*/}
                    {/*            style={{width: '100%'}}*/}
                    {/*            getOptionLabel={(option: string) => option}*/}
                    {/*            renderTags={(value, getTagProps) =>*/}
                    {/*                value.map((option, index) => (*/}
                    {/*                    <Chip*/}
                    {/*                        variant="outlined"*/}
                    {/*                        label={option}*/}
                    {/*                        size="small"*/}
                    {/*                        {...getTagProps({index})}*/}
                    {/*                    />*/}
                    {/*                ))*/}
                    {/*            }*/}
                    {/*            renderInput={(params: any) => <TextField*/}
                    {/*                {...params}*/}
                    {/*                label="Sex"*/}
                    {/*                size='small'*/}
                    {/*                fullWidth*/}
                    {/*                InputProps={{...params.InputProps, disableUnderline: true}}*/}
                    {/*            />*/}
                    {/*            }*/}
                    {/*        />*/}
                    {/*    </Box>*/}
                    {/*    <Autocomplete*/}
                    {/*        freeSolo*/}
                    {/*        multiple*/}
                    {/*        value={search.education}*/}
                    {/*        onChange={(event, newValue: string[]) => {*/}
                    {/*            setSearch({...search, education: newValue});*/}
                    {/*        }}*/}
                    {/*        disableClearable*/}
                    {/*        options={education}*/}
                    {/*        style={{width: '100%'}}*/}
                    {/*        getOptionLabel={(option: string) => option}*/}
                    {/*        renderTags={(value, getTagProps) =>*/}
                    {/*            value.map((option, index) => (*/}
                    {/*                <Chip*/}
                    {/*                    variant="outlined"*/}
                    {/*                    label={option}*/}
                    {/*                    size="small"*/}
                    {/*                    {...getTagProps({index})}*/}
                    {/*                />*/}
                    {/*            ))*/}
                    {/*        }*/}
                    {/*        renderInput={(params: any) => <TextField*/}
                    {/*            {...params}*/}
                    {/*            label="Education"*/}
                    {/*            size='small'*/}
                    {/*            fullWidth*/}
                    {/*            variant='outlined'*/}
                    {/*            InputProps={{...params.InputProps}}*/}
                    {/*        />*/}
                    {/*        }*/}
                    {/*    />*/}
                    {/*</Box>*/}

                    {/*<Tooltip title='Export csv'>*/}
                    {/*    <CSVLink*/}
                    {/*        data={filteredFakeDB}*/}
                    {/*        filename={"nsvb.csv"}*/}
                    {/*        separator={";"}*/}
                    {/*    >*/}

                    {/*        <IconButton>*/}
                    {/*            <FileExcelLineIcon/>*/}
                    {/*        </IconButton>*/}
                    {/*    </CSVLink>*/}
                    {/*</Tooltip>*/}


                    {fakeLoad &&
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        p={2}
                    >

                        <CircularProgress style={{color: '#273A6B'}}/>
                    </Box>
                    }

                    {!fakeLoad &&
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        p={2}
                    >
                        <Table>
                            <TableHead
                                style={{background: '#F5F9FF'}}>
                                <TableRow>
                                    <TableCell style={{
                                        fontWeight: 'bold',
                                        paddingLeft: 16,
                                        borderRadius: '100px 0px 0px 100px'
                                    }}>Age</TableCell>
                                    <TableCell style={{fontWeight: 'bold'}}>Sex</TableCell>
                                    <TableCell style={{fontWeight: 'bold'}}>Education</TableCell>
                                    <TableCell style={{fontWeight: 'bold'}}>Wellbeing
                                        coefficient</TableCell>
                                    <TableCell style={{fontWeight: 'bold'}}>1 point gain</TableCell>
                                    <TableCell style={{
                                        fontWeight: 'bold',
                                        paddingRight: 16,
                                        borderRadius: '0px 100px 100px 0px'
                                    }}>1 point loss</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    filteredFakeDB.map((entry: NSVBEntry) => (
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
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Box>
                    }
                </FloatContainer>
            </Container>
        </div>
    );
}

export default LandingPage;