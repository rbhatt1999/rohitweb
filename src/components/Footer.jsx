export default function Footer() {
  return (
    <>
      <div className="section-divider" />
      <footer
        style={{
          padding: '24px clamp(24px, 6vw, 80px)',
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '12px',
          color: '#a1a1aa',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          position: 'relative',
          zIndex: 10,
          background: '#06070a',
        }}
      >
        <span>© {new Date().getFullYear()} rohit bhatt</span>
        <span>
          built with next.js · last push 2d ago
          <span className="pulse-dot" />
        </span>
      </footer>
    </>
  )
}
