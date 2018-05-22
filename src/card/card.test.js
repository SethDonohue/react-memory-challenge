import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Card from './card';

// const Enzyme = require('enzyme');

// const EnzymeAdapter = require('enzyme-adapter-react-16');

// Enzyme.configure({ adapter: new EnzymeAdapter() });


// it('renders a card', ()=> {
//   const component = shallow(<Card />);
//   // const cardText = <p>10</p>;
//   expect(component.hasClass('card')).toEqual(true);
// });

test('renders a card', ()=> {
  const component = renderer.create(
    <Card />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});