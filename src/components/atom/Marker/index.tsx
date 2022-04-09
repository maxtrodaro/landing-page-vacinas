import { useCallback } from 'react';

import trackClick from 'api/farmacies/trackClick';

import { MarkerContainer } from './styles';

// Marker component
const Marker: React.FC<IMarkerProps> = ({ place, openPlaceCode, setOpenPlaceCode }) => {
  const handleOnClick = useCallback(() => {
    trackClick({
      url: '/vacinacao/postos/cliques/detalhe',
      place: place.Code,
      search: place.SearchId,
    });

    setOpenPlaceCode(place.Code === openPlaceCode ? '' : place.Code);
  }, [openPlaceCode, place.Code, place.SearchId, setOpenPlaceCode]);

  return (
    <MarkerContainer role="button" onClick={handleOnClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 21.232 29.981">
        <g id="MARKER" transform="translate(0.01 -0.01)">
          <g id="c" transform="translate(-0.01 0.01)">
            <g id="Grupo_1" data-name="Grupo 1" transform="translate(0 0)">
              <path
                id="Caminho_1"
                data-name="Caminho 1"
                d="M10.611,29.937a4.742,4.742,0,0,1-.705-1A15.273,15.273,0,0,0,9.145,27.6l-.067-.125c-.263-.5-.542-.992-.848-1.468a6.5,6.5,0,0,0-.549-.926,2.712,2.712,0,0,0-.313-.537,33.476,33.476,0,0,0-1.907-2.929,8.765,8.765,0,0,0-.7-1.006,2.013,2.013,0,0,0-.309-.452L2.512,17.229l-.687-1.177-.143-.287-.693-1.46a15.551,15.551,0,0,1-.874-2.93L-.01,9.916.069,8.453A12.417,12.417,0,0,1,.941,5.573,13.376,13.376,0,0,1,1.81,4.057a.038.038,0,0,0,.022-.036A12.644,12.644,0,0,1,3.154,2.592l.132-.116A16.141,16.141,0,0,1,4.754,1.47l.632-.339.83-.352L7.624.357,9.145.076,10.609.01l1.467.1,1.4.262L15,.891l.532.241.933.52a10.675,10.675,0,0,1,2.195,1.913,13.421,13.421,0,0,1,1.3,1.966l.646,1.458.249.753.174.709.185,1.462c-.011.506.012,1.013-.046,1.517q-.121.7-.242,1.409a.785.785,0,0,0-.07.31L20.478,14.3,19.85,15.76l-.458.879-.341.594-.9,1.457a1.064,1.064,0,0,0-.222.342,11.557,11.557,0,0,0-.76,1.125,9,9,0,0,0-.7,1.02,1.619,1.619,0,0,0-.3.442,16.232,16.232,0,0,0-.979,1.467l-.185.3a9.656,9.656,0,0,0-.708,1.162c-.6.956-1.159,1.935-1.691,2.93a6.8,6.8,0,0,0-.533.939,2.039,2.039,0,0,0-.3.522c-.2.262-.319.579-.545.826a.488.488,0,0,1-.62.174ZM6.5,10.372a4.108,4.108,0,0,0,8.216.023A4.108,4.108,0,1,0,6.5,10.372Z"
                transform="translate(0.01 -0.01)"
                fill="#0e9bd8"
              />
              <path
                id="Caminho_2"
                data-name="Caminho 2"
                d="M111.006,110.718a4.108,4.108,0,1,1,4.091,4.114A4.115,4.115,0,0,1,111.006,110.718Z"
                transform="translate(-104.492 -100.356)"
                fill="#024d68"
              />
            </g>
          </g>
        </g>
      </svg>
    </MarkerContainer>
  );
};

export default Marker;
