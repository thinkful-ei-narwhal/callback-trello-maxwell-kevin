import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import List from './List.js'

it('list render without crashing',()=>{
    const div = document.createElement('div');
    const cards= [
        {
            id:1,
            title: "first title",
            content:"lore",
        }
    ]
    ReactDOM.render(<List cards= {cards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('list renders the UI as expected',()=>{
    const cards= [
        {
            id:1,
            title: "first title",
            content:"lore",
        }
    ]
    const tree = renderer
    .create(<List cards= {cards}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});


