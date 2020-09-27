import React, {
  useEffect,
  useRef
} from 'react';
import * as d3 from 'd3';
import { Celestial } from 'd3-celestial/celestial.min.js';
import config from './config';
import './App.css';

function App() {
  const d3Ref = useRef()
  config.width = config.width !== 0 ? config.width : window.screen.width - 15 ;
  const celestial = new Celestial();
  useEffect(() => {
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