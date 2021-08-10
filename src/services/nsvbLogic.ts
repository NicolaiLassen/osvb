export const ID: string[] = []

export interface NSVBSearch {
    theme: string | undefined;
    sex: string[];
    age: string[];
    education: string[];
    wellbeingCoefficient: number[];
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
    'Ensomhed'
];

export const age = [
    '16 to 24',
    '25 to 34',
    '35 to 44',
    '45 to 54',
    '55 to 64',
    '65 to 74',
    '75 og derover'
]

export const education = [
    'Grundskole',
    'Lang videregående uddannelse',
    'Kort videregående uddannelse',
    'Erhvervsfaglig uddannelse',
    'Gymnasiel uddannelse',
    'Under uddannelse'
]

export const sex = [
    'Kvinde',
    'Mand',
    'Both'
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


