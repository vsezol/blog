import { useState, ChangeEvent, MouseEvent } from 'react';

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  makeStyles,
  useTheme,
  Button,
} from '@material-ui/core';

import clsx from 'clsx';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '300px',
  },
  button: {
    width: '300px',
    height: 56,
  },
}));

export default function Login() {
  const classes = useStyles(useTheme());

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: string) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <OutlinedInput
            id="email"
            type="text"
            value={values.email}
            onChange={handleChange('email')}
            labelWidth={45}
          />
        </FormControl>
      </div>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
      <div>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          className={clsx(classes.margin, classes.button)}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
