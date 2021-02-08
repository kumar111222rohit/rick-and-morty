import getURL from '../utils/rickAndMortyUrl';

export default class Character {
	static async makeAPICall(URL, requestOptions) {
		try {
			const response = await fetch(URL, requestOptions);
			console.log({ response });

			const data = await response.json();
			return data;
		} catch (e) {
			//e
			throw e;
		}
	}

	static async fetchCharacterData(page) {
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
	static async fetchEpisodeData() {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		return Character.makeAPICall(
			`${getURL('FETCH_EPISODE_DATA')}` +
				'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41',
			requestOptions
		);
	}
}
