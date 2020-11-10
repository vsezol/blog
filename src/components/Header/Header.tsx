import { makeStyles, Typography, useTheme } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles({
  title: (props: any) => ({
    fontFamily: 'NeutraText-Bold',
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  }),
  wrapper: {
    width: 'fit-content',
    background: '#efd81d',
    padding: '25px 5px 5px 35px',
  }
});

const Header: FC = () => {
  const classes = useStyles(useTheme().palette);

  return (
    <div className={classes.wrapper}>
      <Typography variant="h4" component="h1" className={classes.title}>
        javascriptor
      </Typography>
    </div>
  );
};

export default Header;
