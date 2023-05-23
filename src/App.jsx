import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SingleCoctail from './components/SingleCocktail'
import Error from './components/Error'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />}/>
          <Route  path='/cocktail/:id' element={<SingleCoctail/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  )
}

export default App
