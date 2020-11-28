import React, { FC, useContext, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/core';

import { Props } from '@/interfaces/Props';

import { Dark, Light } from '@/ui/Themes';

import SwitchThemeProvider, {
  ThemeSwitcherContext,
} from '@/components/hoc/ThemeProvider/SwitchThemeProvider';

const CustomThemeProvider: FC<Props.WithChildren> = ({ children }) => {
  const { themeMode } = useContext(ThemeSwitcherContext);
  const theme = useMemo(() => (themeMode ? Dark : Light), [themeMode]);

  return (
    <SwitchThemeProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SwitchThemeProvider>
  );
};

export default CustomThemeProvider;
