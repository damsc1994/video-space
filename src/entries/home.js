import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import PlayList from '../playlist/components/playlist';
import data from '../api.json'
import Home from '../pages/containers/home.js';

render(<Home data={data} />, document.getElementById('home-container'))
