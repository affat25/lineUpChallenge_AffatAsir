import React from "react";
import { useDrag } from "react-dnd";

function Shape({id,shape}){
    const [{isDragging},drag] = useDrag(()=>({
        type:"shape",
        itme:{id:id},
        collect:(monitor)=>({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    
    return <span ref={drag} style={{border:isDragging ? "5px solid pink": "0px"}}>{shape}</span>
}
export default Shape