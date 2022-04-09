import React, { useState, useLayoutEffect } from 'react';

import { useRouter } from 'next/router';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons';
import GoogleMapReact from 'google-map-react';

import { useLocation } from 'hooks/useLocation';

import Button from 'components/atom/Form/Button';
import InfoWindow from 'components/atom/InfoWindow';
import Loader from 'components/atom/Loader';
import Marker from 'components/atom/Marker';
import UserMarker from 'components/atom/UserMarker';
import Footer from 'components/organisms/Footer';
import Footnotes from 'components/organisms/Footnotes';
import Header from 'components/organisms/Header';

import { Main, MapSection, HeaderResults, HeaderMessages } from './styles';
import useController from './useController';

const Map: React.FC = () => {
  const router = useRouter();
  const { useLocationConfig } = useLocation();

  useLayoutEffect(() => {
    if (
      useLocationConfig.distance === 0 ||
      useLocationConfig.personalLocInfo === '' ||
      useLocationConfig.isLocEnabled === false ||
      (useLocationConfig.userLocation?.latitude === 0 &&
        useLocationConfig.userLocation?.longitude === 0)
    ) {
      router.replace('/');
    }
  }, [useLocationConfig, router]);

  const [openPlaceCode, setOpenPlaceCode] = useState<string>('');

  const { places, madeBy, searchDistance, userPosition, trackingClick } = useController();

  return (
    <>
      {window.innerWidth > 500 && <Header />}
      <Main>
        <MapSection>
          <div className="results">
            <Button
              icon={faChevronLeft}
              hasBorder={false}
              iconPosition="left"
              type="button"
              text="VOLTAR PARA PESQUISA"
              theme="blue01"
              onClick={() => router.push('/')}
            />
            <HeaderResults>
              <p style={{ color: '#888B8D', fontSize: '1.25rem', fontWeight: 400 }}>
                {places?.length} resultado(s)
              </p>
            </HeaderResults>
            <HeaderMessages>
              {searchDistance === 30 && places?.length && madeBy !== 'system' ? (
                <p>
                  NÃO ENCONTRAMOS RESULTADO(S) PRÓXIMOS À VOCÊ. EXIBINDO RESULTADOS EM UM RAIO DE
                  30KM.
                </p>
              ) : (
                ''
              )}
              {searchDistance === 30 && places?.length === 0 ? (
                <p>Nenhum resultado encontrado nas proximidades do endereço pesquisado</p>
              ) : (
                ''
              )}
              {madeBy === 'system' ? (
                <p>
                  Não encontramos resultados dentro da área buscada - a busca foi expandida para{' '}
                  {searchDistance}km
                </p>
              ) : (
                ''
              )}
            </HeaderMessages>
            <Accordion allowToggle>
              {places?.map((place: IFarmacy) => (
                <AccordionItem key={place.Code} style={{ marginBottom: '2rem' }}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        onClick={() => {
                          trackingClick(
                            '/vacinacao/postos/cliques/detalhe',
                            place.Code,
                            place.SearchId
                          );
                          !isExpanded ? setOpenPlaceCode(place.Code) : setOpenPlaceCode('');
                        }}
                        style={{
                          alignItems: 'flex-start',
                          backgroundColor: place.Channel === 'Clinicas' ? '#009CDE' : '#64CCC9',
                          border: 0,
                        }}
                      >
                        <Box
                          flex="1"
                          as="h1"
                          textAlign="left"
                          style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: 0 }}
                        >
                          {place.Place}{' '}
                          <Box
                            as="span"
                            style={{ color: '#fff', fontSize: '14px', fontWeight: 400 }}
                          >
                            ({parseFloat(place.Distance).toFixed(2)}KM)
                          </Box>
                          <br />
                          <Box
                            as="p"
                            style={{ color: '#fff', fontSize: '12px', fontWeight: 400, margin: 0 }}
                          >
                            {place.Channel}
                          </Box>
                        </Box>
                        <AccordionIcon color="#fff" />
                      </AccordionButton>
                      <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                        <Box
                          as="p"
                          flex="1"
                          style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                        >
                          {place.Address} - {place.City} - {place.State}
                        </Box>
                        <Box
                          flex="1"
                          as="a"
                          href={`tel: ${place.Phone}`}
                          style={{
                            color: '#888B8D',
                            fontSize: '14px',
                            marginBottom: '10px',
                            textDecoration: 'none',
                          }}
                          onClick={() => {
                            trackingClick('postos/cliques/telefone', place.Code, place.SearchId);
                          }}
                        >
                          {place.Phone}
                        </Box>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {userPosition?.latitude !== 0 && userPosition?.longitude !== 0 && searchDistance ? (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.googleKey || 'AIzaSyDcUjIY3DYyAUh6SSjJ4Cj2DuXV2IKhx2w',
              }}
              defaultZoom={searchDistance === 30 ? 10 : searchDistance > 2 ? 13 : 15}
              defaultCenter={{
                lat: userPosition?.latitude ?? 0,
                lng: userPosition?.longitude ?? 0,
              }}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map }) =>
                new google.maps.Circle({
                  strokeColor: '#FE7569',
                  strokeWeight: 2,
                  fillColor: 'transparent',
                  map,
                  center: { lat: userPosition?.latitude, lng: userPosition?.longitude },
                  radius: searchDistance * 1150,
                })
              }
            >
              <UserMarker lat={userPosition?.latitude} lng={userPosition?.longitude} />
              {places?.map((place: IFarmacy) => (
                <Marker
                  openPlaceCode={openPlaceCode}
                  setOpenPlaceCode={setOpenPlaceCode}
                  key={place.Code}
                  lat={place.Latitude}
                  lng={place.Longitude}
                  place={place}
                />
              ))}
            </GoogleMapReact>
          ) : (
            <Loader />
          )}
          {places?.map(
            (place: IFarmacy) =>
              place.Code === openPlaceCode && (
                <InfoWindow
                  setOpenPlaceCode={setOpenPlaceCode}
                  openPlaceCode={openPlaceCode}
                  place={place}
                />
              )
          )}
        </MapSection>
        <Footnotes />
      </Main>
      <Footer />
    </>
  );
};
export default Map;
