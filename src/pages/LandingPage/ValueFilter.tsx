import React from "react";
import {Chip, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {age, domain, education, sex} from "../../services/nsvbLogic";


interface ValueFilterProps {
    search: any;
    setSearch: (search: any) => void;
}

export const ValueFilter: React.FC<ValueFilterProps> = ({search, setSearch}) => {

    return (
        <div>

            <Autocomplete
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
                    variant='outlined'
                    InputProps={{...params.InputProps, disableUnderline: true}}
                />
                }
            />

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
                    InputProps={{...params.InputProps, disableUnderline: true}}
                />
                }
            />

            <Autocomplete
                freeSolo
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
                    InputProps={{...params.InputProps, disableUnderline: true}}
                />
                }
            />

            <Autocomplete
                freeSolo
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
        </div>
    )
}

export default ValueFilter