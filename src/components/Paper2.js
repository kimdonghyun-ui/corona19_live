import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
        borderRadius: '16px',
    overflow: 'hidden',
  },
}));

const Paper2 = ({ children }) => {
    const classes = useStyles();


    return (
        <Paper className={classes.paper}>
            { children }
        </Paper>
    );
};

export default Paper2;