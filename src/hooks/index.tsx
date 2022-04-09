import { UseLocationProvider } from './useLocation';
import { UseThemeProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => (
  <UseThemeProvider>
    <UseLocationProvider>{children}</UseLocationProvider>
  </UseThemeProvider>
);

export default AppProvider;
