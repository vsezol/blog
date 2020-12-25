import { makeStyles, Typography, useTheme } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: 'NeutraText-Bold',
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },

  logo: {
    width: 'fit-content',
    background: theme.palette.info.main,
    padding: '25px 5px 5px 35px',
  },
}));

const Logo: FC = () => {
  const classes = useStyles(useTheme());

  return (
    <div className={classes.logo}>
      <Typography variant="h4" component="h1" className={classes.title}>
        javascriptor
      </Typography>
    </div>
  );
};

export default Logo;
