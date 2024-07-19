import React from 'react'
import Home from './home/Home'
import {Routes,Route, Navigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast';


// rename problem can occur here make C smaller
import Courses from "./courses/Courses"
import Signup from './components/Signup'
import Contact_us from './components/Contact_us'
import { useAuth } from './context/AuthProvider';
 

const App = () => {

  const [authUser , setAuthUser] = useAuth();
  // console.log("printing authuser")
  // console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
          <Routes>
              <Route path = "/" element={<Home/>} />
              <Route path="/course" element={authUser ? <Courses/> : <Navigate to = "/signup"/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/contact" element = {<Contact_us/>} />
            </Routes>
            <Toaster />
      </div>
    </>
  )
}

export default App