import { makeStyles, useTheme } from '@material-ui/core';
import { FC } from 'react';

import ThemeSwitcher from '@/components/simple/ThemeSwitcher.tsx';
import Logo from '@/components/simple/Logo.tsx';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

const Header: FC = () => {
  const classes = useStyles(useTheme());
  return (
    <div className={classes.wrapper}>
      <Logo />
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
