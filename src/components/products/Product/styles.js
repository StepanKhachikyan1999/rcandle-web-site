import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        maxWidth:'100%'
    },
    media: {
        height:0,
        paddingTop:'56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent:'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent:'space-between'
    },
    styleHover: {
        '&:hover': {
            transform: "translateY(-20px)",
        boxShadow:"5px 10px #888888",
        transition: ".2s",
        }
    }

}));


