import { FaQuoteLeft, FaStar } from 'react-icons/fa'

function TestimonialSlider({ testimonials }) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((item, index) => {
        return (
          <article
            key={item.name + index}
            className="text-center"
          >
            <div className="mx-auto size-12 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] inline-flex items-center justify-center">
              <FaQuoteLeft size={20} />
            </div>
            <p className="mx-auto mt-4 max-w-[23ch] text-[1.50rem] leading-8 text-[#202020] italic">{item.quote}</p>
            <div className="mt-5 flex justify-center gap-1 text-[#f2ab39]">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar key={starIndex} size={18} />
              ))}
            </div>
            <div className="mt-6 flex flex-col items-center">
              <img src={item.avatar} alt={item.name} className="size-18 rounded-full object-cover" />
              <h3 className="mt-5 font-title text-[0.85rem] font-semibold tracking-[0.09em] uppercase">{item.name}</h3>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default TestimonialSlider
