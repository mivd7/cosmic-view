import React, {
  useEffect,
  useRef
} from 'react';
import * as d3 from 'd3';
import { Celestial } from 'd3-celestial/celestial.js';
import config from './config';
import './App.css';

function App() {
  const d3Ref = useRef()
  const celestial = Celestial()
  const dateObj = new Date().getUTCDate();

  console.log(celestial.getPlanet('jup', dateObj))
  config.width = config.width !== 0 ? config.width : window.screen.width - 15 ;
  useEffect(() => {
    try {
      d3.select(d3Ref.current)
        .append(celestial.display(config))
    } catch(err) {
      console.error(err);
    }

  }, [d3Ref, celestial])

  return ( 
    <div className='celestial-container' ref={d3Ref} >
    </div>
  );
}

export default App;