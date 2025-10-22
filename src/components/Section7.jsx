import './Section.css'
import { useState } from 'react'

function Section7() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="section section-7">
      <div 
        className={`section-content masked-text ${revealed ? 'revealed' : ''}`}
        onClick={() => setRevealed(true)}
      >
        <h1>Destination 5: My bed ( ͡° ͜ʖ ͡°)</h1>
        <ul>
          <li><strong>Description:</strong> hot sweaty butt sex</li>
          <li><strong>Time:</strong> all night</li>
          <li><strong>Attire:</strong> naked af</li>
        </ul>
      </div>
    </section>
  )
}

export default Section7
