import { createContext, useContext, useMemo, useState, useCallback } from 'react';

const UseLocationContext = createContext({} as UseLocationContextData);

const UseLocationProvider: React.FC = ({ children }) => {
  const [useLocationConfig, setUseLocationConfig] = useState({
    distance: 0,
    personalLocInfo: '',
    isLocEnabled: false,
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
  });

  const handleUserLocationConfig = useCallback((newValue) => {
    setUseLocationConfig((prev) => ({
      ...prev,
      ...newValue,
    }));
  }, []);

  const contextValues = useMemo(
    () => ({
      handleUserLocationConfig,
      useLocationConfig,
    }),
    [useLocationConfig, handleUserLocationConfig]
  );

  return (
    <UseLocationContext.Provider value={contextValues}>{children}</UseLocationContext.Provider>
  );
};

const useLocation = (): UseLocationContextData => {
  const context = useContext(UseLocationContext);
  if (!context) throw new Error('useLocation must be used within an UseLocationProvider');
  return context;
};

export { UseLocationProvider, useLocation };
