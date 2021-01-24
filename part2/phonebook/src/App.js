import React, { useEffect, useState } from 'react'
import axios from 'axios'
import personService from '../src/service/Persons'

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

const Persons = ({personsList,deletePerson}) => {
return (
<ul>
  {personsList.map(p => <Person person={p} key={p.id} deletePerson={deletePerson}/>)}
</ul>)
}

const Person = ({person, deletePerson}) => {
  return (
    <div>
       <li><span>{ person.name } { person.number }</span>
       <button onClick={ () => deletePerson(person.id) } >delete</button>
       </li>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search,setNewSearch ] = useState('')
  const filteredPersons = persons.filter(p=> p.name.toLowerCase().includes(search))

  useEffect(() => {
    personService.getAll()
    .then(persons => {
      console.log("success ", persons)
      setPersons(persons)
    })
  }, [])

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
      personService.create(newPerson)
      .then(
        returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        }
      )

    }
    setNewName('')
    setNewNumber('')
  }

  function deletePerson (id) {
    console.log("id:",id)
    personService.remove(id)
    .then(
      setPersons(persons.filter (p=> p.id !== id)),
      console.log(id," deleted successfully")
    )
    .catch(error => console.log("error message",error.data) )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons personsList={filteredPersons} deletePerson={ deletePerson}/>
    </div>
  )
}

export default App