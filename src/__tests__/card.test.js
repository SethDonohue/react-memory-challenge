import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../card/card';

test('renders a card', () => {
  const component = renderer.create(
    <Card 
      key={0}
      id={0}
      bgColor="gray"
      value={10}
      color="rgb(0, 100, 0)"
      display="block"
      matched={false}
      flipped={false}
      matchCheck="match check function"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
