import React from "react";
import {Box, Chip, Grid, IconButton, Popover, TextField, Tooltip} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {age, domain, education, sex} from "../../services/nsvbLogic";
import FileExcelLineIcon from "remixicon-react/FileExcelLineIcon";
import {CSVLink} from "react-csv";
import ScalesLineIcon from "remixicon-react/ScalesLineIcon";

interface ValueFilterProps {
    data: any;
    search: any;
    setSearch: (search: any) => void;
}

export const ValueFilter: React.FC<ValueFilterProps> = ({data, search, setSearch}) => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    /*
    TODO:
    Mobile filter should be a button you can open and close.
    Chips should not appear inside the selector but together in a row
    */
    return (
        <Grid container alignItems='center' spacing={2}>
            <Grid item xs={12} md={3}>
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
                        variant='outlined'
                    />
                    }
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <Autocomplete
                    multiple
                    value={search.education}
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
                        variant='outlined'
                        InputProps={{...params.InputProps}}
                    />
                    }
                />
            </Grid>
            <Grid item xs={12} md={2}>
                <Tooltip title='Assumptions'>
                    <IconButton onClick={handleClick}
                                style={{marginRight: 8, boxShadow: 'inset 0 0 0 1px #273A6B'}}>
                        <ScalesLineIcon color='#273A6B' size={20}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Export csv'>
                    <CSVLink
                        data={data}
                        filename={"nsvb.csv"}
                        separator={";"}
                    >
                        <IconButton style={{boxShadow: 'inset 0 0 0 1px #273A6B'}}>
                            <FileExcelLineIcon color='#273A6B' size={20}/>
                        </IconButton>
                    </CSVLink>
                </Tooltip>
            </Grid>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box p={2} style={{background: 'rgb(245, 249, 255)', fontWeight: 500}}>
                    Assumptions
                </Box>
                <Box p={2}>
                    <div>
                        Medianindkomst: <span style={{fontWeight: 500}}>253.100</span>
                    </div>
                    <div>
                        Indkomstkoefficient (log): <span style={{fontWeight: 500}}>1.96</span>
                    </div>
                    <div>
                        Monetær værdi af 1 point på LS: <span style={{fontWeight: 500}}>129.132.65</span>
                    </div>
                    <div>
                        Befolkningstal (DK): <span style={{fontWeight: 500}}>5.843.347</span>
                    </div>
                </Box>
            </Popover>
        </Grid>
    )
}

export default ValueFilter