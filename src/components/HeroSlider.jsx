import { useEffect, useMemo, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const slideCount = useMemo(() => slides.length, [slides.length])

  useEffect(() => {
    if (slideCount <= 1) {
      return undefined
    }

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount)
    }, 5500)

    return () => clearInterval(timer)
  }, [slideCount])

  if (!slideCount) {
    return null
  }

  const goPrev = () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
  const goNext = () => setCurrent((prev) => (prev + 1) % slideCount)

  const defaultLayoutByAlign = {
    center: {
      containerClass: 'justify-center text-center',
      contentClass: 'mx-auto max-w-[760px]',
      actionsClass: 'justify-center',
    },
    left: {
      containerClass: 'justify-start text-left',
      contentClass: 'mr-auto max-w-[640px]',
      actionsClass: 'justify-start',
    },
    right: {
      containerClass: 'justify-end text-right',
      contentClass: 'ml-auto max-w-[640px]',
      actionsClass: 'justify-end',
    },
  }

  return (
    <section className="relative h-screen min-h-[520px] overflow-hidden bg-black">
      {slides.map((slide, index) => {
        const active = index === current
        const fallbackLayout = defaultLayoutByAlign[slide.align] || defaultLayoutByAlign.center
        const containerClass = slide.containerClass || fallbackLayout.containerClass
        const contentClass = slide.contentClass || fallbackLayout.contentClass
        const actionsClass = slide.actionsClass || fallbackLayout.actionsClass
        const overlayGradient = slide.overlayGradient || 'linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.58))'

        return (
          <div
            key={slide.title}
            className={`absolute inset-0 ${active ? 'hero-fade-active z-10' : 'hero-fade-enter z-0'} transition-all duration-700`}
            style={{
              backgroundImage: `${overlayGradient}, url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.backgroundPosition || 'center',
            }}
          >
            <div className={`container-shell relative z-10 h-full px-4 sm:px-8 md:px-16 lg:px-24 flex items-center ${containerClass}`}>
              <div className={`text-white ${contentClass}`}>
                <h1 className={`font-title text-[2.1rem] md:text-[45px] font-bold leading-[1.2] ${slide.titleClass || ''}`}>{slide.title}</h1>
                <p className={`mt-4 text-[1.05rem] md:text-[18px] leading-[1.5] text-white/90 ${slide.captionClass || ''}`}>{slide.caption}</p>
                <div className={`mt-8 flex flex-wrap gap-4 ${actionsClass}`}>
                  <a
                    href="tel:+919642066661"
                    className="h-[50px] w-[140px] inline-flex items-center justify-center text-[13px] font-title font-bold uppercase tracking-[0.01em] bg-[var(--primary)] border border-[var(--primary)] hover:bg-[#111] hover:border-[#111] transition-colors"
                  >
                    Contact Us
                  </a>
                  <Link
                    to="/gallery"
                    className="h-[50px] w-[160px] inline-flex items-center justify-center text-[13px] font-title font-bold uppercase tracking-[0.01em] border-2 border-white/85 hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="pointer-events-none absolute inset-0 z-20">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          className="pointer-events-auto absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 size-10 md:size-11 rounded-full bg-white/90 text-[#111] hover:bg-white transition-colors inline-flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,.22)]"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          className="pointer-events-auto absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 size-10 md:size-11 rounded-full bg-white/90 text-[#111] hover:bg-white transition-colors inline-flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,.22)]"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </section>
  )
}

export default HeroSlider
