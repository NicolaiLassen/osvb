import React from "react";
import {Paper} from "@material-ui/core";


interface ArticleCardProps {
    href: string;
    img: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({href, img}) => {
    return (
        <a target='_blank' rel="noreferrer"
           href={href}>
            <Paper
                elevation={2}
                style={{
                    backgroundImage: `url(${img})`,
                    height: 400,
                    width: '100%',
                    boxShadow: '0px 8px 30px rgb(112 144 176 / 30%)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
            </Paper>
        </a>
    )
}

export default ArticleCard;