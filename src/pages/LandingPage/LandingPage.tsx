import React, {useEffect, useState} from 'react';
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
import ActionBarValueFilter from "./ActionBarValueFilter";

interface LandingPageProps {
    fakeLoad: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({fakeLoad}) => {
    const [search, setSearch] = useState<NSVBSearch>(emptyNSVBSearch);

    // virtuallizer
    const [filteredData, setFilteredData] = useState<NSVBEntry[]>(fakeDB.slice(0, 50))

    useEffect(() => {
        const newFilteredData: NSVBEntry[] = fakeDB.filter((entry: NSVBEntry) => {
            let bool = true;

            if (search.domain.length > 0 && !search.domain.includes(entry.domain)) {
                bool = false;
            }

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
        // virtuallizer
        setFilteredData(newFilteredData.slice(0, 50));
    }, [search])

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
                        Værdier for bedre socioøkonomiske beslutninger
                    </p>
                </Container>
            </Box>

            <Container>
                <Box style={{transform: 'translateY(-80px)'}}>
                    <Paper elevation={2} style={{padding: 16, marginBottom: 16}}>
                        <ActionBarValueFilter search={search} setSearch={setSearch} data={filteredData}/>
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
                            <TableContainer style={{maxHeight: 500}}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Domæne</TableCell>
                                            <TableCell
                                                style={{
                                                    backgroundColor: '#273A6B',
                                                    color: 'white',
                                                    fontWeight: 'bold'
                                                }}>Alder</TableCell>
                                            <TableCell
                                                style={{
                                                    backgroundColor: '#273A6B',
                                                    color: 'white',
                                                    fontWeight: 'bold'
                                                }}>Køn</TableCell>
                                            <TableCell style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Uddannelse</TableCell>
                                            <TableCell align={"right"} style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Trivselskoefficient</TableCell>
                                            <TableCell align={"right"} style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>P-value</TableCell>
                                            <TableCell align={"right"} style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Prøvestørrelse</TableCell>
                                            <TableCell align={"right"} style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Værdigevinst p</TableCell>
                                            <TableCell align={"right"} style={{
                                                backgroundColor: '#273A6B',
                                                color: 'white',
                                                fontWeight: 'bold'
                                            }}>Værdigevinst total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            filteredData.map((entry: NSVBEntry) => (
                                                <TableRow key={entry.id}>
                                                    <TableCell component="th"
                                                               scope="row">{entry.domain}
                                                    </TableCell>
                                                    <TableCell>{entry.age}</TableCell>
                                                    <TableCell>{entry.sex}</TableCell>
                                                    <TableCell>{entry.education}</TableCell>
                                                    <TableCell align={"right"}>{entry.wellbeingCoefficient}</TableCell>
                                                    <TableCell align={"right"}>{entry.pValue}</TableCell>
                                                    <TableCell align={"right"}>{entry.n}</TableCell>
                                                    <TableCell align={"right"}>{entry.valueGainPerson}</TableCell>
                                                    <TableCell align={"right"}>{entry.valueGainGroup}</TableCell>
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