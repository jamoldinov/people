import React from 'react'
import { useState } from 'react';
import './List.css'
import {FaTrash} from 'react-icons/fa6'
function List({person, userDel}) {
    console.log(person);
const[show, setShow] = useState(true)

    

    return (
        <ul>
     {person && person.map((men) => {
         const{id, name, age, image} = men
         return(
            <li key={id}>
                <img src={image} alt="" width="75" height="75" />
                <div>
                <h3>{name}</h3>
              <p> {age} years</p>
                </div>
                {/* <button onClick={() => {}}>Reload</button> */}
                <FaTrash className = "trsh" onClick={() => {userDel(id)}} />
            </li>
        )
     })}   
    </ul>
  )
}

export default List