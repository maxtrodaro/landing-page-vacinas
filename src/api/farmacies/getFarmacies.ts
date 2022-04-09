import api from 'services/api';

import { ISearch } from './types';

interface IGetFarmaciesParams {
  distance: number;
  address: string;
  isLocEnabled: string;
}

interface IGetFarmaciesReturn {
  places: IFarmacy[];
  search: ISearch;
  madeBy: string;
}

const getFarmacies = async (params: IGetFarmaciesParams): Promise<IGetFarmaciesReturn> => {
  const { distance, address } = params;

  const userLocation =
    localStorage.getItem('locEnabled') === 'true'
      ? JSON.parse(localStorage.getItem('userLocation') || '')
      : null;

  const response = await api.post('/vacinacao/postos', {
    lat: userLocation?.latitude ?? 0,
    long: userLocation?.longitude ?? 0,
    distance,
    address,
    type: localStorage.getItem('locEnabled') === 'true' ? 'geo' : 'cep',
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
