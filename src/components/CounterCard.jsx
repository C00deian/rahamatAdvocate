import { useEffect, useMemo, useRef, useState } from 'react'

function CounterCard({ value, label, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const duration = useMemo(() => 1500, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) {
      return undefined
    }

    const start = performance.now()
    let frame = 0

    const update = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(eased * value))

      if (progress < 1) {
        frame = requestAnimationFrame(update)
      }
    }

    frame = requestAnimationFrame(update)

    return () => cancelAnimationFrame(frame)
  }, [duration, started, value])

  return (
    <article ref={ref} className="bg-white text-center border border-[var(--line)] p-7 md:p-9  uppercase text-black font-semibold text-5xl">
      <p className="font-title text-4xl md:text-5xl font-bold text-[var(--primary)]">
        {display}
        {suffix}
      </p>
      <p className="mt-3 text-[1.2rem] text-[#4e4e4e]">{label}</p>
    </article>
  )
}

export default CounterCard
