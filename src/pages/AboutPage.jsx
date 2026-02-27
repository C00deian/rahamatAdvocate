import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const pillars = [
  {
    title: '#1 Law Firm 2019',
    body: 'Rankings vary by criteria, but client trust and outcomes remain the strongest measure of legal excellence.',
  },
  {
    title: 'Professional Lawyers',
    body: 'Specialized legal support across corporate, real estate, criminal, family and NRI-focused law.',
  },
  {
    title: 'Globally NRI’s',
    body: 'Strategic representation in India for NRI legal matters from family disputes to property and court issues.',
  },
]

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        image="https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_45.jpg"
      />

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell grid lg:grid-cols-2 gap-11 items-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="About The Firm"
              title="Result-Oriented Legal Practice"
              description="Mr. Rahmat Advocates & Associates operates with a strong ethical and professional approach while handling complex matters in trial and advisory domains."
            />
            <p className="mt-5 leading-8 text-[#535353] text-[1.06rem]">
              The firm has years of experience in Cyber Laws, Corporate Matters, Criminal Law, Family Law, Real Estate, Banking Recovery,
              Domestic Violence, Child Custody and Legal Services for NRI clients in India.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={130}>
            <img
              src="https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_46.jpg"
              alt="Firm"
              className="w-full h-[500px] object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-[var(--surface)]">
        <div className="container-shell">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 110}>
                <article className="h-full p-8 border border-[var(--line)] bg-white">
                  <h3 className="font-title text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-[#555] leading-7">{pillar.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
