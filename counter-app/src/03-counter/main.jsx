import React from 'react';
import ReactDOM from 'react-dom/client';
// import HelloWorldApp from '../src/HelloWorldApp'; // importación por defecto de todo el archivo
// import { FirstApp } from './FirstApp'; // importación de un componente en específico
import { CounterApp } from './Counter-App';
import '../03-counter/index.css';

// render es lo que quiero mostrar
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola Mundo" subtitle="123"/> */}
        <CounterApp value={0}/>
    </React.StrictMode>
)
