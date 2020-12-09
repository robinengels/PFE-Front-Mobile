import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Title.css'

const useStyles = makeStyles({
  root: {
    width: '100%',
    color : 'white',
  },
});

const Title = ({title}) => {
    const classes = useStyles();
    return(
        <div className={classes.root} id="title">
            <Typography variant="h2" component="h2" gutterBottom>
                {title}
            </Typography>
        </div>
    )
}

export default Title