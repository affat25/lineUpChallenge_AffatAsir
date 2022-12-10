import React from 'react';
import Square from './components/Square';
import Circle from './components/Circle';

import './App.css';

function App() {
  return (
   <>
   <div className='d-flex justify-content-start'>
   <Square/>
   <Circle/>
   </div>
   </>
  );
}

export default App;
