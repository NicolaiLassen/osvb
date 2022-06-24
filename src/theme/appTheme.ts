import {createTheme} from "@mui/material";

const appTheme = {
    ...createTheme({
        typography:{
            fontFamily: 'IBM Plex Sans',
            h1: {
                fontFamily: "Lora",
                marginTop: 16,
                marginBottom: 8,
                fontSize: 30,
            },
            h2: {
                fontFamily: "Lora",
                fontSize: 22,
                fontWeight: 500,
                marginTop: 8,
                marginBottom: 4,
            },
            h3: {
                fontFamily: "Lora",
                fontSize: 18,
                marginTop: 4,
                marginBottom: 8,
            },
            h4: {
                fontFamily: "Lora",
                fontSize: 16,
                marginTop: 4,
                marginBottom: 8,
            },
        },
        palette: {
            primary: {
                main: "#ff685f",
                contrastText: '#ffffff',
            },
            secondary: {
                main: "#20CC74",
                contrastText: '#ffffff'
            },
            error: {
                light: "#EA8080",
                main: "#E35555",
                dark: "#F26B39",
            },
            warning: {
                light: "#FFDFA0",
                main: "#FFCF71",
                dark: "#FFBF42",
            },
            info: {
                light: "#EFEFF1",
                main: "#D4D4D9",
                dark: "#B9B9C1",
            },
            success: {
                light: "#CCF4EC",
                main: "#66DFC7",
                dark: "#00C9A1",
            },
            text: {
                primary: "#282828",
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: '8px !important',
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
        }
    })
}

export default appTheme;