import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg';
import './App.css'
import Footer from './components/Footer';  
import Chart from './components/diagramme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chart />
      <Footer />
    </>
  )
}

export default App