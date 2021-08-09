export const ID: string[] = []

export interface NSVBSearch {
    theme: string | undefined;
    sex: string | undefined;
    age: string | undefined;
    education: string | undefined;
    wellbeingCoefficient: number | undefined;
}

export const emptyNSVBSearch: NSVBSearch = {
    theme: undefined,
    sex: undefined,
    age: undefined,
    education: undefined,
    wellbeingCoefficient: undefined
}

export interface CategoricSelect {
    type: string;
    value: string;
}

export const theme = [
    {type: 'theme', value: 'Loneliness'}
];

export const sex = [
    {type: 'sex', value: 'Male'},
    {type: 'sex', value: 'Female'},
    {type: 'sex', value: 'Both'}
];

export interface NSVBEntry {
    id: string;
    age: string;
    sex: string;
    education: string;
    wellbeingCoefficient: number;

}


