// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// -------------------- chap3 --------------------

import MyHello from './chap3/MyHello';
import EventBasic from './chap3/EventBasic';
import StateBasic from './chap3/StateBasic';
import ForList from './chap3/ForList';
import books from './chap3/books';
import ForNest from './chap3/ForNest';
import ForFiletr from './chap3/ForFiletr';
import ForSort from './chap3/ForSort';

const root = createRoot(document.getElementById('root'));

// -------------------- chap3 --------------------

// root.render(
//     <MyHello myName="鈴木" />
// );

// root.render(
//     <EventBasic type="time" />
// );

// root.render(
//     <StateBasic init={0} />
// )

// root.render(
//     <ForList src={ books } />
// );

// root.render(
//     <ForNest src={ books } />
// );

// root.render(
//     <ForFiletr src={ books } />
// );

root.render(
    <ForSort src={ books } />
);