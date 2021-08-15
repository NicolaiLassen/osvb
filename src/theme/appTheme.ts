import {createTheme} from "@material-ui/core";

const appTheme = {
    ...createTheme({
        overrides: {
            MuiTableCell: {
                root: {}
            },
            MuiPaper: {
                root: {
                    borderRadius: '16px !important',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,.09)'
                },
                elevation0: {
                    boxShadow: '0 4px 8px rgba(112, 144, 176, 0.15)'
                },
                elevation1: {
                    boxShadow: '0 4px 8px rgba(112, 144, 176, 0.15)'
                },
                elevation2: {
                    boxShadow: '0px 8px 30px rgba(112, 144, 176,0.15)'
                },
                elevation3: {
                    boxShadow: '0 1px 4px rgba(0,0,0,.09)'
                },
                elevation4: {
                    boxShadow: '0 1px 4px rgba(0,0,0,.09)'
                },
                elevation8: {
                    boxShadow: '0 4px 8px rgba(0,0,0,.2)'
                }

            }
        }
    })
}

export default appTheme;