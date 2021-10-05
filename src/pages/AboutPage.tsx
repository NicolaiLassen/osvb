import React from 'react';
import gradient from '../assets/gradients/main-top-gradient.png';
import {Box, Container, Paper} from "@material-ui/core";


function AboutPage() {
    return (
        <div>

            <Box
                display='flex'
                alignItems='center'
                style={{
                    background: '#E7F1F7',
                    height: 400,
                    backgroundImage: `url(${gradient})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <Container maxWidth='md'>
                    <p style={{fontWeight: 'bold', fontSize: 34, marginTop: 0, textAlign: 'center', marginBottom: 16}}>
                        Nordic Social Value Bank
                    </p>
                </Container>
            </Box>
            <Container maxWidth='md'>
                <div style={{transform: 'translateY(-130px)'}}>
                    <Paper>
                        <Box pr={4} pl={4} pt={2} pb={2}>
                            <p>
                                <b>Formål</b>
                            </p>
                            <p>
                                Formålet med Nordic Social Value Bank (NSVB) er at fremme brug af og dialog om sociale
                                værdier i
                                Norden samt at gøre værdier, metode, data og værktøjer tilgængelige og åbne for
                                interesserede i
                                social værdisætning, samt at udvikle og drive en nordisk social value bank.
                            </p>
                            <p>
                                <b>Udfordringen</b>
                            </p>
                            <p>
                                Hvad er værdien af at hjælpe en person ud af svær ensomhed? Hvad koster det, når
                                vi er stressede på job? Og hvad er det for en pris der betales, når et barn mobbes i
                                folkeskolen?
                            </p>
                            <p>
                                For at besvare disse spørgsmål, vil man typisk forholde sig til budgetøkonomiske
                                effekter: Hjælper vi én person ud af ensomhed, vil vi kunne øge beskæftigelsen;
                                reducerer vi stress på arbejdspladsen, vil vi kunne begrænse sygefraværet; og mindsker
                                vi mobning i folkeskolen, vil vi kunne undgå en kaskade af følgevirkninger og
                                budgetøkonomiske omkostninger over et menneskeliv. Men prisen for ensomhed, stress og
                                mobning, kan ikke kun måles på de offentlige budgetter og på virksomhedens bundlinje.
                                Disse problemer har også en “<i>menneskelig pris</i>” for de direkte berørte personer og deres
                                nære.
                            </p>
                            <p>
                                I den velfærdsøkonomisk teori refereres der til ‘sociale værdier’, når man måler på
                                menneskelige tab/gevinster, og som hovedregel beregnes disse via mål for livskvalitet
                                eller “<i>nytte</i>”. I Danmark er sociale værdier allerede en fast og central del af
                                beslutningstagninger på både miljø-, klima- trafik- og medicinområdet, men for problemer
                                som ensomhed, stress, mistrivsel, mobning etc. eksisterer der ikke pålidelige og
                                anvendelige sociale værdier.
                            </p>
                            <p>
                                Når der ikke anvendes sociale værdier på social- og trivselsområdet, har det betydelige
                                konsekvenser for den velfærd der leveres i Danmark fra både offentlig og private
                                organisationer. Uden sociale værdier har private og offentlige beslutningstagere således
                                et ufuldstændigt informationsgrundlag, når de skal vurdere, om en given investering vil
                                skabe tilstrækkelig værdi (relativt til alternative projekter) samt når der skal træffes
                                beslutninger om ressource-allokering. Dertil, og måske endnu vigtigere, bevirker
                                fraværet af sociale værdier, at investorer samt velfærdsleverandører og private
                                virksomheder har begrænsede muligheder for at dokumentere effekten og
                                eksistensberettigelsen af deres eksisterende indsatser. Disse “<i>blinde vinkler”</i> gør at vi
                                i dag opererer med en væsentlig risiko for at de bedste løsningsbud fravælges eller
                                ignoreres, samt at eksisterende indsatser, som i realiteten skaber stor værdi, ikke kan
                                dokumentere effekten, og, i yderste instans, derfor må afsluttes.
                            </p>
                            <p>
                                Indtil for nyligt har udregningen og brugen af sociale værdier for problemer som
                                ensomhed og stress været et ubetrådt territorium globalt set. En modning af
                                forskningsfeltet “<i>wellbeing economics</i>” over de seneste to årtier, har dog bidraget til,
                                at nye metoder for social værdisættelse i dag anerkendes og tages i brug på trivsels og
                                socialområdet. De seneste år har Finansministerierne i New Zealand og Storbritannien fx
                                adopteret metoden “<i>Subjective wellbeing valuation</i>” til at værdisætte sociale og
                                menneskelige udfordringer, herunder ensomhed, med det formål, at embedsværket kan
                                inkludere disse værdier i deres konsekvensanalyser og evalueringer af indsatser. Denne
                                praksis er gjort mulig via nationale “<i>sociale værdibanker</i>”, som tillader
                                beslutningstagere let at lokalisere relevante sociale værdier og implementere dem i
                                beslutnings- og konsekvensanalyser.
                            </p>
                            <p>
                                Efter britisk og newzealandsk forbillede, er NSVB et tilsvarende nordisk værktøj.
                            </p>
                            <p>

                                NSVB må anvendes af private og offentlige aktører, herunder fonde, NGO’er, ministerier,
                                kommuner samt erhvervsliv mv. til at dokumentere og kommunikere den forventede eller
                                realiserede sociale værdi af forebyggelse, et socialt projekt, en indsats eller en
                                policy.
                            </p>
                            <p>
                                <b>Livstilfredshedsmålet som social værdi</b>
                            </p>
                            <p>
                                En social værdi skal reflektere en subjektiv nytteværdi, og til det formål findes der i
                                dag stigende konsensus om, at ‘livstilfredshed’ (en 0-10 skala) er det mest egnede og
                                valide mål - i hvert fald til værdisættelse af sociale og trivselsorienterede
                                interventioner og effekter. I dag anbefaler flere organisationer, herunder OECD og FN,
                                livstilfredshed som et vigtigt måleparameter for samfundets fremskridt på linje med mål
                                for middellevetid og økonomi, og i de newzealandske og britiske finansministerier, er
                                det netop livstilfredshedsmålet som anvendes til sociale værdisættelser via den såkaldte
                                subjective wellbeing valuation-metode.
                            </p>
                            <p>
                                Formålet med subjective wellbeing valuation-metoden er at udregne enhver
                                interventions-effekt ud fra dens potentielle eller realiserede påvirkning på deltagernes
                                livstilfredshed. Des mere en intervention kan øge målgruppens livstilfredshed des højere
                                social værdi skabes.
                            </p>
                            <p>
                                Sociale værdier har historisk været udtrykt monetært (i danske kroner og ører) for
                                lettere at kunne tilpasses og benyttes i de offentlige regnemodeller. Dette er også
                                praksis med subjective wellbeing valuation-metoden, og er muliggjort, fordi der
                                eksisterer en videnskabeligt veldokumenteret kausal effekt fra indkomst på
                                livstilfredshed. Helt konkret har en række studier, på tværs af geografi, socio-økonomi,
                                kultur og demografi, vist, at vores livstilfredshed øges når vores indkomst øges, men at
                                der dog eksisterer en aftagende marginalnytte (1000 kr. betyder mere for
                                livstilfredsheden for en person med lav indkomst end en person med høj indkomst). Vi ved
                                endvidere fra forskningen hvordan livstilfredshed påvirkes af tilstande som ensomhed,
                                mistrivsel og stress, og endda mere konkret hvordan selv små ændringer på f.eks.
                                ensomhedsskaler såsom UCLA skalaen eller stress målt på PSS-scoren påvirker
                                livstilfredshed.
                            </p>
                        </Box>
                    </Paper>
                </div>
            </Container>
        </div>
    );
}

export default AboutPage;
