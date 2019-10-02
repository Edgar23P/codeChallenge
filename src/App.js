import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from "./Slider";

function App(props) {
  const [args,setArgs] = useState(props);
  return (
      <div>
      <div className="card">
        
        <Slider items={args.items}/>
        <div>
        <div className="title">
            <h4>{args.titulo}</h4>
        </div>
          <p className="descripcion">
            {args.descripcion}
          </p>
        </div>
      </div>
      </div>
  );
}

export default App;
