import './Section.css'
import { useState } from 'react'

function Section3() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="section section-3">
      <div className="section-content">
        <h1>
          Destination 1: 
          <span 
            className={`masked-text ${revealed ? 'revealed' : ''}`}
            onClick={() => setRevealed(true)}
          >
            Oasis Pottery
          </span>
        </h1>
        <ul>
          <li><strong>Description:</strong> I thought we should MAKE something to remember our 3rd anniversary so our first stop is something FUN!</li>
          <li><strong>Time:</strong> 11:00AM - 1:00PM</li>
          <li><strong>Attire:</strong> Wear something you don't mind getting dirty</li>
        </ul>
      </div>
    </section>
  )
}

export default Section3
