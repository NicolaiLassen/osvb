import React from "react";
import FloatContainer from "./containers/FloatContainer";

const CookieBanner = () => {
    return (
        <FloatContainer
            style={{position: 'fixed', bottom: 8, right: 8, padding: 16}}>
            Cookie
        </FloatContainer>
    )
}

export default CookieBanner;