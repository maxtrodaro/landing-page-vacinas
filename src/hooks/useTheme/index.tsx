import { createContext, useContext, useMemo } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import defaultTheme from 'styles/themes/default';

type UseThemeContextData = {
  theme: DefaultTheme;
};

const themes = [defaultTheme];

const UseThemeContext = createContext<UseThemeContextData>({} as UseThemeContextData);

const UseThemeProvider: React.FC = ({ children }) => {
  // # Tema

  const theme = themes[0];

  const contextValues = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );

  return (
    <UseThemeContext.Provider value={contextValues}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UseThemeContext.Provider>
  );
};

const useTheme = (): UseThemeContextData => {
  const context = useContext(UseThemeContext);
  if (!context) throw new Error('useTheme must be used within an UseThemeProvider');
  return context;
};

export { UseThemeProvider, useTheme };
