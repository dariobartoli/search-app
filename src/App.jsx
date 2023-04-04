import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'


const people = [
  {
    id: 'people-01',
    title: 'Juan Martinez',
  },
  {
    id: 'people-02',
    title: 'Maria Perez',
  },
  {
    id: 'people-03',
    title: 'Esteban Quito',
  },
  {
    id: 'people-04',
    title: 'Jualiana Ortega',
  },
  {
    id: 'people-05',
    title: 'Lucas Molina',
  },
  {
    id: 'people-06',
    title: 'Exequiel Juarez',
  },
  {
    id: 'people-07',
    title: 'Pablo Paredes',
  },
  {
    id: 'people-08',
    title: 'Victoria Zalasar',
  }
]

const calendar = [
  {
    id: 'calendar-01',
    title: 'Check emails',
  },
  {
    id: 'calendar-02',
    title: 'Gift Toys',
  },
  {
    id: 'calendar-03',
    title: 'Play soccer with the team',
  },
  {
    id: 'calendar-04',
    title: 'Go to the hospital',
  },
  {
    id: 'calendar-05',
    title: 'Do exercise',
  },
  {
    id: 'calendar-06',
    title: 'Go to the cinema with the family',
  },
  {
    id: 'calendar-07',
    title: 'Watch the history channel on tv',
  },
  {
    id: 'calendar-08',
    title: 'Go out with friends',
  },
]

const emails = [
  {
    id: 'email-01',
    title: 'Coming events',
  },
  {
    id: 'email-02',
    title: 'Participate in the survey',
  },
  {
    id: 'email-03',
    title: 'Report of results',
  },
  {
    id: 'email-04',
    title: 'Check the list of task',
  },
  {
    id: 'email-05',
    title: 'Answer emails',
  }
]
function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all');

  const handleClick = (e) =>{
    const op = e.target.name

    switch (op) {
      case 'all':
        setData([...people, ...calendar, ...emails]);
        setCurrentOption('all');
        break;
      case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;
      case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;
      case 'email':
        setData([...emails]);
        setCurrentOption('email');
        break;
    
      default:
    }
  }

  function handleItemSelected(item){
    setSelection(item)
  }



  return (
    <div className='index__container'>
      <div className='box__container'>
        <div className='button__container'>
          <button onClick={handleClick} name='all' className='button__filter'>All</button>
          <button onClick={handleClick} name='people' className='button__filter'>People</button>
          <button onClick={handleClick} name='calendar' className='button__filter'>Calendar</button>
          <button onClick={handleClick} name='email' className='button__filter'>Email</button>
        </div>

        {selection ? <p>You selected: <span className='selection'>{selection.title}</span></p> : ''}
        <SearchBar items={data} onItemSelected={handleItemSelected}/>
      </div>
    </div>
  )
}

export default App
