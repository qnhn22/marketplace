import { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './views/homePage'
import LoginPage from './views/loginPage'
import NavBar from './views/navbar'
import ProfilePage from './views/profilePage'
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

export default App
