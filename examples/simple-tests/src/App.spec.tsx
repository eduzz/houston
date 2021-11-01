import React from 'react';

import { shallow } from 'enzyme';
import App from './App';

const props = {
  foo: 'bar'
};

describe('<App />', () => {
  it('should render the App', () => {
    const component = shallow(<App {...props} />);
    expect(component.exists()).toBeTruthy();
  });
});
