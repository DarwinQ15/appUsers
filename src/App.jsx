import { useState } from 'react'
import reactLogo from './assets/react.svg'
import quotes from './quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button.jsx'

function App() {
  let randomQuotes = Math.floor(Math.random() * quotes.length)

  const [random, setRamdom] = useState(randomQuotes)

  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']

  const changesColor = Math.floor(Math.random() * colors.length)

  document.body.style = `background : ${colors[changesColor]}`


   const Cambio = () =>{
    randomQuotes = Math.floor(Math.random() * quotes.length)
    setRamdom(randomQuotes)
  }
  return (
    <div className="App">
      <QuoteBox random={random} Cambio={Cambio}/>
    </div>
  )
}

export default App
