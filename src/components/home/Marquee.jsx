const TECH = [
  'Ruby on Rails', 'React', 'Python', 'LangChain', 'Gemini', 'PostgreSQL',
  'Flask', 'Redux', 'Tailwind', 'Node.js', 'SSE streaming', 'REST APIs',
]

export default function Marquee() {
  const items = [...TECH, ...TECH]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((tech, i) => <span className="marquee-item" key={i}>{tech}</span>)}
      </div>
    </div>
  )
}
