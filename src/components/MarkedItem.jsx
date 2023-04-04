import { useMemo } from "react";

export const MarkedItem = ({item, query, onClick}) => {

    const {left, center, rigth} = useMemo(() => getPositions(item, query), [item, query])



    function getPositions(item, query){
        const index = item.title.toLowerCase().indexOf(query);
        const left = item.title.slice(0, index);
        const rigth = item.title.slice(index + query.length);
        const center = item.title.slice(index, index + query.length);

        return {
            left, center, rigth
        }
    }

    function handleClick(){
        onClick(item)
    }


  return (
    <div>
        <a href="#" onClick={handleClick} className='ancor'>
            {left}
            <span className="search__focus">{center}</span>
            {rigth} 
        </a>
    </div>
  )
}
