import * as React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';
import Character from '../components/Character/Character';

describe('Pages', () => {
	// describe('Index', () => {
	// 	it('should render without throwing an error', function () {
	// 		const wrap = mount(<IndexPage data={'test'} />);
	// 		expect(wrap.find('title').text()).toBe('Rick And Morty');
	// 	});
	// });
	describe('Charater', () => {
		it('should render without throwing an error', function () {
			const wrap = mount(
				<Character
					characterData={{
						created: '2017-11-04T22:21:24.481Z',
						episode: ['https://rickandmortyapi.com/api/episode/3'],
						gender: 'Female',
						id: 17,
						image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
						location: { name: 'Anatomy Park', url: 'https://rickandmortyapi.com/api/location/5' },
						name: 'Annie',
						origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
						species: 'Human',
						status: 'Alive',
						type: '',
						url: 'https://rickandmortyapi.com/api/character/17',
					}}
				/>
			);
			expect(wrap.find('title').text()).toBe('Rick And Morty');
		});
	});
});
