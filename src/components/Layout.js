import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper2 from './Paper2';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
    <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={3}>
            <Hidden smDown>
                <Grid item xs={12} md={4}>
                    <Paper2 className={classes.paper}>pc lnb</Paper2>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item xs={12}>
                        <Paper2 className={classes.paper}>
                            <Header />
                            <div>asdfjklas</div>
                        </Paper2>
                </Grid>  
            </Hidden>
            <Grid item xs={12} md={8}>
                {children}
            </Grid>
        </Grid>
    </Container>
  );
};

export default Layout;