import { Link } from 'react-router-dom'
import { FaBalanceScale, FaBuilding, FaFingerprint, FaGlobeAsia, FaUserShield } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import CounterCard from '../components/CounterCard'
import HeroSlider from '../components/HeroSlider'
import SectionHeading from '../components/SectionHeading'
import TestimonialSlider from '../components/TestimonialSlider'
import { blogPosts, counters, heroSlides, practiceItems, testimonials } from '../data/siteData'

const iconMap = [FaBuilding, FaBalanceScale, FaFingerprint]

function HomePage() {
  const [featuredPost] = blogPosts

  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="section-subtitle">Since 2010 Legal Services provider and Legal Adviser</p>
            <h2 className="section-title">About The Firm</h2>
            <p className="mt-6 text-[1.06rem] leading-8 text-[#555]">
              Mr. RAHMAT Advocates & Associates has been practicing and handling cases independently and with a Team of
              Advocates and Senior Advocates with a result-oriented approach, both professionally and ethically.
            </p>
            <p className="mt-4 text-[1.06rem] leading-8 text-[#555]">
              Practice areas include Cyber Crimes & I.T. Laws, Corporate Laws, Criminal Law, Bail Matters, Civil Law,
              Real Estate Laws, Family Law, Domestic Violence, Child Custody, Muslim Law and Legal Services for NRI's in India.
            </p>
            <p className="mt-5 font-title font-medium">Mr. SYED RAHMAT | B.Com, LLB, LLM, (MBA)</p>
          </AnimatedSection>

          <AnimatedSection className="relative" delay={140}>
            <img
              src="https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_45.jpg"
              alt="Advocate Rahmat"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-5 -left-5 md:-left-8 bg-[var(--primary)] text-white p-5 max-w-[240px]">
              <p className="font-title text-3xl font-bold">16+</p>
              <p className="mt-1 text-sm">Years of Professional Legal Experience</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-[var(--surface)]">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              eyebrow="Field Of Practice"
              title="Cyber Law, Corporate Law, Criminal Law, Banking Law & More"
              description="Comprehensive legal representation across litigation, advisory, compliance and strategic dispute resolution for individuals, families, businesses and NRI clients."
            />
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceItems.map((item, index) => {
              const Icon = iconMap[index]
              return (
                <AnimatedSection key={item.title} delay={index * 120}>
                  <article className="h-full border border-[var(--line)] bg-white p-8 hover:shadow-[0_10px_24px_rgba(0,0,0,.08)] transition-shadow">
                    <div className="size-12 rounded-full bg-[#f0e7df] text-[var(--primary)] inline-flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-title mt-5 text-xl">{item.title}</h3>
                    <p className="mt-3 text-[#545454] leading-7">{item.body}</p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading centered title="Why Choose Us" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <AnimatedSection className="bg-[#fcf7f2] border border-[var(--line)] p-8">
              <h3 className="font-title text-3xl text-[var(--primary)]">01</h3>
              <p className="mt-4 leading-7 text-[#505050]">
                Expertise and experience, a strong reputation for results, personal attention, and responsive communication
                across every stage of your case.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-[#fcf7f2] border border-[var(--line)] p-8" delay={130}>
              <h3 className="font-title text-3xl text-[var(--primary)]">02</h3>
              <p className="mt-4 leading-7 text-[#505050]">
                Cost-effective and practical legal strategy, with innovative solutions focused on the best achievable outcome.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {counters.map((counter, index) => (
              <AnimatedSection key={counter.label} delay={index * 80}>
                <CounterCard {...counter} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-[#f8f6f3]">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              title="What Clients Say"
              description="Real feedback from clients who trusted us with critical legal matters."
            />
          </AnimatedSection>

          <div className="mt-10">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading centered title="Latest From Blog" />
          </AnimatedSection>

          <AnimatedSection className="max-w-4xl mx-auto mt-10 border border-[var(--line)] p-6 md:p-8" delay={120}>
            <article className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-42 md:h-full object-cover" />
              <div>
                <h3 className="font-title text-2xl">{featuredPost.title}</h3>
                <p className="text-sm mt-1 text-[#777]">{featuredPost.date}</p>
                <p className="mt-4 text-[#535353] leading-7">{featuredPost.excerpt}</p>
                <Link to="/our-blog" className="inline-flex mt-5 items-center gap-2 text-[var(--primary)] font-title">
                  view all
                </Link>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-[var(--primary)] text-white">
        <div className="container-shell flex flex-col md:flex-row items-center justify-between gap-5">
          <h3 className="font-title text-2xl md:text-3xl">For more Details</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact-us" className="border border-white/70 px-6 py-3 font-title hover:bg-white/15 transition-colors">
              Contact Us
            </Link>
            <a href="tel:+919642066661" className="bg-white text-[var(--primary)] px-6 py-3 font-title hover:bg-[#f2ece7] transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111] text-white">
        <div className="container-shell grid md:grid-cols-3 gap-6">
          <AnimatedSection className="border border-white/20 p-6">
            <FaGlobeAsia size={24} className="text-[var(--primary)]" />
            <h4 className="font-title mt-4 text-xl">Globally NRI’s</h4>
            <p className="mt-2 text-white/75 leading-7">Legal help for local-to-global NRI court, police, family and property matters in India.</p>
          </AnimatedSection>
          <AnimatedSection className="border border-white/20 p-6" delay={120}>
            <FaUserShield size={24} className="text-[var(--primary)]" />
            <h4 className="font-title mt-4 text-xl">Professional Lawyers</h4>
            <p className="mt-2 text-white/75 leading-7">A focused legal team offering strategic guidance, litigation and advisory services.</p>
          </AnimatedSection>
          <AnimatedSection className="border border-white/20 p-6" delay={220}>
            <FaBalanceScale size={24} className="text-[var(--primary)]" />
            <h4 className="font-title mt-4 text-xl">#1 Law Firm 2019</h4>
            <p className="mt-2 text-white/75 leading-7">Recognized by clients for trust, responsiveness and high success in legal representation.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default HomePage
