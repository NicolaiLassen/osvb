import React from "react";
import {Box, Paper} from "@material-ui/core";

const CookieBanner = () => {
    return (
        <Paper elevation={2}
               style={{position: 'fixed', width: 200, bottom: 16, right: 16}}>
            <Box p={1} style={{fontSize: 12, fontWeight: 'bold', background: '#f5f9ff'}}>
                Demo product <span style={{fontWeight: 400,fontSize: 10}}>0.0.1</span>
            </Box>
            <Box p={1} style={{fontSize: 12}}>
                This product is a demo not meant to be used in production.
            </Box>
        </Paper>
    )
}

export default CookieBanner;