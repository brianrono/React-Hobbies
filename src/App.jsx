import { useEffect, useState } from 'react'
import './App.css'
import HobbiesList from './components/HobbiesList'
import AddHobby from './components/AddHobby'

function App() {
  const url = 'http://localhost:3000/hobbies'
  const [hobbies, setHobbies] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setHobbies(data))
  }, [])

  return (
    <>
      <HobbiesList hobbies={hobbies} setHobbies={setHobbies} />
      <AddHobby url={url} setHobbies={setHobbies} hobbies={hobbies} />
    </>
  )
}

export default App
