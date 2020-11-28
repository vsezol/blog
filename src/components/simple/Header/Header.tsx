import { makeStyles, Typography, useTheme } from '@material-ui/core';
import { FC } from 'react';
import ThemeSwitcher from '@/components/simple/ThemeSwitcher.tsx';

const useStyles = makeStyles({
  title: (props: any) => ({
    fontFamily: 'NeutraText-Bold',
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  }),

  logo: {
    width: 'fit-content',
    background: '#efd81d',
    padding: '25px 5px 5px 35px',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Header: FC = () => {
  const classes = useStyles(useTheme().palette);
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <Typography variant="h4" component="h1" className={classes.title}>
          javascriptor
        </Typography>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
