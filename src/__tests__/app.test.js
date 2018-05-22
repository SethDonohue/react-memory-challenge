import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../app/App';
import '../setupTests';


(function mockLocalStorage() {
  global.localStorage = { bestScore: 0 };  
}());

const wrapper = shallow(<App />);

describe('Testing the App Random Methods', () => {
  test('Renders the App and compares to snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('METHOD randomInt creates a random positive int', () => {
    const randomNumber = wrapper.instance().randomInt(16);
    
    expect(randomNumber).toBeLessThan(16);
    expect(randomNumber).toBeGreaterThan(-1);
  });
  
  test('METHOD randomDataArray returns a temp array with length = 16', () => {
    const dataArray = wrapper.instance().randomDataArray();
    
    expect(dataArray.length).toEqual(16);
  });
  
  test('METHOD randomDataArray returns a temp array with an element as an object that has keys color, value', () => {
    const dataArray = wrapper.instance().randomDataArray();
    const elementOne = dataArray[0];
    const elementTwo = dataArray[4];
    const elementThree = dataArray[10];

    expect(elementOne.color).toBeTruthy();
    expect(elementOne.value).toBeTruthy();

    expect(elementTwo.color).toBeTruthy();
    expect(elementTwo.value).toBeTruthy();

    expect(elementThree.color).toBeTruthy();
    expect(elementThree.value).toBeTruthy();
  });
});
