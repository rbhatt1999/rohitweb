import Link from 'next/link'

export default function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.label} className="crumb">
          {i > 0 && <span className="crumb-sep" aria-hidden>/</span>}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}
