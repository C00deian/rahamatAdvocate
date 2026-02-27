import { Link } from 'react-router-dom'
import { FaBalanceScale, FaBuilding, FaFingerprint, FaGlobeAsia, FaUserShield } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import CounterCard from '../components/CounterCard'
import HeroSlider from '../components/HeroSlider'
import SectionHeading from '../components/SectionHeading'
import TestimonialSlider from '../components/TestimonialSlider'
import { blogPosts, counters, heroSlides, practiceItems, testimonials } from '../data/siteData'
import {FaSuitcase ,FaSkull } from "react-icons/fa6";

const iconMap = [FaSuitcase,FaBuilding, FaSkull]

function HomePage() {
  const [featuredPost] = blogPosts

  return (
    <>
      <HeroSlider slides={heroSlides} />
      <section className="relative z-20 -mt-10 md:-mt-28 pb-[4.5rem] md:pb-[6rem] bg-transparent">
        <div className="container-shell grid lg:grid-cols-2 gap-0 items-center">
          <AnimatedSection className="bg-[#f5f5f5] p-8 md:p-14">
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

          <AnimatedSection className="relative lg:pl-9" delay={140}>
            <img
              src="https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_45.jpg"
              alt="Advocate Rahmat"
              className="w-full h-[430px] md:h-135 object-cover shadow-[0_0_40px_rgba(0,0,0,.25)]"
            />
            <div className="absolute -bottom-5 -left-5 md:-left-2 bg-[var(--primary)] text-white p-5 max-w-[15rem]">
              <p className="font-title text-3xl font-bold">16+</p>
              <p className="mt-1 text-sm">Years of Professional Legal Experience</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-(--surface)">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              eyebrow="Field Of Practice"
              title="Field Of Practice"
              description="CYBER LAW & I.T. LAWS, CORPORATE LAW, START-UPS, COMPANY LAW, EMPLOYMENT & SERVICE LAWS, CRIMIAL LAW, BANKING LAW, CIVIL LAW, INTELLECTUAL PROPERTY RIGHT LAW, COPYRIGHT, TRADEMARKS, PATENTS, BAIL, ANTICIPATORY BAIL, WHITE COLLAR & ECONOMICS OFFENCES, CHEATING, MONEY LAUNDERING, NBW, POCSO, CHILD ABUSE, HARASSMENT, ASSAULT, RAPE, MURDER, BANKING & INSOLVENCY, N.I.138 ACT, BUSINESS & RECOVERY LAWS, NBFC, SARFAESI & DRT Cases."
            />
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceItems.map((item, index) => {
              const Icon = iconMap[index]
              return (
                <AnimatedSection key={item.title} delay={index * 120}>
                  <article className="h-full border border-(--line) bg-white p-8 text-center hover:shadow-[0_10px_24px_rgba(0,0,0,.08)] transition-shadow flex flex-col items-center">
                    <div className="size-12 text-(--primary) flex items-center justify-center">
                      <Icon size={40} />
                    </div>

                    <h3 className="font-title mt-5 text-xl font-semibold">{item.title}</h3>

                    <p className="mt-3 text-[#545454] leading-6 max-w-[42ch]">
                      {item.body}
                    </p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-[4.8rem] md:py-24 bg-[#f5f5f5]">
        <div className="container-shell">
          <AnimatedSection className="text-center">
            <h2 className="font-title text-[1.35rem] md:text-[2.25rem] leading-none font-semibold text-[#0f1419]">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-9 items-start">
            <AnimatedSection className="bg-white border-l-[3px] border-[var(--primary)] px-6 py-7 md:px-10 md:py-10">
              <h3 className="font-title text-[2.15rem] leading-none font-semibold text-[var(--primary)]">01</h3>
              <p className="mt-5 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                Expertise and experience: Clients look for legal consultants who have the knowledge and experience to handle their specific legal issue.
              </p>
              <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                Reputation: A legal consultant with a good reputation for providing quality legal services and positive results is more likely to attract new clients.
              </p>
              <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                Personal connection: Some clients prefer to work with a legal consultant they feel comfortable with and can trust.
              </p>
              <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                Availability and responsiveness: Clients appreciate a legal consultant who is accessible and responsive to their needs and questions.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white border-l-[3px] border-(--primary) px-6 py-7 md:px-10 md:py-10" delay={130}>
              <h3 className="font-title text-[2.15rem] leading-none font-semibold text-(--primary)">02</h3>
              <p className="mt-5 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                Cost-effectiveness: Clients often look for legal consultants who provide quality legal services at a fair price.
              </p>
              <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72] ">
                Results-oriented approach: Clients prefer legal consultants who have a results-oriented approach and work hard to achieve the best outcome for their case.
              </p>
              <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                Innovative solutions: Clients appreciate legal consultants who bring new and innovative solutions to their legal challenges.
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

      <section className="py-[4.5rem] md:py-[6rem] bg-[#f8f6f3]">
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

      <section className="py-[4.5rem] md:py-[6rem] bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading centered title="Latest From Blog" />
          </AnimatedSection>

          <AnimatedSection className="max-w-4xl mx-auto mt-10 border border-[var(--line)] p-6 md:p-8" delay={120}>
            <article className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-[10.5rem] md:h-full object-cover" />
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
