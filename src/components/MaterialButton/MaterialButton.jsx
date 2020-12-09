import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './MaterialButton.css'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const MaterialButton = ({text,onClick}) => {
    const classes = useStyles()
    return(
    <div className="button">
        <div className={classes.root}>
            <Button size="large" variant="contained" color="secondary" onClick={onClick}>
                {text}
            </Button>
        </div>
    </div>
    )
}

export default MaterialButton