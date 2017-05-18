import React from 'react';
import renderer from 'react-test-renderer';
import { Greeter, Greetings } from '../Greetings';

describe('Greeter', () => {

    it('says hello to Nicky', () => {
        const component = renderer.create(<Greeter name="Nicky" />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
})

describe('Greetings', () => {

    it('says hello to people', () => {
        const component = renderer.create(
            <Greetings people={['Jill', 'Julie', 'Jonsie']} />
        );
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
})
