import React, {useState} from "react";
import {Box, IconButton, Paper} from "@material-ui/core";
import CloseFillIcon from "remixicon-react/CloseFillIcon";

const CookieBanner = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show &&
            <Paper elevation={2}
                   style={{position: 'fixed', width: 200, bottom: 16, right: 16}}>
                <Box p={1} display='flex' justifyContent='space-between'
                     style={{fontSize: 14, fontWeight: 'bold', background: '#f5f9ff'}}>
                    <div>
                        Demo produkt <span style={{fontWeight: 400, fontSize: 11}}>0.0.1</span>
                    </div>
                    <IconButton size='small' onClick={() => setShow(false)}>
                        <CloseFillIcon size={17}/>
                    </IconButton>
                </Box>
                <Box p={1} style={{fontSize: 14}}>
                    Dette produkt er en demo, der ikke er beregnet til at blive brugt i produktion.
                </Box>
            </Paper>
            }
        </>
    )
}

export default CookieBanner;