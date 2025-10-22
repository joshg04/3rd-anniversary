import './Section.css'
import { useState } from 'react'

function Section6() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="section section-6">
      <div className="section-content">
        <h1>
          Destination 4: 
          <span 
            className={`masked-text ${revealed ? 'revealed' : ''}`}
            onClick={() => setRevealed(true)}
          >
            Cocktails @ Nocturno
          </span>
        </h1>
        <ul>
          <li><strong>Description: If we're not tired, a little dranky drank sounds like fun</strong> </li>
          <li><strong>Time:</strong> Whenever we finish dinner - whenever we feel like leaving</li>
          <li><strong>Attire:</strong> business casual again -- dress code not strict, where whateva!</li>
        </ul>
      </div>
    </section>
  )
}

export default Section6
