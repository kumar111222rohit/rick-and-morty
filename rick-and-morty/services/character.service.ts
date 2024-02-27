import getURL from '../utils/rickAndMortyUrl';
//generic APICall method
export default class Character {
  static async makeAPICall(URL: string, requestOptions: object) {
    try {
      const response = await fetch(URL, requestOptions);
      const data = await response.json();
      return data;
    } catch (e) {
      //e
      throw e;
    }
  }

  //get all character data on initial load
  static async fetchCharacterData(page: any) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return Character.makeAPICall(
      `${getURL('FETCH_CHARACTER_DATA')}?page=${page}`,
      requestOptions
    );
  }
  //get episodes data array
  static async fetchEpisodeData() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    //passing all episodes as parameter to get the entire result in one call instead of paginated result.
    return Character.makeAPICall(
      `${getURL('FETCH_EPISODE_DATA')}` +
        '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41',
      requestOptions
    );
  }
}
