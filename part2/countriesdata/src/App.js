import axios from 'axios'
import { useEffect, useState } from 'react';

function Country({country}){
  return(
    <div>
      <h2>{country.name}</h2>
      <span>capital: {country.capital}</span>
      <br/>
      <span>population: {country.population}</span>
      <h3>languages</h3>
      <ul>
      {country.languages.map( l =>
      <li key={l.name}>{l.name}</li>
      )}
      </ul>
      <img src={country.flag} alt={`flag of ${country.name}`} style={{maxHeight:120, maxWidth:200}}></img>
    </div>
  )
} 

function SuggestedCountries ({countries,searchFun}) {
function updateSearch(name){
 searchFun(name)
  }

  return(
    <div>
      <ul>
    {countries.map(c=>
       <li key={c.name}>
         {c.name}
         <span style={{margin:3}}>
         <button onClick={()=>updateSearch(c.name)}>show</button>
         </span>
         </li>)} 
      </ul>
 </div>
  )
}

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setNewSearch] = useState('');
  const countryFound = displaySearchResults();

 useEffect( () => {
   axios 
   .get('https://restcountries.eu/rest/v2/all')
   .then( response => {
     setCountries(response.data)
   })
   }, []
 )
 function handleSearchChange(ev){
  setNewSearch(ev.target.value)
 }

 function displaySearchResults(){
  const results = countries.filter(c=> c.name.toLowerCase().includes(search.toLowerCase()))
  if(results.length > 10 && results.length !== 250){
    return (
      <div>
        <span>Too many matches, specify another filter</span>
      </div>
    )
  }
  if(results.length > 1 && results.length < 10){
    return (
      <SuggestedCountries countries={results} searchFun={setNewSearch}/>
    )
  }
  if(results.length === 1){
    const found = results[0]
    console.log("country found", found.name);
   return(
      <Country country={found} />
      )
  }

 }

  return (
    <div>
      <span>find countries <input type="text" 
        value={search} onChange={handleSearchChange}></input></span>
      {countryFound}
    </div>
  );
}

export default App;
