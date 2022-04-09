import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';
import useSWR from 'swr';

import getFarmacies from 'api/farmacies/getFarmacies';
import trackClick from 'api/farmacies/trackClick';

interface IUseController {
  places: IFarmacy[];
  searchDistance: number;
  madeBy: string;
  userPosition: {
    latitude: number;
    longitude: number;
  };
  trackingClick: (url: string, place: string, search: number) => void;
}

const useController = (): IUseController => {
  const router = useRouter();
  const toast = useToast();

  const distance = Number(localStorage.getItem('distance'));
  const personalLocInfo = localStorage.getItem('info');
  const isLocEnabled = JSON.parse(localStorage.getItem('locEnabled') || 'false');
  const userLocation = JSON.parse(localStorage.getItem('userLocation') || '{}');

  const { data, error } = useSWR(
    `/vacinacao/postos/${personalLocInfo}/${isLocEnabled}/${distance}/${userLocation}`,
    () =>
      getFarmacies({
        distance,
        address: personalLocInfo || '',
        isLocEnabled,
      })
  );

  const trackingClick = useCallback(
    (url: string, place: string, search: number) =>
      trackClick({
        url,
        place,
        search,
      }),
    []
  );

  const handleError = useCallback(() => {
    toast({
      title: 'Falha na busca de endereço/CEP',
      description:
        'Não foi possível carregar as informações. Verifique o endereço/CEP informado e tente novamente.',
      position: 'top',
      status: 'error',
    });

    router.replace('/');
  }, [router, toast]);

  if (error) handleError();

  return {
    places: data?.places ?? [],
    searchDistance: data?.search?.distance ?? 0.5,
    madeBy: data?.madeBy ?? '',
    userPosition: {
      latitude: data?.search?.lat ?? 0,
      longitude: data?.search?.long ?? 0,
    },
    trackingClick,
  };
};

export default useController;
