import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';

import { Greeter, Greetings } from '../Greetings';

describe('Greeter', function () {

    it('says hello', function () {
      const json = renderer.create(<Greeter name="Marty"/>).toJSON();
      expect(json).toMatchSnapshot();
    });
    
});

describe('Greetings', function () {

    it('greets all people', function () {
      const json = renderer.create(<Greetings/>).toJSON();
      expect(json).toMatchSnapshot();
    });
    
});