export default function BlogCover({ src, fallback, alt = '', className = '', priority = false }) {
  if (!src && !fallback) return null
  const img = (
    <img
      src={fallback || src}
      alt={alt}
      className={className}
      draggable={false}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
    />
  )
  if (!fallback || fallback === src) return img
  return (
    <picture style={{ display: 'contents' }}>
      <source type="image/webp" srcSet={src} />
      {img}
    </picture>
  )
}
