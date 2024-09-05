import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeartAnimation from './HeartAnimation'

const gifs = [
  "https://media.tenor.com/4Ijycn6xFzUAAAAi/mochi-blue-roses.gif",
  "https://media.tenor.com/Lh-4qWyOqmsAAAAi/peach-cat.gif",
  "https://media.tenor.com/sV2IT_jzKj4AAAAi/mochi-mochimochi.gif",
  "https://media.tenor.com/cyjenChBe1cAAAAi/peach-goma.gif",
  "https://media.tenor.com/kWlwZ9Hy6TAAAAAi/peach-goma-goma.gif"
]

const messages = [
  "No, I will not",
  "Are you sure?",
  "Please, pookie",
  "I'm gonna cry",
]

const apologyMessage = "Hey love, I'm really sorry for falling asleep without you last night. I miss our late-night talks and cuddles. Please forgive me. ❤️";

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState('')
  const [gif, setGif] = useState(gifs[0])
  const [message, setMessage] = useState(messages[0])
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (count < 4) {
      setMessage(messages[count])
      setGif(gifs[count])
    }
  }, [count])

  useEffect(() => {
    if (state === 'success') {
      setMessage(messages[0])
      setCount(4)
      setGif(gifs[4])
    }
  }, [state])

  return (
    <>
      {state === 'success' &&
        <HeartAnimation />}
      <header className="App-header-apology">
        <h3>
          To My Dearest Love,
        </h3>
      </header>

      <div>
        <a target="_blank" rel="noopener noreferrer">
          <img src={gif} className="gif" alt="Peach and Goma GIF" />
        </a>

      </div>

      {state === 'success' ? (
        <div className="success-container">
          <p className="success-message">I love you,La9mar ta33i ezin ,Nedou! ❤️</p>

        </div>

      ) : (
        <>
          <div className="apology-container">
            <p className="apology-message">{apologyMessage}</p>
          </div>
          <div className='buttons'>
            <button
              className="button-success"
              style={{
                fontSize: count === 0 ? '1em' : count === 1 ? '1.5em' : count === 2 ? '2em' : '2.5em',
              }}
              onClick={() => {
                setState('success')
              }}
            >
              Yes, Please!!
            </button>
            <button
              className="button-warning"
              style={{
                fontSize: '1em',
              }}
              onClick={() => setCount((count) => count + 1)}
            >
              {message}
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default App