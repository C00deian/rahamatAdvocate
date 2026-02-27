function SectionHeading({ eyebrow, title, centered = false, description = '' }) {
  return (
    <div className={centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow ? <p className="section-subtitle">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="mt-4 text-[1.03rem] leading-7 text-[#575757]">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
