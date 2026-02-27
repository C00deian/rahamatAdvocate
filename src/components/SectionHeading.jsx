function SectionHeading({ eyebrow, title, centered = false, description = '' }) {
  return (
    <div className={centered ? 'text-center mx-auto max-w-5xl' : 'max-w-6xl'}>
      {eyebrow ? <p className="section-subtitle">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="mt-4 text-[1.08rem] leading-6 text-black/90">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
