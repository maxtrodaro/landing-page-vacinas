import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { Formik } from 'formik';

import Button from 'components/atom/Form/Button';
import InputFormik from 'components/atom/Form/InputFormik';
import SwitchBox from 'components/atom/Form/Switchbox';

import useController, { SearchFormValues } from './useController';

const SearchForm: React.FC = () => {
  const { handleRedirect } = useController();

  const initialValues: SearchFormValues = {
    cepOrAddress: '',
    isCurrentLocEnable: false,
    sliderValue: 0.5,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleRedirect}>
      {({
        values,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
      }) => (
        <>
          <div className="loc">
            <p>Ativar localização atual</p>
            <SwitchBox
              onChange={() => setFieldValue('isCurrentLocEnable', !values.isCurrentLocEnable)}
            />
          </div>

          {!values.isCurrentLocEnable && (
            <InputFormik
              className="input-cep"
              isWhiteBackground
              name="cepOrAddress"
              placeholder="Digite seu CEP ou endereço"
              {...(values.cepOrAddress.match(/^\d/) && { mask: 'cep' })}
              value={values.cepOrAddress}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}

          <div className="slider-container">
            <span>distância</span>
            <div className="slider">
              <span>{values.sliderValue}km</span>

              <Slider
                min={1}
                max={10}
                size="sm"
                aria-label="selecione a distancia em quilometros"
                defaultValue={values.sliderValue}
                onChangeEnd={(val) => setFieldValue('sliderValue', val / 2)}
                focusThumbOnChange={false}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb color="#009CDE" />
              </Slider>
            </div>
          </div>

          <Button
            className="btn-search"
            type="button"
            text="Pesquisar"
            onClick={() => handleSubmit()}
            disabled={(!values.isCurrentLocEnable && !isValid) || isSubmitting}
          />
        </>
      )}
    </Formik>
  );
};

export default SearchForm;
