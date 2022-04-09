import api from 'services/api';

import { ISearch } from './types';

interface IGetFarmaciesParams {
  distance: number;
  address: string;
  isLocEnabled: boolean;
  userLocation: {
    latitude: number;
    longitude: number;
  };
}

interface IGetFarmaciesReturn {
  places: IFarmacy[];
  search: ISearch;
  madeBy: string;
}

const getFarmacies = async (params: IGetFarmaciesParams): Promise<IGetFarmaciesReturn> => {
  const { distance, address, isLocEnabled } = params;

  const userLocation = isLocEnabled ? params.userLocation : null;

  const response = await api.post('/vacinacao/postos', {
    lat: userLocation?.latitude ?? 0,
    long: userLocation?.longitude ?? 0,
    distance,
    address,
    type: isLocEnabled ? 'geo' : 'cep',
    user: {
      uid: localStorage.getItem('userId'),
      source: localStorage.getItem('userSource') || 'direct',
    },
    origin: 'home',
  });

  const { data: places, search, madeBy, success } = response.data;

  if (!success) {
    throw new Error();
  }

  return {
    places,
    search,
    madeBy,
  };
};

export default getFarmacies;
