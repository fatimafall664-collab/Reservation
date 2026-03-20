import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Serie   from './components/serie'
import Film from './components/film'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Film />
      <Serie />
    </>
  )
}

export default App
