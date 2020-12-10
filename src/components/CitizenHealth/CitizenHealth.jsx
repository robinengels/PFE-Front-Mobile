import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


const CitizenHealth = ({isPositive,isExposed}) => {
    const classes = useStyles();

    if(isPositive){
        return(
            <div className={classes.root}>
            <Typography variant="h6" gutterBottom>
                Vous avez le COVID 19 !
            </Typography>
            </div>
        )
    }
    else if(isExposed){
        return(
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Vous avez été exposé mettez-vous en quarantaine !
                </Typography>
            </div>
        )
    }
    else{
        return(
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Pas d'exposition au COVID-19 jusqu'à présent !
                </Typography>
            </div>
        )
    }
}

export default CitizenHealth