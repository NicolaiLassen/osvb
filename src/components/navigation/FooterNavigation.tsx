import React from "react";
import {Box, Container} from "@material-ui/core";
import TextIconWrapper from "../icons/TextIconWrapper";
import hri from '../../assets/partners/hri.png'
import is from '../../assets/partners/is.png'

export const FooterNavigation = () => {
    const d = new Date();
    const n = d.getFullYear();

    return (
        <Box style={{background: '#F5F9FF', flexShrink: 0}}>
            <Container>
                <Box
                    pt={2}
                    pb={2}
                >
                    <TextIconWrapper style={{fontSize: 20}}>
                        NSVB
                    </TextIconWrapper>
                    <Box pt={2} pb={1.5} display='flex' flexWrap='wrap' alignItems='center' justifyContent='center'>
                        <span
                            style={{fontSize: 13, paddingBottom: 4, paddingTop: 4, paddingLeft: 8, paddingRight: 8}}>powered by</span>
                        <a style={{paddingBottom: 4, paddingTop: 4}} href='https://www.happinessresearchinstitute.com/'
                           target='_blank'
                           rel="noreferrer">
                            <img style={{maxWidth: 130}} src={hri} alt={'Happiness Research Institute'}/>
                        </a>
                        <a style={{paddingLeft: 16, paddingBottom: 4, paddingTop: 4, paddingRight: 16}}
                           href='https://www.innosocial.dk/' target='_blank' rel="noreferrer">
                            <img style={{maxWidth: 130}} src={is} alt={'Happiness Research Institute'}/>
                        </a>
                    </Box>
                    <Box display='flex'>
                        <div style={{fontSize: 13}}>
                            © {n} NSVB
                        </div>
                        <Box flex={1}/>
                        <div style={{fontWeight: 500, fontSize: 13}}>
                            alpha 0.0.1
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}