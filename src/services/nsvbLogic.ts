export const ID: string[] = []

export interface NSVBSearch {
    domain: string[];
    sex: string[];
    age: string[];
    education: string[];
    wellbeingCoefficient: number[];
}

export const emptyNSVBSearch: NSVBSearch = {
    domain: [],
    sex: [],
    age: [],
    education: [],
    wellbeingCoefficient: []
}


export const medianIncome = 253100;
export const incomeCoefficientLog = 196;
export const monetaryValue1Point = 12913265;
export const population = 5843347;


export const domain = [
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
    domain: string;
    age: string;
    sex: string;
    education: string;
    wellbeingCoefficient: number;
    pValue: number;
    n: number;
    valueGainPerson: string;
    valueGainGroup: string;
}


