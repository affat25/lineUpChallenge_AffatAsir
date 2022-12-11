import React from 'react';
// import Square from './components/Square';
// import Circle from './components/Circle';
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"

import './App.css';
import DragDrop from './components/DragDrop';


function App() {
  
  // const[numSquares,setNumSquares] = useState(1);
  // const[numCircles,setNumCircles] = useState(1);

  return (
   <DndProvider backend={HTML5Backend}>
    <div>
    <DragDrop/>
    </div>
   </DndProvider>
  );
}

export default App;


/* <div className='d-flex justify-content-start'>
   <div>
   <button onClick={()=>setNumSquares(numSquares-1)}>Square--</button>
    {[...Array(numSquares)].map(() => (<Square/>))}
    <button onClick={()=>setNumSquares(numSquares+1)}>Square++</button>
    </div>
    <div>
    <button onClick={()=>setNumCircles(numCircles+1)}>Circle--</button>
    {[...Array(numCircles)].map(() => (<Circle/>))}
    <button onClick={()=>setNumCircles(numCircles+1)}>Circle++</button>
    </div>
   </div> */