import React, {useState} from 'react';
import {
    Box,
    CircularProgress,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import gradient from '../../assets/gradients/main-top-gradient.png';
import {emptyNSVBSearch, NSVBEntry, NSVBSearch} from "../../services/nsvbLogic";
import {fakeDB} from "../../services/fakeDB";
import ValueFilter from "./ValueFilter";

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
                <Box style={{transform: 'translateY(-80px)'}}>
                    <Paper elevation={2} style={{padding: 16, marginBottom: 16}}>
                        <ValueFilter search={search} setSearch={setSearch} data={filteredFakeDB}/>
                    </Paper>
                    <Paper style={{overflow: 'hidden'}}>
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
                        >
                            <TableContainer>
                                {/*https://medium.com/appnroll-publication/5-practical-solutions-to-make-responsive-data-tables-ff031c48b122*/}
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Domain</TableCell>
                                            <TableCell
                                                style={{
                                                    backgroundColor: '#273A6B',
                                                    color: 'white',
                                                    fontWeight: 'bold'
                                                }}>Age</TableCell>
                                            <TableCell
                                                style={{
                                                    backgroundColor: '#273A6B',
                                                    color: 'white',
                                                    fontWeight: 'bold'
                                                }}>Sex</TableCell>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Education</TableCell>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Wellbeing
                                                coefficient</TableCell>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>P-value</TableCell>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Sample size</TableCell>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Value gain pr. person</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            filteredFakeDB.map((entry: NSVBEntry) => (
                                                <TableRow key={entry.id}>
                                                    <TableCell></TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {entry.age}
                                                    </TableCell>
                                                    <TableCell>{entry.sex}</TableCell>
                                                    <TableCell>{entry.education}</TableCell>
                                                    <TableCell>{entry.wellbeingCoefficient}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>{entry.pointGain}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        }
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}

export default LandingPage;