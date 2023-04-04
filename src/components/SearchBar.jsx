import React from 'react'
import { useState } from 'react'
import Results from './Results';

export const SearchBar = ({items, onItemSelected}) => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([])

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value)
    }

    function handleResults(items){
        setResult(items);
    }


  return (
    <div>
        {result && <p><span className={`${result.length === 0? "" : "green"}`}>{result.length}</span> results</p>}
        <input type="text" onChange={handleChange} value={query} className='input__search'/>
        <Results items={items} onItemSelected={onItemSelected} query={query} onResultsCalculated={handleResults}/>
    </div>
  )
}
