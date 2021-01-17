import React, { useState } from 'react'

const Filter = ({search,handleSearch}) => {
  return(
  <div>
    <span>filter shown with <input type="text" value={search} onChange={handleSearch}></input></span>
  </div>
  )
}

const PersonForm =({newName,newNumber,handleNumberChange,handlePersonChange,addPerson }) => {
  return (
  <div>
    <form onSubmit={addPerson}>
      <div>name: <input type="text" value={newName} onChange={handlePersonChange}/></div>
      <div>number: <input type="text" value={newNumber} onChange={handleNumberChange}/></div>
      <div><button type="submit">add</button></div>
    </form>
  </div>)
}

const Persons = ({personsList}) => {
return (
<ul>
  {personsList.map(p => <Person person = {p} key={p.name}/>)}
</ul>)
}

const Person = ({person}) => {
  return (
    <div>
       <li>{person.name} {person.number}</li>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search,setNewSearch ] = useState('')
  const filteredPersons = persons.filter(p=> p.name.toLowerCase().includes(search))

  function handlePersonChange(ev){
    setNewName(ev.target.value)
  }
  function handleNumberChange(ev){
    setNewNumber(ev.target.value)
  }
  
  function handleSearchChange(ev){
    setNewSearch(ev.target.value)
  }

  function addPerson(ev){
    ev.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.find(p=>p.name.toLowerCase()===newPerson.name.toLowerCase())){
      window.alert(`${newPerson.name} is already added to phonebook`)
    } else {
    setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons personsList={filteredPersons}/>
    </div>
  )
}

export default App