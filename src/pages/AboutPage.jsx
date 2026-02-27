import { Link } from 'react-router-dom'
import { FaLongArrowAltRight, FaUserCircle } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import CounterCard from '../components/CounterCard'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import aboutMainImage from '../assets/about/af-2048x1365.png'
import aboutPortraitImage from '../assets/home/Rahmat.com_45.jpg'
import aboutExpertiseImage from '../assets/about/10.jpg'
import aboutOverlayImage from '../assets/about/12.jpg'
import aboutVisionBgImage from '../assets/gallery/Rahmat.com_46.jpg'
import aboutGalleryOne from '../assets/about/WhatsApp-Image-2023-01-31-at-13.26.04.jpeg'
import aboutGalleryTwo from '../assets/gallery/WhatsApp-Image-2023-01-31-at-13.26.02.jpeg'
import aboutGalleryThree from '../assets/gallery/WhatsApp-Image-2023-01-31-at-13.26.03-1.jpeg'

const progressItems = [
  { label: 'Corporate Cases', score: 90 },
  { label: 'Criminal Cases', score: 80 },
  { label: "NRI' Cases", score: 70 },
]

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />

      <section className="py-8 md:py-10 bg-[#efefef]">
        <div className="container-shell space-y-6">
          <div className="grid lg:grid-cols-2 gap-0 border border-[#dbdbdb] overflow-hidden">
            <AnimatedSection className="relative">
              <img
                src={aboutMainImage}
                alt="About the firm"
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
              <img
                src={aboutPortraitImage}
                alt="Advocate portrait"
                className="absolute left-3 bottom-3 md:left-5 md:bottom-5 w-28 h-36 md:w-38 md:h-52 object-cover border-3 border-white shadow-[0_10px_20px_rgba(0,0,0,.35)]"
              />
            </AnimatedSection>

            <AnimatedSection delay={120} className="bg-[#060a10] text-white p-7 md:p-10">
              <h2 className="font-title text-[2rem] md:text-[2.5rem] leading-none font-bold">About The Firm</h2>
              <p className="mt-4 text-[#8d98a7] leading-8 text-[1.03rem]">
                Since 2010 Legal Services provider and Legal Adviser. Mr. RAHMAT Advocates & Associates has been
                practicing and handling cases independently and with a Team of Advocates, Associates and with Senior
                Advocates with a result-oriented approach, both professionally and ethically and has now acquired many
                years of experience in Cyber Crimes & I.T. Laws, Corporate Laws, International laws, Criminal Law,
                Bail Matters, Civil Law, Real Estate Laws, Family laws, Domestic Violence, Child Custody and legal
                services for NRI&apos;s in India.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 border border-[#dbdbdb] overflow-hidden">
            <AnimatedSection className="bg-[#060a10] text-white p-7 md:p-10">
              <h2 className="font-title text-[2rem] md:text-[2.5rem] leading-none font-bold">Our Expertise</h2>
              <p className="mt-4 text-[#8d98a7] leading-8 text-[1.03rem]">
                The members of a professional lawyers team typically have specialized knowledge and experience in
                specific areas of law, such as corporate law, real estate law, criminal law, and so on. They work
                together to provide clients with a full range of legal services, including advice and representation
                in legal matters, negotiations, and litigation.
              </p>

              <div className="mt-8 space-y-4">
                {progressItems.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-[1rem] font-title font-semibold uppercase tracking-[0.01em]">
                      <span>{item.label}</span>
                      <span>{item.score}</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-white/90">
                      <div
                        className="h-full bg-[var(--primary)] transition-all duration-1000 ease-out"
                        style={{ width: `${item.score}%`, transitionDelay: `${index * 120}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <img
                src={aboutExpertiseImage}
                alt="Our expertise"
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell grid md:grid-cols-3 gap-5">
          <AnimatedSection>
            <article
              className="h-full min-h-[260px] border border-[#dfd3c5] relative overflow-hidden"
              style={{
                backgroundImage:
                  `linear-gradient(rgba(17,17,17,.45), rgba(17,17,17,.45)), url(${aboutOverlayImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <FaUserCircle size={74} className="text-white/90" />
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-5">
            <CounterCard label="Happy Clients" value={935} suffix="+" />
            <CounterCard label="Domestic Locations" value={78} suffix="+" />
          </AnimatedSection>

          <AnimatedSection delay={200} className="space-y-5">
            <CounterCard label="Successful Rates" value={96} suffix="%" />
            <CounterCard label="Successful Cases" value={5061} suffix="+" />
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-18 md:py-24 text-white"
        style={{
          backgroundImage:
            `linear-gradient(rgba(15,15,15,.72), rgba(15,15,15,.72)), url(${aboutVisionBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-shell grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <SectionHeading eyebrow="Our Vision" title="Exceptional Legal Services With Integrity" />
            <p className="mt-5 text-white/90 leading-8 text-[1.06rem]">
              Our vision is to provide exceptional legal services by delivering expert advice, personalized attention,
              and tailored solutions that meet each client&apos;s needs. We strive to build long-lasting relationships
              based on trust and commitment to successful outcomes.
            </p>
            <a
              href="tel:+919642066661"
              className="inline-flex mt-7 items-center gap-2 border border-white/60 px-6 py-3 font-title hover:bg-white/15 transition-colors"
            >
              <FaLongArrowAltRight />
              contact us
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-shell flex justify-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center border border-[var(--primary)] text-[var(--primary)] px-7 py-3 font-title hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            Faq
          </Link>
        </div>
      </section>

      <section className="pb-18 md:pb-24 bg-white">
        <div className="container-shell grid md:grid-cols-3 gap-5">
          {[
            aboutGalleryOne,
            aboutGalleryTwo,
            aboutGalleryThree,
          ].map((image, index) => (
            <AnimatedSection key={image} delay={index * 90}>
              <img src={image} alt="About gallery" className="w-full h-[360px] md:h-[430px] object-cover" />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage
