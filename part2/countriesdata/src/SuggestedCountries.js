export default function SuggestedCountries ({countries,searchFun}) {

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

