interface IPosition {
  latitude: number;
  longitude: number;
}

interface IMarkerProps {
  place: IFarmacy;
  lat?: number;
  lng?: number;
  openPlaceCode: string;
  setOpenPlaceCode: (openPlaceCode: string) => void;
}
