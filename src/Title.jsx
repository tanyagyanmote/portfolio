import { useEffect, useState } from 'react'
import title from './assets/title.png'
import lights from './assets/lights.png'

export default function Title() {
  const [lightsOn, setLightsOn] = useState(true)
  const toggle = () => setLightsOn(on => !on)

  // Listen for the global "toggle-lights" event from the external hitbox
  useEffect(() => {
    const handler = () => toggle()
    window.addEventListener('toggle-lights', handler)
    return () => window.removeEventListener('toggle-lights', handler)
  }, [])

  return (
    <div className="title-wrap">
      <img src={title} alt="Tanya's Title" className="title-img" />
      <img
        src={lights}
        alt="Lights"
        className={`lights-img ${lightsOn ? 'on' : 'off'}`}
        draggable="false"
      />
    </div>
  )
}
