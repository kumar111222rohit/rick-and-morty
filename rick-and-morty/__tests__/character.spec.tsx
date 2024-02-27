import * as React from 'react';
import { mount } from 'enzyme';
import Character from '../components/Character/Character';
import testdata from '../testdata.json';

describe('Component', () => {
  describe('Charater', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Character characterData={testdata.characterData} />);
      expect(wrap.find('title').text()).toBe('Rick And Morty');
    });
  });
});
