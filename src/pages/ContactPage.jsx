import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Thank you. Your message has been noted.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <PageHero
        title="Contact Us"
      />
      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              eyebrow="Contact"
              title="Let’s Discuss Your Legal Matter"
              description="Reach us by phone, email, or send your details and we will connect with you promptly."
            />
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: FaPhoneAlt, title: 'Call', value: '+91 96420 66661' },
              { icon: FaEnvelope, title: 'Email', value: 'contact@rahmatadvocate.com' },
              { icon: FaMapMarkerAlt, title: 'Office', value: 'Mehdipatnam, Hyderabad, India' },
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <AnimatedSection key={item.title} delay={index * 110}>
                  <article className="border border-(--line) p-6 bg-[#fdfaf7] text-center">
                    <Icon size={18} className="mx-auto text-(--primary)" />
                    <h3 className="font-title text-xl mt-3">{item.title}</h3>
                    <p className="text-[#575757] mt-2">{item.value}</p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>


          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 mt-12">
            <AnimatedSection>
              <iframe
                title="office-map"
                className="w-full h-105 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Mehdipatnam%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <form onSubmit={handleSubmit} className="border border-(--line) bg-[#fcf8f4] p-6 md:p-8 space-y-4">
                <h3 className="font-title text-2xl">Send a Message</h3>
                <input
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  required
                  placeholder="Your Name"
                  className="w-full h-12 px-4 border border-[#d8cec3] bg-white"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  required
                  placeholder="Email Address"
                  className="w-full h-12 px-4 border border-[#d8cec3] bg-white"
                />
                <input
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="Phone Number"
                  className="w-full h-12 px-4 border border-[#d8cec3] bg-white"
                />
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  required
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-[#d8cec3] bg-white resize-none"
                />
                <button type="submit" className="btn-primary">Submit</button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
