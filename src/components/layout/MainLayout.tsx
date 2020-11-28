import React, { FC, ReactNode } from 'react';
import { Container, makeStyles, useTheme } from '@material-ui/core';

import Header from '@/components/simple/Header/Header';

export interface IProps {
  children: ReactNode;
}

const useStyles = makeStyles({
  wrapper: (props: any) => ({
    background: props.secondary.main,
    minHeight: '100vh',
    paddingTop: '40px',
  }),
  main: {
    paddingTop: '40px',
  },
});

const MainLayout: FC<IProps> = ({ children }) => {
  const classes = useStyles(useTheme().palette);

  return (
    <Container maxWidth={false} className={classes.wrapper}>
      <Container maxWidth="md">
        <Header />
        <main className={classes.main}>
          {children}
        </main>
      </Container>
    </Container>
  );
};

export default MainLayout;
