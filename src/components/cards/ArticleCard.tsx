import React from "react";
import {makeStyles, Paper, Theme} from "@material-ui/core";

interface ArticleCardStyleProps {
    img: string;
}

const useStyles = makeStyles<Theme, ArticleCardStyleProps>(() => ({
    img: {
        backgroundImage: ({img}) => `url(${img})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transition: 'all 0.2s ease',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    }
}));

interface ArticleCardProps {
    href: string;
    img: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({href, img}) => {
    const classes = useStyles({img});
    return (
        <a target='_blank' rel="noreferrer"
           href={href}>
            <Paper
                elevation={2}
                style={{
                    height: 400,
                    width: '100%',
                    boxShadow: '0px 8px 30px rgb(112 144 176 / 30%)'
                }}
            >
                <div className={classes.img}/>
            </Paper>
        </a>
    )
}

export default ArticleCard;