import { useContext } from 'react';
import { ThemeSwitcherContext } from '@/components/hoc/ThemeProvider/SwitchThemeProvider';
import { Switch } from '@material-ui/core';

export default function ThemeSwitcher() {
  const { themeMode, toggleThemeMode } = useContext(ThemeSwitcherContext);
  return (
    <Switch
      checked={themeMode}
      onChange={() => toggleThemeMode()}
      color="primary"
    />
  );
}
