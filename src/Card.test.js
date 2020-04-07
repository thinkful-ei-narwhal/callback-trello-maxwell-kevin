import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title = {'title'} content = {'content'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it ('list renders UI', () => {
    const tree = renderer
      .create(<Card title ={'title'} content = {'content'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})