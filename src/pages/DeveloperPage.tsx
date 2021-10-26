import React from 'react';
import FloatContainer from "../components/containers/FloatContainer";
import {Box, Container, Grid} from "@material-ui/core";
import LifebuoyLineIcon from 'remixicon-react/LifebuoyLineIcon';
import KeyLineIcon from 'remixicon-react/KeyLineIcon';
import FileList3LineIcon from "remixicon-react/FileList3LineIcon";
import Slideshow3LineIcon from "remixicon-react/Slideshow3LineIcon";
import gradient from "../assets/gradients/main-top-gradient.png";

const linkCards = [
    {
        icon: KeyLineIcon,
        title: 'API nøgle',
        subTitle: 'Forespørg API nøgle'
    },
    {
        icon: FileList3LineIcon,
        title: 'Dokumentation',
        subTitle: 'Oversigt over API tilgange'
    },
    {
        icon: Slideshow3LineIcon,
        title: 'Eksempler',
        subTitle: 'Se hvordan databasen kan benyttes'
    },
    {
        icon: LifebuoyLineIcon,
        title: 'Support',
        subTitle: 'Få hjælp til opsættelsen'
    },
]

function DeveloperPage() {
    return (
        <div>
            <Box display='flex' alignItems='center' style={{
                height: 400,
                background: '#F5F9FF',
                backgroundImage: `url(${gradient})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <Container>
                    <p style={{color: '#273A6B', fontWeight: 'bold', fontSize: 34}}>
                        Åben integration
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{transform: 'translateY(-80px)'}}>
                    <Grid container spacing={2}>
                        {linkCards.map((card) =>
                            <Grid item md={6} sm={12} xs={12}>
                                <FloatContainer>
                                    <Box p={4}
                                         display='flex'
                                         alignItems='center'
                                         position='relative'
                                         overflow='hidden'
                                         borderRadius={16}
                                    >
                                        <Box
                                            ml={2}
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='center'
                                            borderRadius='100%'
                                            zIndex={2}
                                            style={{background: '#63A3EE', height: 45, width: 45}}>
                                            <card.icon color="#f5f9ff" size={22}/>
                                        </Box>
                                        <Box
                                            display='flex'
                                            flexDirection='column'
                                            ml={4}>
                                            <span style={{fontWeight: 500, marginBottom: 8}}>{card.title}</span>
                                            <span style={{fontWeight: 400, fontSize: 14, color: "gray"}}>
                                                {card.subTitle}
                                        </span>
                                        </Box>
                                        <Box
                                            mb={2}
                                            position='absolute'
                                            left={-50}
                                            bottom={-100}
                                            borderRadius={16}
                                            style={{
                                                background: '#cee3fb',
                                                height: 150,
                                                width: 150,
                                                transform: 'rotate(-30deg)'
                                            }}/>
                                    </Box>
                                </FloatContainer>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default DeveloperPage;
