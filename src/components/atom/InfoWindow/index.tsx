import { useState } from 'react';

import { faLocationDot, faPhone, faClose } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLocation } from 'hooks/useLocation';

import trackClick from 'api/farmacies/trackClick';

import Button from 'components/atom/Form/Button';

import { InfoWindowContent, InfoWindowInfo, InfoWindowLinks } from './styles';

const InfoWindow: React.FC<IInfoWindowProps> = ({ place, openPlaceCode, setOpenPlaceCode }) => {
  const [modalWaze, setModalWaze] = useState<boolean>(false);
  const { useLocationConfig } = useLocation();

  function redirect(param: string): void {
    if (param === 'google') {
      if (!useLocationConfig.isLocEnabled) {
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${useLocationConfig.personalLocInfo}&destination=${place.Latitude},${place.Longitude}`,
          ' __self'
        );
      } else {
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${place.Latitude},${place.Longitude}`,
          ' __self'
        );
      }
    } else {
      window.open(
        `https://www.waze.com/ul?ll=${place.Latitude}%2C${place.Longitude}&navigate=yes`,
        ' __self'
      );
    }
  }

  function setGoogleMapsRoute(): void {
    if (window.innerWidth < 767) {
      setModalWaze(true);
    } else {
      redirect('google');
    }
  }

  const trackingClick = (url: string, trackPlace: string, search: number): Promise<void> =>
    trackClick({
      url: `/vacinacao/postos/cliques/${url}`,
      place: trackPlace,
      search,
    });

  return (
    <InfoWindowContent>
      <FontAwesomeIcon
        className="close-window"
        onClick={() => {
          setOpenPlaceCode(place.Code === openPlaceCode ? '' : place.Code);
        }}
        icon={faClose}
        size="2x"
        color="#fff"
      />
      <h2>
        {place.Place} ({parseFloat(place.Distance).toFixed(2)}KM)
      </h2>
      <p>{place.Channel}</p>
      <InfoWindowInfo>
        <FontAwesomeIcon icon={faLocationDot} size="2x" color="#fff" />
        <p>
          {place.Address} - {place.City} - {place.State}
        </p>
      </InfoWindowInfo>
      {place.Phone ? (
        <InfoWindowInfo>
          <FontAwesomeIcon icon={faPhone} color="#fff" size="2x" />
          <a
            href={`tel: ${place.Phone}`}
            onClick={() => {
              trackingClick('telefone', place.Code, place.SearchId);
            }}
          >
            {place.Phone}
          </a>
        </InfoWindowInfo>
      ) : (
        ''
      )}
      <Button
        text="Obter Rota"
        theme="white"
        onClick={() => {
          trackingClick('rota', place.Code, place.SearchId);
          setGoogleMapsRoute();
        }}
      />
      {modalWaze ? (
        <InfoWindowLinks>
          <a role="button" aria-hidden="true" onClick={() => redirect('google')}>
            Abrir no Google Maps
          </a>
          <a aria-hidden="true" role="button" onClick={() => redirect('waze')}>
            Abrir no Waze
          </a>
        </InfoWindowLinks>
      ) : (
        ''
      )}
    </InfoWindowContent>
  );
};

export default InfoWindow;
