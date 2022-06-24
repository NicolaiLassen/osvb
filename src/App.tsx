import React from 'react';
import {ThemeProvider, Typography} from "@mui/material";
import appTheme from "./theme/appTheme";
import styled from "styled-components";

const PageWrapper = styled.div`
    flex: 1 0 auto;
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <PageWrapper>
                <Typography variant='h1' sx={(theme) => ({
                    textAlign: 'center',
                    fontWeight: 400,
                    fontSize: 45,
                    margin: 0,
                    padding: 1,
                    [theme.breakpoints.down("sm")]: {
                        fontSize: 32,
                    }
                })}>
                    Open Social Value Bank
                </Typography>
            </PageWrapper>
        </ThemeProvider>
    );
}

export default App;
