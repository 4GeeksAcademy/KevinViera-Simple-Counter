import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Timer from './components/Timer';

let counter = 0;

function count() {
  counter++
  let string = counter.toString().padStart(6, "0")
  ReactDOM.createRoot(document.getElementById('root')).render(<Timer string = {string}/>)
}
setInterval(count, 1000);