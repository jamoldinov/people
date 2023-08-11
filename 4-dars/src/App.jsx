import { useState } from 'react'
import db from './data/db'
import List from './components/List';

function App() {
console.log(db);
const [person, setPerson] = useState(db)
console.log(person);
const [showContent, setShowContent] =useState(true)
const userDel = (id) => {
  console.log(id);
  const users = person.filter((user) => {
    return user.id !== id
  })
  setPerson(users)
}


  return (
    <div className="container">
      
      <h1 className="title">{person ? person.length: 0} birthdays today</h1>
        
           <List person= {person} userDel= {userDel} />
    
       
        {person.length  ? <button className='clear' onClick={() => {setPerson([])}}>Clear All</button> : null}
      {!person.length && <button className='refresh' onClick={() => {setPerson(db)}}>Refresh</button>}
      
    </div>
  )
}

export default App
