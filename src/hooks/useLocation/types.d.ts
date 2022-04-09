interface UserLocation {
  latitude: number;
  longitude: number;
}

interface LocationConfig {
  distance?: number;
  personalLocInfo?: string;
  isLocEnabled?: boolean;
  userLocation?: UserLocation;
}

interface UseLocationContextData {
  useLocationConfig: LocationConfig;
  handleUserLocationConfig: (params: LocationConfig) => void;
}
