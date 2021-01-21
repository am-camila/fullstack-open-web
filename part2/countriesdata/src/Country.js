import Weather from './Weather';

export default function Country({country}){

  return(
    <div>
      <h2>{country.name}</h2>
      <span>capital: {country.capital}</span>
      <br/>
      <span>population: {country.population}</span>
      <h3>Spoken languages</h3>
      <ul>
      {country.languages.map( l =>
      <li key={l.name}>{l.name}</li>
      )}
      </ul>
      <img src={country.flag} alt={`flag of ${country.name}`} style={{maxHeight:120, maxWidth:200}}></img>
      <Weather city={country.capital}/>
    </div>
  )
}

