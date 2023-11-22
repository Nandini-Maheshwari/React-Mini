import { useState } from 'react'
import { ThemeProvider } from './Context/Theme'
import { useEffect } from 'react'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'


function App() {

  const [themeMode, setThemeMode] = useState("light")
  // hooks can be called in a functional component only
  // therefore, themeMode can be defined here only not in Theme.js

  const lightTheme = () => {
    setThemeMode("light")
  }
  
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App