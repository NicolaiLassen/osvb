import React, {useState} from "react";
import {Box, Container} from "@material-ui/core";
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


export interface PanelElement {
    id: string;
    name: string;
    count: number;
    successRate: number;
    socialValue: number;
}

export const defaultPanelElement: PanelElement = {
    id: '' + randomInt(),
    name: '',
    count: 0,
    successRate: 1,
    socialValue: 0,
}


export const PanelPage = () => {

    const [submitButtonRef] = useSubmitButtonRef();
    const [editElement, setEditElement] = useState<PanelElement | undefined>();
    const [elements, setElements] = useState<PanelElement[]>([]);



    return (
        <Box pt={2} pb={2}>
            <CrudDialog<PanelElement>
                element={editElement}
                onCancel={() => setEditElement(undefined)}
                submitButtonRef={submitButtonRef}
            >
                <Formik<PanelElement>
                    onSubmit={(element) => {
                        setEditElement(undefined);
                        setElements([...elements, element]);
                    }}
                    initialValues={defaultPanelElement}
                    enableReinitialize={true}
                >
                    {() => (
                        <Form>
                            <button
                                aria-label="submit"
                                type="submit"
                                style={{display: 'none'}}
                                ref={submitButtonRef}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="name"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="count"
                                        label="Count"
                                        type="number"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="successRate"
                                        label="Success Rate"
                                        type="number"
                                        fullWidth
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="socialValue"
                                        label="Social value"
                                        type="number"
                                        fullWidth
                                    />
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
                            id: "name",
                            label: 'Name',
                        }, {
                            id: "count",
                            label: 'Count',
                            numeric: true,
                        }, {
                            id: "successRate",
                            label: 'Success Rate',
                            numeric: true,
                            percent: true,
                        }, {
                            id: "socialValue",
                            label: 'Social value',
                            numeric: true,
                        }, {
                            id: "id",
                            label: 'Estimat',
                            numeric: true,
                            render: (e) => formatNumber(e.count * e.successRate * e.socialValue) + ' DKK'
                        }, {
                            id: "id",
                            label: '',
                            numeric: true,
                            render: (e) => <IconButton onClick={() => {
                                setElements(elements.filter((e1) => e1.name === e.name))
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
                            {Array.from({length: 3}).map(() => <TableCell/>)}
                            <TableCell align={"right"} style={{fontWeight: 600}}>
                                {formatNumber(elements.reduce((r, e) => r + (e.count * e.successRate * e.socialValue), 0))}
                            </TableCell>
                        </TableRow>
                    </BaseTable>

                </PaperContainer>
            </Container>
        </Box>
    )
}

export default PanelPage;