import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Grid from '../grid/grid';
import App from '../app/App';
import '../setupTests';

(function mockLocalStorage() {
  global.localStorage = { bestScore: 0 };
}());

const wrapper = shallow(<App />);
const dataArray = wrapper.instance().randomDataArray();

test('Renders a Grid and compares to snapshot', () => {
  const component = renderer.create(
    <Grid
      dataArray={dataArray}
      bestScore={0}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
