import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4300)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item, index) => {
        const active = current === index

        return (
          <article
            key={item.name + index}
            className={`border p-7 transition-all duration-500 ${
              active
                ? 'border-[var(--primary)] shadow-[0_12px_30px_rgba(0,0,0,.08)] -translate-y-1 bg-white'
                : 'border-[var(--line)] bg-[#fffdfb]'
            }`}
          >
            <p className="text-[1.02rem] leading-7 text-[#4f4f4f]">{item.quote}</p>
            <div className="mt-4 flex gap-1 text-[var(--primary)]">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar key={starIndex} size={13} />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <img src={item.avatar} alt={item.name} className="size-11 rounded-full object-cover" />
              <h3 className="font-title font-medium text-[1rem]">{item.name}</h3>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default TestimonialSlider
