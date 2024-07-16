import React from 'react'
import Home from './home/Home'
import {Routes,Route} from "react-router-dom"

// rename problem can occur here make C smaller
import Courses from "./courses/Courses"
import Signup from './components/Signup'

    


const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
          <Routes>
              <Route path = "/" element={<Home/>} />
              <Route path="/course" element={<Courses/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>
      </div>
    </>
  )
}

export default App