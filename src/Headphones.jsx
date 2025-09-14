import { useState, useRef, useEffect } from 'react'
import headphones from './assets/headphones.png'
import notes1 from './assets/notes1.png'
import notes2 from './assets/notes2.png'

export default function Headphones() {
  const [playing, setPlaying] = useState(false)
  const [which, setWhich] = useState(1)
  const timerRef = useRef(null)
  const intervalRef = useRef(null)

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setPlaying(false)
  }

  useEffect(() => () => stop(), [])

  const handleClick = () => {
    if (playing) return
    setPlaying(true)
    setWhich(1)

    intervalRef.current = setInterval(() => {
      setWhich(w => (w === 1 ? 2 : 1))
    }, 250)

    timerRef.current = setTimeout(stop, 5000)
  }

  return (
    <div className="headphones-wrap" onClick={handleClick} role="button" tabIndex={0}>
      <img src={headphones} alt="Headphones" className="headphones-img" />
      <img
        src={notes1}
        alt=""
        className={`notes notes1 ${playing && which === 1 ? 'visible' : ''}`}
        aria-hidden="true"
      />
      <img
        src={notes2}
        alt=""
        className={`notes notes2 ${playing && which === 2 ? 'visible' : ''}`}
        aria-hidden="true"
      />
    </div>
  )
}
