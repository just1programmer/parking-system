import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Form from './Form'
export default function Layout() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Form/>}/>
            <Route exact path='/test' element={<h1>Test</h1>}/>
        </Routes>
    </BrowserRouter>
  )
}
