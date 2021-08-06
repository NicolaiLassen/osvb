import {Link, LinkProps} from "react-router-dom";
import React from "react";

export const HeaderLink: React.FC<LinkProps> = (props) => {
    return (
        <Link {...props} style={{
            color: 'white',
            textDecoration: 'none',
            marginLeft: 20
        }}/>
    )
}

export default HeaderLink;