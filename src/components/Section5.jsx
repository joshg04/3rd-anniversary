import './Section.css'
import { useState } from 'react'

function Section5() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="section section-5">
      <div className="section-content">
        <h1>
          Destination 3: 
          <span 
            className={`masked-text ${revealed ? 'revealed' : ''}`}
            onClick={() => setRevealed(true)}
          >
            Dinner @ Anima by Edo
          </span>
        </h1>
        <ul>
          <li><strong>Description:</strong> Food and drinks at somewhere a little nicer than just sushi or kbarbs</li>
          <li><strong>Time:</strong> 6:15PM - whenever</li>
          <li><strong>Attire:</strong> Business Casual -- nothing too fancy, date night attire</li>
        </ul>
      </div>
    </section>
  )
}

export default Section5
