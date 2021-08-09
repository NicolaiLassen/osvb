import React from 'react';
import gradient from "../assets/sec-top-gradient.png";
import {Box, Container} from "@material-ui/core";

function ResearchPage() {
    return (

        <Box display='flex' alignItems='center'
             style={{
                 height: 400,
                 background: '#F5F9FF',
                 backgroundImage: `url(${gradient})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
             }}>
            <Container>
                <p style={{fontWeight: 'bold', fontSize: 34, marginTop: 0, marginBottom: 16}}>
                    Socioeconomics Research
                </p>
            </Container>
        </Box>
    );
}

export default ResearchPage;
