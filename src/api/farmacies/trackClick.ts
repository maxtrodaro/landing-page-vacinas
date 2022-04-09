import api from 'services/api';

interface ITrackClickParams {
  url: string;
  place?: string;
  search?: number;
  faq?: string;
}
const trackClick = (params: ITrackClickParams): Promise<void> => {
  const { url, place, search, faq } = params;

  return api.post(url, {
    place,
    search,
    user: {
      uid: localStorage.getItem('userId'),
      source: localStorage.getItem('userSource') || 'direct',
    },
    faq,
  });
};

export default trackClick;
