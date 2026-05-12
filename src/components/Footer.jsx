export default function Footer() {
  return (
    <footer style={{
      padding: '48px clamp(24px, 6vw, 80px)',
      borderTop: '1px solid var(--border)',
      fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
      fontSize: '12.5px',
      color: 'var(--fg4)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      position: 'relative',
      zIndex: 10,
      background: 'var(--bg)',
      maxWidth: '1240px',
      margin: '0 auto',
    }}>
      <span>© {new Date().getFullYear()} Rohit Bhatt · Built with Next.js, deployed on Vercel</span>
      <span style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <a href="https://github.com/rbhatt1999"                 target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        <a href="https://www.linkedin.com/in/rohitbhatt-dev/"   target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        <a href="https://twitter.com/Rohit_Bhatt_"              target="_blank" rel="noreferrer" className="footer-link">Twitter</a>
        <a href="https://medium.com/@rbhatt199924"              target="_blank" rel="noreferrer" className="footer-link">Medium</a>
      </span>
    </footer>
  )
}
