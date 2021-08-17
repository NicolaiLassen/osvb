import {fakeDB} from "./fakeDB";

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
    "Svær ensomhed ",
    "Langvarig mental sygdom ",
    "Arbejdsløshed ",
    "Begrænset i at gennemføre daglige gøremål ",
    "Kortvarig mental sygdom ",
    "Kronisk smerte og ubehag ",
    "Problemer med personlig pleje ",
    "Begrænset fysisk mobilitet "
]

export const age = [
    "Gennemsnit",
    "45-54",
    "55-64",
    "65-74",
    "35-44",
    "75+",
    "16-24",
    "25-34"
]

export const education = [
    "Gennemsnit",
    "Erhvervsfaglig uddannelse",
    "Grundskole",
    "Mellemlang videregående uddannelse",
    "Under uddannelse",
    "Kort videregående uddannelse",
    "Lang videregående uddannelse",
    "Gymnasiel uddannelse"
]

export const sex = [
    "Gennemsnit",
    "Kvinde",
    "Mand"
]

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

// SOME CLEANING LOGIC

// // @ts-ignore
// function sortJson(element, prop, propType, asc) {
//     switch (propType) {
//         case "int":
//             // @ts-ignore
//             element = element.sort(function (a, b) {
//                 if (asc) {
//                     return (parseInt(a[prop]) > parseInt(b[prop])) ? 1 : ((parseInt(a[prop]) < parseInt(b[prop])) ? -1 : 0);
//                 } else {
//                     return (parseInt(b[prop]) > parseInt(a[prop])) ? 1 : ((parseInt(b[prop]) < parseInt(a[prop])) ? -1 : 0);
//                 }
//             });
//             break;
//         default:
//             // @ts-ignore
//             element = element.sort(function (a, b) {
//                 if (asc) {
//                     return (a[prop].toLowerCase() > b[prop].toLowerCase()) ? 1 : ((a[prop].toLowerCase() < b[prop].toLowerCase()) ? -1 : 0);
//                 } else {
//                     return (b[prop].toLowerCase() > a[prop].toLowerCase()) ? 1 : ((b[prop].toLowerCase() < a[prop].toLowerCase()) ? -1 : 0);
//                 }
//             });
//     }
// }
//
// sortJson(fakeDB, 'domain', 'string', true)
// console.log(fakeDB)

// const t = fakeDB.map((entry: NSVBEntry) => {
//     return (entry.education)
// });
//
// // @ts-ignore
// function uniq(a) {
//     var seen = {};
//     // @ts-ignore
//     return a.filter(function(item) {
//         // @ts-ignore
//         return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//     });
// }
//
// console.log([...uniq(t)])

// console.log(fakeDB.map((entry: NSVBEntry) => {
//     return ({
//         ...entry, 'domain': entry.domain.replace('(dummy)', '')
//             .replace('(Dummy)', '')
//             .replace('(1 point)', '')
//     })
// }))
