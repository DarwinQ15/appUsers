import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/Button.jsx'

function App() {
  let randomQuotes =quotes[Math.floor(Math.random() * quotes.length)]

  const [random, setRamdom] = useState(randomQuotes)

  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#008F7A', '#C34A36', '#D8E4EA', '#4FFBDF']

  const changesColor = Math.floor(Math.random() * colors.length)

  document.body.style = `background : ${colors[changesColor]}`


   let ChangeRandom = () =>{
    randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    setRamdom(randomQuotes)
  }
  return (
    <div className="App" style={{color: colors[changesColor]}}>
      <QuoteBox random={random}/> 
      <Button style={{color: colors[changesColor]}} random={random} ChangeRandom={ChangeRandom}/>
    </div>
  )
}

export default App
