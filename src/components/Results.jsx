import React from 'react'
import { useState, useMemo, useEffect } from 'react'
import { MarkedItem } from './MarkedItem';

const Results = ({items, onItemSelected, query, onResultsCalculated}) => {
    const [results, setResults] = useState([]);
    const filteredItems = useMemo(() => findMatch(items, query), [items, query]) ;

    useEffect(() => {
        onResultsCalculated(results);
    }, [results])
    


    function findMatch(items, query){
        const res = items.filter(i => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length >0
        })
        setResults(res)
        return res;
    }



  return (
    <div className='result__container'>
        {
            query != '' ? 
            filteredItems.map(item => <MarkedItem key={item.id} item={item} onClick={onItemSelected} query={query}/>)
            : ''
        }
    </div>
  )
}

export default Results