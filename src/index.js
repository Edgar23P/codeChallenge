import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App 
    titulo="Imagenes de Paisajes" 
    descripcion="distintos tipos de Paisajes en imagenes" 
    items={[
        { id: 1,img: require("./images/waterfall.jpg")},
        { id: 2 ,img:require("./images/norway.jpg")},
        { id: 3 ,img:require("./images/rocks.jpg")},
        { id: 4 ,img:require("./images/campo.jpg")},
        { id: 5 ,img:require("./images/landscape.jpg")}
    ]}       
    />, document.getElementById('root'));

serviceWorker.unregister();
