import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className="relative sm:flex hidden mr-10">
        <Sidebar/>
        </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      
      </div>
    </div>
  )
}

export default App