import React, {
  useEffect,
  useRef
} from 'react';
import * as d3 from 'd3';
import { Celestial } from 'd3-celestial/celestial.min.js';
import config from './config';
import logo from './logo.svg';
import * as json from './planets.json';

import './App.css';

function App() {
  const d3Ref = useRef()
  config.width = config.width !== 0 ? config.width : window.screen.width - 15 ;
  const celestial = new Celestial();
  console.log(celestial);
  console.log(json);
  useEffect(() => {
    const date = '2020-09-27 13:55:43 +0200'
    // console.log(earth);
    const dateEl = document.getElementById('#date');
    console.log(dateEl)
    try {
      d3.select(d3Ref.current)
        .append(celestial.display(config))
    } catch(err) {
      console.error(err);
    }
  })

  return ( 
    <div className='celestial-container' ref={d3Ref} >
    </div>
  );
}

export default App;