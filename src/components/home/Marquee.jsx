const ITEMS = [
  'Indie startups', '·', 'SaaS teams', '·', 'Open source', '·',
  'YC founders', '·', 'Design studios', '·', 'AI labs', '·',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-wrap">
      <span className="marquee-label">Worked with</span>
      <div className="marquee-overflow">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
