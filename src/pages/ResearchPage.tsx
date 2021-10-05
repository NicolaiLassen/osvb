import React from 'react';
import gradient from '../assets/gradients/main-top-gradient.png';
import {Box, Container, Grid} from "@material-ui/core";
import nordic from "../assets/articles/1589849-PREVIEW01.jpg"
import waly from "../assets/articles/waly.webp"
import cba from "../assets/articles/CBA.jpg"
import greenBookG from "../assets/articles/green_book_g.jpg"
import wellbeing from "../assets/articles/wellbeing.jpg"
import handbook from "../assets/articles/handbook.jpg"
import tools from "../assets/articles/tools.jpg"
import ArticleCard from "../components/cards/ArticleCard";

function ResearchPage() {
    return (
        <div>
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
                        Socioøkonomisk forskning
                    </p>
                </Container>
            </Box>
            <Container>
                <div style={{transform: 'translateY(-80px)'}}>
                    <Grid container spacing={3}>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://www.norden.org/en/publication/towards-nordic-wellbeing-economy'
                                img={nordic}
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://www.happinessresearchinstitute.com/waly'
                                img={waly}
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1005388/Wellbeing_guidance_for_appraisal_-_supplementary_Green_Book_guidance.pdf'
                                img={greenBookG}
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1005389/Wellbeing_guidance_for_appraisal_-_background_paper_reviewing_methods_and_approaches.pdf'
                                img={wellbeing}
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://www.treasury.govt.nz/information-and-services/state-sector-leadership/investment-management/plan-investment-choices/cost-benefit-analysis-including-public-sector-discount-rates/treasurys-cbax-tool'
                                img={tools}
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://www.treasury.govt.nz/sites/default/files/2018-09/nzier-cbax-report.pdf'
                                img={cba}
                            />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ArticleCard
                                href='https://global.oup.com/academic/product/a-handbook-for-wellbeing-policy-making-9780192896803?cc=us&lang=en&'
                                img={handbook}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default ResearchPage;
