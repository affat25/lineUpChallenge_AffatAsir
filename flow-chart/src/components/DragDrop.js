import React, { useState } from "react";
import Circle from "./Circle";
import Square from "./Square";
import Rectangle from "./Rectangle"
import { useDrop } from "react-dnd";
import Shape from "./Shape";

import "./DragDrop.css"


const ShapeList =[
    {
        id:1,
        shape:<Square/>,
    },
    {
        id:2,
        shape:<Circle/>,
    },
    {
        id:3,
        shape:<Rectangle/>,
    },
];

function DragDrop(){

    const [canvas,setCanvas]= useState([]);

    const[{isOver},drop]= useDrop(()=>({
        accept:"shape",
        drop:(item)=> addShapeToBoard(item.id),
        collect:(monitor)=>({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addShapeToBoard =(id)=>{
        const shapeList = ShapeList.filter((shape)=>shape.id);
        setCanvas((canvas)=>[...canvas,shapeList[0]])
    }

    return(
        <>
        <div className="Shapes">{ShapeList.map((figure)=>{
            return <Shape shape={figure.shape} id={figure.id}/>
        })}</div>
        <div className="Canvas" ref={drop}>{canvas.map((figure)=>{
            return <>{figure.shape}</>
        })}</div>
        </>
    )
}
export default DragDrop