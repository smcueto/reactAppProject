import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

describe(HelloWorld, () => {
  const name = 'Person';
  const mockRemoveGreeting = jest.fn();
  const component = shallow(
    <HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>
);
});
