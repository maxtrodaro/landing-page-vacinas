import { UseThemeProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => <UseThemeProvider>{children}</UseThemeProvider>;

export default AppProvider;
