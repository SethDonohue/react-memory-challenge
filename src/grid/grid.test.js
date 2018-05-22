import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Grid, { randomInt, randomDataArray } from './grid';

test('Checks that randomInt creates a random positive int', () => {
  const wrapper = shallow(<Grid />);

  expect(randomNumber).toBeLessThan(16);
  expect(randomNumber).toBeGreaterThan(-1);

});

test('Redners a Grid and compaires to snapshot', () => {
  const component = renderer.create(
    <Grid
      dataArray={dataArray}
      bestScore={bestScore}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
