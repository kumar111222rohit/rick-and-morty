import * as React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';
import testdata from '../testdata.json';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(
        <IndexPage
          data={testdata.characterData}
          episodesData={testdata.episodeData}
        />
      );
      expect(wrap.find('title').text()).toBe('Rick And Morty');
      // expect(wrap.find("#charName")).toBe.lengthOf(1);
    });
  });
});
