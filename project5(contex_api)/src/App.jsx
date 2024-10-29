import { useState,useEffect } from 'react'
import { Themecontext } from './context/theme'
// import './App.css'
import { Theme } from './context/theme'
import ThemeBtn from './themebutton';
import Card from './card';
function App() {
  const [themeMode, setthemeMode] = useState("light");
  let setDark = () => {
    setthemeMode("dark")
  }
  let setLight = () => {
    setthemeMode('light')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <Themecontext value={{ themeMode, setDark, setLight }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </Themecontext>


  )
}

export default App
