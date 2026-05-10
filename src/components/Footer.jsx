export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1f2128',
      padding: '22px 48px',
      fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
      fontSize: '12px', color: '#71717a',
      display: 'flex', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '8px',
      position: 'relative', zIndex: 10,
      background: 'rgba(6,7,10,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <span>© {new Date().getFullYear()} rohit bhatt</span>
      <span>
        built with next.js · last push 2d ago
        <span className="pulse-dot" />
      </span>
    </footer>
  )
}
