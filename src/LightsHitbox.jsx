export default function LightsHitbox() {
    const fire = () => window.dispatchEvent(new Event('toggle-lights'))
  
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        fire()
      }
    }
  
    return (
      <div
        className="lights-hitbox"
        role="button"
        tabIndex={0}
        aria-label="Toggle lights"
        onClick={fire}
        onKeyDown={onKey}
      />
    )
  }