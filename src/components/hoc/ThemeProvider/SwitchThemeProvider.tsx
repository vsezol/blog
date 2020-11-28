import React, { FC, createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';

import { Props } from '@/interfaces/Props';
import { Dark, Light } from '@/ui/Themes';

export interface IThemeSwitcherContext {
  themeMode: boolean;
  toggleThemeMode: Function;
}

export const ThemeSwitcherContext = createContext<IThemeSwitcherContext>({
  themeMode: false,
  toggleThemeMode: () => {},
});

const SwitchThemeProvider: FC<Props.WithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = useState(true);
  const theme = useMemo(() => (themeMode ? Dark : Light), [themeMode]);
  const toggleThemeMode = () => setThemeMode(!themeMode);

  return (
    <ThemeSwitcherContext.Provider value={{ themeMode, toggleThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export default SwitchThemeProvider;
