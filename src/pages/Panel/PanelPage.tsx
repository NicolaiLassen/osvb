import React, {useEffect, useState} from "react";
import {Box, Container, Divider, Paper} from "@material-ui/core";
import BaseTable from "../../components/tables/BaseTable";
import formatNumber from "../../lib/string/formatNumber";
import PaperContainer from "../../components/containers/PaperContainer";
import AddLineIcon from "remixicon-react/AddLineIcon";
import ColoredIconButton from "../../components/buttons/ColoredIconButton";
import CrudDialog from "../../components/dialogs/CrudDialog";
import {Field, Form, Formik} from "formik";
import {randomInt} from "../../lib/math/rand";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useSubmitButtonRef from "../../hooks/useSubmitButtonRef";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import {emptyNSVBSearch, NSVBEntry, NSVBSearch} from "../../services/nsvbLogic";
import {fakeDB} from "../../services/fakeDB";
import ValueFilter from "../LandingPage/ValueFilter";


export interface PanelElement {
    id: string;
    name: string;
    domain: string;
    sampleSize: number;
    successRate: number;
    socialValue: number;
}

export const defaultPanelElement: PanelElement = {
    id: '' + randomInt(),
    name: '',
    domain: '',
    sampleSize: 0,
    successRate: 0,
    socialValue: 0,
}

