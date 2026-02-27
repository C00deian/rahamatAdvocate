import {
    FaBalanceScale, FaBuilding, FaClock, FaFemale, FaFingerprint, FaGlobeAsia, FaLongArrowAltRight,
    FaPhoneAlt, FaUniversity
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import image14 from '../assets/services/14.jpg';

const services = [
    {
        icon: FaFingerprint,
        title: 'Corporate & Securities',
        body: 'Corporate and securities law refers to the legal framework that governs the formation, operation, and regulation of corporations and securities. It includes the laws, regulations, and rules related to the issuance and sale of securities, such as stocks, bonds, and other financial instruments.'
    },


  {
    icon: FaFemale,
    title: 'Family Law',
    body: 'Family law is a branch of law that deals with family-related matters and domestic relations, including marriage, divorce, child custody, adoption, and more. The goal of family law is to promote the welfare and best interests of families and individuals involved, while ensuring that their legal rights and obligations are upheld. '
  },
  {
    icon: FaBuilding,
    title: 'Real Estate Law',
    body: 'Real estate law is a branch of law that deals with the rights and interests in real property. Real property refers to land and any structures attached to it, including buildings, homes, and other improvements.'
  },


  {
    icon: FaBalanceScale,
    title: 'Criminal Law',
    body: 'Criminal law is a branch of law that defines and regulates criminal offenses and their penalties. It is a system of laws and regulations designed to prevent and punish behavior that is harmful to individuals, society, or the state.'
  },
  {
    icon: FaUniversity,
    title: 'Civil Law',
    body: 'Civil law is a legal system that deals with the regulation of private rights and remedies, as opposed to criminal law which deals with the punishment of crimes. Civil law is concerned with disputes between individuals or organizations, and provides a means of resolving these disputes through the court system. Civil law governs relationships between private parties, such as contracts, property law, tort law, and inheritance law'
  },


    {
        icon: FaGlobeAsia,
        title: "NRI's Cases",
        body: 'NRI law refers to the legal rights and obligations of Non-Resident Indians (NRIs) living abroad with respect to their property and financial interests in India. NRI law covers a range of issues, including the acquisition and transfer of property, inheritance, taxation, and remittances. NRIs often face unique challenges when it comes to their property and financial interests in India.'
    },
]

const stripOneImages = [
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/Picture5.jpg',
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/Picture2.jpg',
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/Picture3.jpg',
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/Picture4.jpg',
]

const stripTwoImages = [
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/ty.jpg',
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/Picture7.jpg',
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_17_3-459x1024.jpg',
    'https://rahmatadvocate.com/wp-content/uploads/2023/01/er.jpg',
]

const officeHours = [
    {day: 'Monday', hours: '8:00 AM - 9:00 PM'},
    {day: 'Tuesday', hours: '8:00 AM - 9:00 PM'},
    {day: 'Wednesday', hours: '8:00 AM - 9:00 PM'},
    {day: 'Thu - Friday', hours: '8:00 AM - 9:00 PM'},
    {day: 'Sat - Sunday', hours: '8:00 AM - 9:00 PM'},
]

function ServicesPage() {
    return (
        <>
            <PageHero title="Our Services"/>

            <section className="py-10 md:py-12 bg-[#f4f4f4]">
                <div className="container-shell grid md:grid-cols-2 gap-4">
                    {[
                        'https://rahmatadvocate.com/wp-content/uploads/2019/11/4.jpg',
                        'https://rahmatadvocate.com/wp-content/uploads/2019/11/10-1170x780.jpg',
                    ].map((image, index) => (
                        <AnimatedSection key={image} delay={index * 90}>
                            <img src={image} alt="Service gallery"
                                 className="w-full h-[260px] md:h-[360px] object-cover"/>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container-shell">
                    <AnimatedSection>
                        <SectionHeading
                            eyebrow="Field Of Practice"
                            title="Comprehensive Legal Domains"
                            description="CYBER LAW & I.T. LAWS, CORPORATE LAW, START-UPS, COMPANY LAW, EMPLOYMENT & SERVICE LAWS, CRIMINAL LAW, BANKING LAW, CIVIL LAW, INTELLECTUAL PROPERTY RIGHTS, COPYRIGHT, TRADEMARKS, PATENTS, BAIL, ANTICIPATORY BAIL, WHITE COLLAR OFFENCES, CHEATING, MONEY LAUNDERING, POCSO, CHILD ABUSE, HARASSMENT, ASSAULT, RAPE, MURDER, BANKING & INSOLVENCY, N.I.138 ACT, BUSINESS & RECOVERY LAWS, NBFC, SARFAESI & DRT CASES."
                        />
                    </AnimatedSection>

                    <div className="mt-11 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon

                            return (
                                <AnimatedSection key={service.title} delay={index * 80}>
                                    <article
                                        className="h-full border border-[#e1d8d0] bg-[#fcfaf7] p-7 md:p-8 hover:shadow-[0_12px_24px_rgba(0,0,0,.09)] transition-shadow">
                                        <div
                                            className="size-11 rounded-full bg-[var(--primary)]/12 text-[var(--primary)] inline-flex items-center justify-center">
                                            <Icon size={19}/>
                                        </div>
                                        <h3 className="font-title mt-4 text-[1.4rem] leading-8">{service.title}</h3>
                                        <p className="mt-3 text-[#4f4f4f] leading-7">{service.body}</p>
                                    </article>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container-shell grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stripOneImages.map((image, index) => (
                        <AnimatedSection key={image} delay={index * 70}>
                            <img src={image} alt="Service strip" className="w-full h-[150px] md:h-[210px] object-cover"/>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className="py-5 pb-10 bg-white">
                <div className="container-shell grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stripTwoImages.map((image, index) => (
                        <AnimatedSection key={image} delay={index * 70}>
                            <img src={image} alt="Service strip" className="w-full h-[150px] md:h-[210px] object-cover"/>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section

                className="py-16 md:py-20 m-8"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(10,10,10,.62), rgba(10,10,10,.62)), url(https://rahmatadvocate.com/wp-content/uploads/2023/01/1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container-shell md:w-[98%] border-white">
                    <div className="ml-auto max-w-xl text-white p-8 md:p-10">
                        <h2 className="font-title text-2xl md:text-3xl font-semibold leading-none">Free Feel To Contact
                            us</h2>
                        <a
                            href="tel:+919642066661"
                            className="inline-flex mt-6 items-center gap-2 px-6 py-3 font-title bg-[var(--primary)] hover:bg-white/10 transition-colors"
                        >
                            <FaPhoneAlt/>
                            CONTACT US
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="grid lg:grid-cols-2">
                    <AnimatedSection className="bg-[#0a0f17] text-white px-6 py-10 md:px-12 md:py-16">
                        <h2 className="font-title text-3xl md:text-4xl font-bold">Office Opening Hours</h2>
                        <ul className="mt-8 space-y-3.5">
                            {officeHours.map((item) => (
                                <li key={item.day}
                                    className="flex items-center justify-between border-b border-white/15 pb-2.5">
                  <span className="inline-flex items-center gap-2.5 font-title text-[1.02rem]">
                    <FaClock className="text-[var(--primary)]" size={12}/>
                      {item.day}
                  </span>
                                    <span className="text-white/85 text-[0.96rem]">{item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection>
                        <img
                            src="https://rahmatadvocate.com/wp-content/uploads/2019/11/13-1024x681.jpg"
                            alt="Office"
                            className="w-full h-80 md:h-full object-cover"
                        />
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-14 bg-[#f4f2ef]">
                <div className="container-shell flex flex-col md:flex-row items-center justify-between gap-5">
                    <h3 className="font-title text-2xl md:text-3xl">We&apos;re Hiring. Join Us Now</h3>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 font-title hover:bg-[var(--primary-dark)] transition-colors"
                    >
                        <FaLongArrowAltRight/>
                        apply now
                    </button>
                </div>
            </section>
        </>
    )
}

export default ServicesPage
