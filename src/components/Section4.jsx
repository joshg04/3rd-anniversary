import './Section.css'
import { useState } from 'react'

function Section4() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="section section-4">
      <div className="section-content">
        <h1>
          Destination 2: 
          <span 
            className={`masked-text ${revealed ? 'revealed' : ''}`}
            onClick={() => setRevealed(true)}
          >
            Brunch @ Somewhere! I haven't figured it out while making this yet LOL
          </span>
        </h1>
        <ul>
          <li><strong>Description:</strong> When we first started dating we would always go out for breakfast cause I didn't have anything at my house LOL</li>
          <li><strong>Time:</strong> 1:00PM - whenever</li>
          <li><strong>Attire:</strong> Whatever you wore to the last place</li>
        </ul>
      </div>
    </section>
  )
}

export default Section4
