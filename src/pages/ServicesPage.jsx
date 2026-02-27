import { FaBalanceScale, FaBuilding, FaFemale, FaFingerprint, FaGlobeAsia, FaUniversity } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    icon: FaFingerprint,
    title: 'Cyber Crime & I.T. Laws',
    body: 'Cyber fraud, online offences, digital evidence, harassment and technology-driven disputes.',
  },
  {
    icon: FaBuilding,
    title: 'Corporate & Business Laws',
    body: 'Company law, contracts, start-ups, employment and legal compliance for organizations.',
  },
  {
    icon: FaBalanceScale,
    title: 'Criminal Litigation',
    body: 'Bail, anticipatory bail, trial defense, white-collar offences and criminal strategy.',
  },
  {
    icon: FaUniversity,
    title: 'Banking & Recovery',
    body: 'Cheque bounce matters, N.I. Act 138, recovery proceedings, NBFC and insolvency related disputes.',
  },
  {
    icon: FaFemale,
    title: 'Family & Personal Laws',
    body: 'Divorce, child custody, domestic violence, maintenance and Muslim personal law matters.',
  },
  {
    icon: FaGlobeAsia,
    title: 'NRI Legal Services',
    body: 'Property, marriage, legal notices, documentation and representation for global NRI clients.',
  },
]

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        image="https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_46.jpg"
      />

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              eyebrow="Legal Services"
              title="Comprehensive Legal Representation"
              description="Focused legal strategy for individuals, families, entrepreneurs, corporates, and NRI clients across India."
            />
          </AnimatedSection>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <AnimatedSection key={service.title} delay={index * 80}>
                  <article className="h-full border border-[var(--line)] p-8 bg-[#fdfaf7] hover:bg-white hover:shadow-[0_12px_25px_rgba(0,0,0,.08)] transition-all">
                    <div className="size-11 rounded-full bg-[var(--primary)]/12 text-[var(--primary)] inline-flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-title mt-5 text-xl">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#535353]">{service.body}</p>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111] text-white">
        <div className="container-shell grid lg:grid-cols-3 gap-6">
          {[
            'Consultation & case assessment',
            'Documentation & legal notice strategy',
            'Court representation & dispute resolution',
          ].map((step, index) => (
            <AnimatedSection key={step} delay={index * 120} className="border border-white/20 p-7">
              <p className="text-[var(--primary)] font-title">0{index + 1}</p>
              <h3 className="font-title text-xl mt-2">{step}</h3>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
