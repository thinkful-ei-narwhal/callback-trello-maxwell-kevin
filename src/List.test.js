import React from 'react';
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

