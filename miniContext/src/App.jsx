import { useState } from 'react'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Chai aur context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    // they are "children"
  )
}

export default App
