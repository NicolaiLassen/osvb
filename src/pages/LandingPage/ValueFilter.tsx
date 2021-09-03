import React from "react";
import {Chip, Grid, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {age, domain, education, sex} from "../../services/nsvbLogic";

interface ValueFilterProps {
    data: any;
    search: any;
    setSearch: (search: any) => void;
}

export const ValueFilter: React.FC<ValueFilterProps> = ({data, search, setSearch}) => {
    /*
    TODO:
    Mobile filter should be a button you can open and close.
    Chips should not appear inside the selector but together in a row
    */
    return (
        <Grid container alignItems='center' spacing={2}>
            <Grid item xs={12} md={4}>
                <Autocomplete
                    multiple
                    value={search.domain}
                    onChange={(event, newValue: string[]) => {
                        setSearch({...search, domain: newValue});
                    }}
                    fullWidth
                    disableClearable
                    options={domain}
                    getOptionLabel={(option: string) => option}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({index})}
                            />
                        ))
                    }
                    renderInput={(params: any) => <TextField
                        {...params}
                        label="Domæne"
                        size='small'
                        variant='outlined'
                    />
                    }
                />
            </Grid>

            <Grid item xs={12} md={2}>
                <Autocomplete
                    multiple
                    value={search.age}
                    onChange={(event, newValue: string[]) => {
                        setSearch({...search, age: newValue});
                    }}
                    disableClearable
                    options={age}
                    getOptionLabel={(option: string) => option}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({index})}
                            />
                        ))
                    }
                    renderInput={(params: any) => <TextField
                        {...params}
                        label="Alder"
                        size='small'
                        variant='outlined'
                    />
                    }
                />
            </Grid>

            <Grid item xs={12} md={2}>
                <Autocomplete
                    multiple
                    value={search.sex}
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
                                label={option}
                                size="small"
                                {...getTagProps({index})}
                            />
                        ))
                    }
                    renderInput={(params: any) => <TextField
                        {...params}
                        label="Køn"
                        size='small'
                        fullWidth
                        variant='outlined'
                    />
                    }
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <Autocomplete
                    multiple
                    value={search.education}
                    onChange={(event, newValue: string[]) => {
                        setSearch({...search, education: newValue});
                    }}
                    disableClearable
                    options={education}
                    getOptionLabel={(option: string) => option}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({index})}
                            />
                        ))
                    }
                    renderInput={(params: any) => <TextField
                        {...params}
                        label="Uddannelse"
                        size='small'
                        variant='outlined'
                        InputProps={{...params.InputProps}}
                    />
                    }
                />
            </Grid>
        </Grid>
    )
}

export default ValueFilter