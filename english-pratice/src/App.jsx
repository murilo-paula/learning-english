import './App.css'
import { Link } from 'react-router-dom'

import HEADER from './assets/components/Header'
import womanimg from "./assets/img/happyWoman.png"

function App() {
  return (
    <>
    <div className='bg-gray-300 min-h-screen'>
      <HEADER />
      <main className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='p-10 flex flex-col gap-4 justify-center ml-10'>
          <h2 className='font-bold text-3xl'>Learning English</h2>
          <p className='ml-4 max-w-1xl'>Learn English the right way. Here, you leave theory aside and focus on practice to unlock your speaking skills with confidence.</p>
          
          <Link to='primarypage/Introduction'>
          <button className='px-3 py-1 ml-4 rounded-lg bg-emerald-500 w-fit hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-in-out cursor-pointer'>Ready</button>
          </Link>
        </div> 
        <div className='ml-15'>
          <img src={womanimg} alt="Image of a happy woman" />
        </div>
      </main>
    </div>
    </>
  )
}

export default App
