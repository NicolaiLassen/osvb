export const ID: string[] = []

export interface NSVBSearch {
    theme: string | undefined;
    sex: string[] | undefined;
    age: string[] | undefined;
    education: string[] | undefined;
    wellbeingCoefficient: number[] | undefined;
}

export const emptyNSVBSearch: NSVBSearch = {
    theme: undefined,
    sex: [],
    age: [],
    education: [],
    wellbeingCoefficient: []
}

export interface CategoricSelect {
    type: string;
    value: string;
}

export const theme = [
    {type: 'theme', value: 'Loneliness'}
];

export const age = [
    {type: 'age', value: '16 to 24'},
    {type: 'age', value: '25 to 34'},
    {type: 'age', value: '35 to 44'},
    {type: 'age', value: '45 to 54'},
    {type: 'age', value: '55 to 64'},
    {type: 'age', value: '65 to 74'},
    {type: 'age', value: '75 og derover'},
]

export const education = [
    {type: 'education', value: 'Grundskole'},
    {type: 'education', value: 'Lang videregående uddannelse',},
    {type: 'education', value: 'Kort videregående uddannelse'},
    {type: 'education', value: 'Erhvervsfaglig uddannelse'},
    {type: 'education', value: 'Gymnasiel uddannelse'},
    {type: 'education', value: 'Gymnasiel uddannelse'},
    {type: 'education', value: 'Under uddannelse'},
]

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
    pointGain: string;
    pointLoss: string;
}


