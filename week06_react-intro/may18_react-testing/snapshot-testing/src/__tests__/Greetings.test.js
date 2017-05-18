import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
// import serializer from 'enzyme-to-json/serializer';
// expect.addSnapshotSerializer(serializer);

import { Greeter, Greetings } from '../Greetings';

describe('Greeter', () => {

    it('says hello to Nicky', () => {
        const wrapper = shallow(<Greeter salutation="Goodbye" name="Nicky" />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('says hello by default', () => {
        const wrapper = shallow(<Greeter name="Nicky" />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
})

describe('Greetings', () => {

    it('says hello to people', () => {
        const wrapper = shallow(
            <Greetings people={['Jill', 'Julie', 'Jonsie']} />
        );
        expect(toJSON(wrapper)).toMatchSnapshot();

        // // direct call to component API:        
        // wrapper.instance().changeSalutation();
        //wrapper.update();

        // or simulate the event:
        wrapper.find('button').simulate('click');        
        
        expect(toJSON(wrapper)).toMatchSnapshot();

    });
})
