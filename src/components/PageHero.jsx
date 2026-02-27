function PageHero({ title, image }) {
  return (
    <section
      className="relative h-[42vh] min-h-[260px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-shell h-full flex items-center justify-center">
        <h1 className="font-title text-center text-white text-4xl md:text-5xl font-bold tracking-[0.02em]">{title}</h1>
      </div>
    </section>
  )
}

export default PageHero
