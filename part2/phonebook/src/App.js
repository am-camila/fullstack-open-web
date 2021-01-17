
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  function handlePersonChange(ev){
    setNewName(ev.target.value)
  }
  function handleNumberChange(ev){
    setNewNumber(ev.target.value)
  }

  function addPerson(ev){
    ev.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.find(p=>p.name.toLowerCase()===newPerson.name.toLowerCase())){
      window.alert(`${newPerson.name} is already added to phonebook`)
    } else{
    setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input type="text" value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input type="text" value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <li key={p.name}>{p.name} {p.number}</li>)}
      </ul>
    
    </div>
  )
}

export default App