export const PanelPage = () => {
    const [submitButtonRef] = useSubmitButtonRef();
    const [editElement, setEditElement] = useState<PanelElement | undefined>();
    const [elements, setElements] = useState<PanelElement[]>([]);

    const [search, setSearch] = useState<NSVBSearch>(emptyNSVBSearch);

    // virtuallizer
    const [filteredData, setFilteredData] = useState<NSVBEntry[]>(fakeDB.slice(0, 20))

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
        setFilteredData(newFilteredData.slice(0, 20));
    }, [search])

    return (
        <Box pt={2} pb={2}>
            <CrudDialog<PanelElement>
                element={editElement}
                maxWidth='lg'
                onCancel={() => setEditElement(undefined)}
                submitButtonRef={submitButtonRef}
            >
                <ValueFilter search={search} setSearch={setSearch} data={filteredData}/>

                <Formik<PanelElement>
                    onSubmit={(element: PanelElement) => {
                        setEditElement(undefined);
                        setElements([...elements, element]);
                    }}
                    initialValues={defaultPanelElement}
                    enableReinitialize={true}
                >
                    {({setFieldValue, values}) => (
                        <Form>
                            <Box mt={1} mb={3} maxHeight={250}
                                 style={{background: '#f5f9ff', borderRadius: 8, overflow: 'hidden'}}>
                                <Box p={1}
                                     display='flex'
                                     flexWrap='wrap'
                                     maxHeight={250} style={{overflowY: 'auto', overflowX: 'auto'}}>
                                    {
                                        filteredData.map((entry: NSVBEntry, index) => {
                                            const string2number = entry.valueGainPerson
                                                .replaceAll(".", "")
                                                .replaceAll(",", ".")
                                                .replaceAll(" ", "")
                                                .replaceAll("kr.", "")
                                            const value: number = Math.round(parseInt(string2number))
                                            return (
                                                <Box minWidth={'24%'} pb={1} pr={1} key={entry.id}>
                                                    <Paper
                                                        style={{
                                                            cursor: 'pointer',
                                                            border: 'solid 1px ' + (values.socialValue === value ? '#3f51b5' : 'white')
                                                        }}
                                                        onClick={() => {
                                                            setFieldValue('domain', entry.domain)
                                                            setFieldValue('socialValue', value)
                                                        }}>
                                                        <Box p={1} alignItems='center' justifyContent='space-between'
                                                             display='flex'>
                                                            <Box mr={1}>
                                                                Domain
                                                            </Box>
                                                            <Box style={{fontSize: 14}}>
                                                                {entry.domain}
                                                            </Box>
                                                        </Box>
                                                        <Divider/>
                                                        <Box p={1} alignItems='center' justifyContent='space-between'
                                                             display='flex'>
                                                            <Box mr={1}>
                                                                Age
                                                            </Box>
                                                            <Box style={{fontSize: 14}}>
                                                                {entry.age}
                                                            </Box>
                                                        </Box>
                                                        <Divider/>
                                                        <Box p={1} alignItems='center' justifyContent='space-between'
                                                             display='flex'>
                                                            <Box mr={1}>
                                                                Education
                                                            </Box>
                                                            <Box style={{fontSize: 14}}>
                                                                {entry.education}
                                                            </Box>
                                                        </Box>
                                                        <Divider/>
                                                        <Box p={1} alignItems='center' justifyContent='space-between'
                                                             display='flex'>
                                                            <Box mr={1}>
                                                                Sex
                                                            </Box>
                                                            <Box style={{fontSize: 14}}>
                                                                {entry.sex}
                                                            </Box>
                                                        </Box>
                                                        <Divider/>
                                                        <Box p={1} alignItems='center' justifyContent='space-between'
                                                             display='flex'>
                                                            <Box mr={1}>
                                                                Value gain
                                                            </Box>
                                                            <Box style={{fontSize: 14}}>
                                                                {entry.valueGainPerson}
                                                            </Box>
                                                        </Box>
                                                    </Paper>
                                                </Box>
                                            )
                                        })}
                                </Box>
                            </Box>
                            <button
                                aria-label="submit"
                                type="submit"
                                style={{display: 'none'}}
                                ref={submitButtonRef}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="sampleSize"
                                        label="Sample Size"
                                        type="number"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="successRate"
                                        label="Success Rate"
                                        type="number"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />

                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Box style={{fontWeight: 'bold'}}>
                                        Estimate
                                    </Box>
                                    <Box>
                                        {formatNumber(Math.round(values.sampleSize * values.successRate * values.socialValue))} kr.
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>

            </CrudDialog>

            <Container>
                <PaperContainer
                    title={'Panel'}
                    padding={0}
                    action={<ColoredIconButton
                        onClick={() => setEditElement(defaultPanelElement)}>
                        <AddLineIcon color="white"/>
                    </ColoredIconButton>}
                >
                    <BaseTable<PanelElement>
                        heads={[{
                            id: "domain",
                            label: 'Domain',
                        }, {
                            id: "sampleSize",
                            label: 'Sample size',
                            numeric: true,
                        }, {
                            id: "successRate",
                            label: 'Success rate',
                            numeric: true,
                            percent: true,
                        }, {
                            id: "socialValue",
                            label: 'Social value',
                            numeric: true,
                            render: (e) => formatNumber(e.socialValue) + ' kr.'
                        }, {
                            id: "id",
                            label: 'Estimat',
                            numeric: true,
                            render: (e) => formatNumber(e.sampleSize * e.successRate * e.socialValue) + ' DKK'
                        }, {
                            id: "id",
                            label: '',
                            numeric: true,
                            disablePadding: true,
                            render: (e) => <IconButton onClick={() => {
                                setElements(elements.filter((e1) => e1.domain !== e.domain))
                            }}>
                                <CloseFillIcon/>
                            </IconButton>
                        }]}
                        elements={elements}
                    >
                        <TableRow>
                            <TableCell align={"left"} style={{fontWeight: 600}}>
                                TOTAL
                            </TableCell>
                            {Array.from({length: 3}).map((_, index) => <TableCell key={index}/>)}
                            <TableCell align={"right"} style={{fontWeight: 600}}>
                                {formatNumber(Math.round(elements.reduce((r, e) => r + (e.sampleSize * e.successRate * e.socialValue), 0))) + ' DKK'}
                            </TableCell>
                            <TableCell/>
                        </TableRow>
                    </BaseTable>
                </PaperContainer>
            </Container>
        </Box>
    )
}

export default PanelPage;