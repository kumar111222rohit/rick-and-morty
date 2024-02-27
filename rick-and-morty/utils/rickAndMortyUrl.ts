const API_URI: { [x: string]: string } = {
  FETCH_CHARACTER_DATA: '/api/character',
  FETCH_EPISODE_DATA: '/api/episode/',
};

export default function getURL(type: string) {
  return `${process.env.API_BASE_URL}${API_URI[type]}`;
}
