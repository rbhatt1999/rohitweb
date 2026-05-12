'use client'
import { useState, useEffect, useCallback } from 'react'

const RECS = [
  {
    text: "Rohit is a fantastic software engineer; his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively and his work ethic blew me away. He views writing clean, accessible code as a calling and is great at identifying areas where we can improve UI. He communicates proactively on challenges and his insight is invaluable in a mob programming session. I can't recommend him enough!",
    name: 'Asha Vijayan',
    role: 'Full Stack Developer · studied together',
  },
  {
    text: "Rohit has a strong technical background in web development and consistently demonstrates a deep understanding of the latest technologies and development methodologies. He consistently delivers high-quality work, meeting project deadlines and exceeding expectations. He is also a great team player, always willing to go the extra mile to ensure project success.",
    name: 'Dewanshi Jain',
    role: 'Engineering Lead · managed Rohit directly',
  },
  {
    text: "Rohit is an exceptional individual who possesses strong leadership qualities and remarkable efficiency. He demonstrates the ability to take charge and proactively thinks of solutions before problems arise. His forward-thinking approach enables him to anticipate challenges and develop innovative strategies. He consistently meets deadlines and delivers exceptional results.",
    name: 'Emmanuella Adu',
    role: 'Data & Product Analyst · worked on same team',
  },
  {
    text: "I highly recommend Rohit as a talented Full Stack Developer, proficient in React and Ruby on Rails. His ability to create dynamic and interactive user interfaces is unparalleled. Rohit's proficiency in Ruby on Rails is equally impressive — he seamlessly integrates frontend and backend technologies to create smooth user experiences.",
    name: 'Amare Kassa',
    role: 'Software Engineer · AI & LLM Systems · studied together',
  },
  {
    text: "I am delighted to recommend Rohit Bhatt as a Software Developer. With his exceptional organizational skills, strong technical abilities, and excellent team-oriented approach, he consistently contributes to successful outcomes. As a team member, Rohit is approachable, supportive, and always willing to lend a helping hand.",
    name: 'Samuel Ntow Kyere',
    role: 'Software & Automation Engineer · worked on same team',
  },
  {
    text: "I highly recommend Rohit Bhatt for his work on the Spacehub project built with React and Redux. Rohit showed a deep understanding of both technologies and demonstrated exceptional skills in developing dynamic and responsive web applications. His ability to work collaboratively and attention to detail were invaluable assets to the project.",
    name: 'Gaurav Gangwar',
    role: 'Frontend Developer · worked on same team',
  },
]

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0)

  const prev = useCallback(() => setIdx(i => (i - 1 + RECS.length) % RECS.length), [])
  const next = useCallback(() => setIdx(i => (i + 1) % RECS.length), [])

  useEffect(() => {
    const t = setTimeout(next, 6000)
    return () => clearTimeout(t)
  }, [idx, next])

  return (
    <div className="tc-wrap">
      {RECS.map((r, i) => (
        <div key={i} className={`tc-slide${i === idx ? ' active' : ''}`}>
          <p className="quote-text">{r.text}</p>
          <div>
            <div className="quote-by">
              <div className="quote-avatar" />
              <div>
                <div className="quote-name">{r.name}</div>
                <div className="quote-role">{r.role}</div>
              </div>
            </div>
            <div className="tc-nav">
              <button className="tc-btn" onClick={prev} aria-label="Previous">‹</button>
              <button className="tc-btn" onClick={next} aria-label="Next">›</button>
              <span className="tc-counter">{idx + 1} / {RECS.length}</span>
              <div className="tc-dots" style={{ marginTop: 0 }}>
                {RECS.map((_, j) => (
                  <button
                    key={j}
                    className={`tc-dot${j === idx ? ' active' : ''}`}
                    onClick={() => setIdx(j)}
                    aria-label={`Go to testimonial ${j + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
