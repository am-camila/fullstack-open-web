
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  function handlePersonChange(ev){
    setNewName(ev.target.value)
  }

  function addPerson(ev){
    ev.preventDefault()
    const newPerson = {
      name: newName
    }

    if (persons.find(p=>p.name.toLowerCase()===newPerson.name.toLowerCase())){
      window.alert(`${newPerson.name} is already added to phonebook`)
    } else{
    setPersons(persons.concat(newPerson))
    }
    setNewName('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
    
    </div>
  )
}

export default App