import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { FormikHelpers } from 'formik';

import { useLocation } from 'hooks/useLocation';

export interface SearchFormValues {
  cepOrAddress: string;
  isCurrentLocEnable: boolean;
  sliderValue: number;
}

interface IUseController {
  handleRedirect: (values: SearchFormValues, formik: FormikHelpers<SearchFormValues>) => void;
}

const useController = (): IUseController => {
  const toast = useToast();
  const { handleUserLocationConfig } = useLocation();

  const router = useRouter();

  const checkIfCEPIsValid = useCallback(async (cep) => {
    try {
      const viaCepResponse = await axios.get(
        `https://viacep.com.br/ws/${cep.replace('-', '')}/json/`
      );

      return !!viaCepResponse.data.logradouro;
    } catch {
      return false;
    }
  }, []);

  const handleRedirect = useCallback(
    async (values, { setSubmitting, setFieldError }) => {
      if (!values.isCurrentLocEnable && values.cepOrAddress.match(/^\d/)) {
        const isCEPValid = await checkIfCEPIsValid(values.cepOrAddress);

        if (!isCEPValid) {
          setSubmitting(false);
          setFieldError('cepOrAddress', 'CEP inválido');
          return;
        }
      }
      handleUserLocationConfig({ distance: 0, isLocEnabled: values.isCurrentLocEnable });

      if (!values.isCurrentLocEnable) {
        handleUserLocationConfig({ personalLocInfo: values.cepOrAddress });

        router.push('/mapa');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          handleUserLocationConfig({
            userLocation: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            },
          });

          router.push('/mapa');
        },
        () => {
          toast({
            title: 'Não é possível prosseguir',
            description:
              'Não foi possível obter sua localização. Verifique as permissões e tente novamente',
            position: 'top',
            status: 'error',
          });
        }
      );
    },
    [checkIfCEPIsValid, router, toast, handleUserLocationConfig]
  );

  return {
    handleRedirect,
  };
};

export default useController;
