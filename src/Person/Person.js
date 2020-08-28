import React from "react";
import './Person.css';
const person=( props )=>{
    return  (
        <div className="Person">
            <button onClick={props.clickDelete}>Delete Person</button>
        <p onClick={props.clickDelete}>My name is  {props.name} and  my age is {props.age} </p>
         <p>children: {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default  person;
