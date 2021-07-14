import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import Chip from '@material-ui/core/Chip';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Today = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>    
            <Typography variant="overline" display="block" gutterBottom>
            확진자
            </Typography>
            <Typography variant="h6" gutterBottom>
            12,4000
            </Typography>
            <Chip
                size="small"
                label="1600"
                icon={<ArrowUpwardIcon style={{ margin:'0 4px 0 -4px',color:'#eb5374' }} />}
                style={{ background: '#eb53741f', color: '#eb5374', flexDirection: 'row-reverse' }}
            />
        </Grid>
        <Grid item xs={3}>    
            <Typography variant="overline" display="block" gutterBottom>
            확진자
            </Typography>
            <Typography variant="h6" gutterBottom>
            12,4000
            </Typography>
            <Chip
                size="small"
                label="1600"
                icon={<ArrowUpwardIcon style={{ margin:'0 4px 0 -4px',color:'#eb5374' }} />}
                style={{ background: '#eb53741f', color: '#eb5374', flexDirection: 'row-reverse' }}
            />
                </Grid>
        <Grid item xs={3}>    
            <Typography variant="overline" display="block" gutterBottom>
            확진자
            </Typography>
            <Typography variant="h6" gutterBottom>
            12,4000
            </Typography>
            <Chip
                size="small"
                label="1600"
                icon={<ArrowUpwardIcon style={{ margin:'0 4px 0 -4px',color:'#eb5374' }} />}
                style={{ background: '#eb53741f', color: '#eb5374', flexDirection: 'row-reverse' }}
            />
                </Grid>
        <Grid item xs={3}>    
            <Typography variant="overline" display="block" gutterBottom>
            확진자
            </Typography>
            <Typography variant="h6" gutterBottom>
            12,4000
            </Typography>
            <Chip
                size="small"
                label="1600"
                icon={<ArrowUpwardIcon style={{ margin:'0 4px 0 -4px',color:'#eb5374' }} />}
                style={{ background: '#eb53741f', color: '#eb5374', flexDirection: 'row-reverse' }}
            />
        </Grid>
      </Grid>
    </div>
    );
};

export default Today;