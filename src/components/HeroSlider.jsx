import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const slideCount = useMemo(() => slides.length, [slides.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount)
    }, 5500)

    return () => clearInterval(timer)
  }, [slideCount])

  return (
    <section className="relative h-[86vh] min-h-[520px] overflow-hidden bg-black">
      {slides.map((slide, index) => {
        const active = index === current

        return (
          <div
            key={slide.title}
            className={`absolute inset-0 ${active ? 'hero-fade-active z-10' : 'hero-fade-enter z-0'} transition-all duration-700`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container-shell h-full flex items-center">
              <div className="max-w-3xl text-white pt-12">
                <h1 className="font-title text-4xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                <p className="mt-6 text-[1.1rem] md:text-[1.25rem] leading-8 text-white/90">{slide.caption}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="tel:+919642066661" className="btn-primary">contact us</a>
                  <Link to="/gallery" className="btn-outline">Gallery</Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="absolute z-20 bottom-7 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-8 rounded-full transition-all ${index === current ? 'bg-[var(--primary)]' : 'bg-white/55'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
