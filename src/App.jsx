import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)


  const coffees = useLoaderData();
  return (
   <>

   <h1 className='text-6xl text-purple-500'>Hot Cold Coffee: {coffees.length}</h1>


   </>
  )
}

export default App

