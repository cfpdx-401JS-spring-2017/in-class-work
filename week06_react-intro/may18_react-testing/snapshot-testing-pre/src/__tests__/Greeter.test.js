import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Greeter, Greetings } from '../Greetings';

describe('Greeter', function() {
  it('says hello', function() {
		const rendered = shallow(<Greeter salutation="Hello" name="Marty" />);
    expect(toJSON(rendered)).toMatchSnapshot();
  });
});

describe('Greetings', function() {
  it('greets all people', function() {
    const rendered = shallow(<Greetings people={['Jane', 'Jill', 'Joey']} />);
		expect(toJSON(rendered)).toMatchSnapshot();
		rendered.instance().changeSalutation();
		rendered.update();
		expect(toJSON(rendered)).toMatchSnapshot();
  });
});
