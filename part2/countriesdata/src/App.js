import axios from 'axios'
import { useEffect, useState } from 'react';
import Country from './Country';
import SuggestedCountries from './SuggestedCountries';


export default function App() {
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
