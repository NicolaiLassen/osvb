import React from "react";
import {Box} from "@material-ui/core";

export const ErrorPage = () => {

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            style={{width: '100vw', height: '100%'}}>
            Not found
        </Box>
    )
}

export default ErrorPage;