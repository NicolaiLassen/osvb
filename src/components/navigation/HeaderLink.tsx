import {Link, LinkProps} from "react-router-dom";
import React from "react";

export const HeaderLink: React.FC<LinkProps & { color?: string }> = (props) => {
    return (
        <Link {...props} style={{
            color: props.color,
            textDecoration: 'none',
            marginLeft: 20,
            ...props.style
        }}/>
    )
}

export default HeaderLink;