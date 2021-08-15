import React from 'react';
import gradient from '../assets/gradients/main-top-gradient.png';
import {Box, Container} from "@material-ui/core";


function AboutPage() {
    return (
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
            <Container>
                <p style={{fontWeight: 'bold', fontSize: 34, marginTop: 0, marginBottom: 16}}>
                    The Project
                </p>
            </Container>
        </Box>
    );
}

export default AboutPage;
