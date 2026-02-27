import {Link} from 'react-router-dom'
import {
  FaBalanceScale,
  FaBuilding,
  FaFingerprint,
  FaGlobeAsia,
  FaStar, FaTelegram,
  FaUserCircle,
  FaUserShield
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import CounterCard from '../components/CounterCard'
import HeroSlider from '../components/HeroSlider'
import SectionHeading from '../components/SectionHeading'
import TestimonialSlider from '../components/TestimonialSlider'
import {blogPosts, counters, heroSlides, MoreAboutLayer, practiceItems, testimonials} from '../data/siteData'
import {FaSuitcase, FaSkull} from "react-icons/fa6";

const iconMap = [FaSuitcase, FaBuilding, FaSkull]
const iconMapping = [FaStar, FaUserCircle, FaTelegram]


// image section


function HomePage() {
    const [featuredPost] = blogPosts

    return (
        <>
            <HeroSlider slides={heroSlides}/>
            <section className="relative z-20 -mt-10 md:-mt-28 pb-[4.5rem] md:pb-[6rem] bg-transparent">
                <div className="container-shell grid lg:grid-cols-2 gap-0 items-center">
                    <AnimatedSection className="bg-[#f5f5f5] p-8 md:p-14">
                        <p className="section-subtitle">Since 2010 Legal Services provider and Legal Adviser</p>
                        <h2 className="section-title">About The Firm</h2>
                        <p className="mt-6 text-[1.06rem] leading-8 text-[#555]">
                            Mr. RAHMAT Advocates & Associates has been practicing and handling cases independently and
                            with a Team of
                            Advocates and Senior Advocates with a result-oriented approach, both professionally and
                            ethically.
                        </p>
                        <p className="mt-4 text-[1.06rem] leading-8 text-[#555]">
                            Practice areas include Cyber Crimes & I.T. Laws, Corporate Laws, Criminal Law, Bail Matters,
                            Civil Law,
                            Real Estate Laws, Family Law, Domestic Violence, Child Custody, Muslim Law and Legal
                            Services for NRI's in India.
                        </p>
                        <p className="mt-5 font-title font-medium">Mr. SYED RAHMAT | B.Com, LLB, LLM, (MBA)</p>
                    </AnimatedSection>

                    <AnimatedSection className="relative lg:pl-9" delay={140}>
                        <img
                            src="https://rahmatadvocate.com/wp-content/uploads/2023/01/Rahmat.com_45.jpg"
                            alt="Advocate Rahmat"
                            className="w-full h-[430px] md:h-135 object-cover shadow-[0_0_40px_rgba(0,0,0,.25)]"
                        />
                        <div
                            className="absolute -bottom-5 -left-5 md:-left-2 bg-[var(--primary)] text-white p-5 max-w-[15rem]">
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
                                    <article
                                        className="h-full border border-(--line) bg-white p-8 text-center hover:shadow-[0_10px_24px_rgba(0,0,0,.08)] transition-shadow flex flex-col items-center">
                                        <div className="size-12 text-(--primary) flex items-center justify-center">
                                            <Icon size={40}/>
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
                        <AnimatedSection
                            className="bg-white border-l-[3px] border-[var(--primary)] px-6 py-7 md:px-10 md:py-10">
                            <h3 className="font-title text-[2.15rem] leading-none font-semibold text-[var(--primary)]">01</h3>
                            <p className="mt-5 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                                Expertise and experience: Clients look for legal consultants who have the knowledge and
                                experience to handle their specific legal issue.
                            </p>
                            <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                                Reputation: A legal consultant with a good reputation for providing quality legal
                                services and positive results is more likely to attract new clients.
                            </p>
                            <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                                Personal connection: Some clients prefer to work with a legal consultant they feel
                                comfortable with and can trust.
                            </p>
                            <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                                Availability and responsiveness: Clients appreciate a legal consultant who is accessible
                                and responsive to their needs and questions.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection
                            className="bg-white border-l-[3px] border-(--primary) px-6 py-7 md:px-10 md:py-10"
                            delay={130}>
                            <h3 className="font-title text-[2.15rem] leading-none font-semibold text-(--primary)">02</h3>
                            <p className="mt-5 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                                Cost-effectiveness: Clients often look for legal consultants who provide quality legal
                                services at a fair price.
                            </p>
                            <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72] ">
                                Results-oriented approach: Clients prefer legal consultants who have a results-oriented
                                approach and work hard to achieve the best outcome for their case.
                            </p>
                            <p className="mt-4 text-[1.08rem] leading-[1.45] text-[#4e5f72]">
                                Innovative solutions: Clients appreciate legal consultants who bring new and innovative
                                solutions to their legal challenges.
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
                    <AnimatedSection>
                        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {MoreAboutLayer.map((item, index) => {
                                const Icon = iconMapping[index]
                                return (
                                    <AnimatedSection key={item.title} delay={index * 120}>
                                        <article
                                            className="h-full border border-(--line) bg-[#545454] text-white p-5 text-center hover:shadow-[0_10px_24px_rgba(0,0,0,.08)] transition-shadow flex flex-col items-center">
                                            <div className="size-12 flex items-center justify-center text-white">
                                                <Icon size={55}/>
                                            </div>
                                            <h3 className="font-title mt-5 text-xl font-semibold">{item.title}</h3>
                                            <div><p className='border border-b w-10 text-[#44444E] mt-4 m-b-2'></p></div>
                                            <p className="mt-3 leading-6 text-white text-lg">
                                                {item.body}
                                            </p>
                                        </article>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </div>


            </section>

            <section className="relative overflow-hidden py-[5rem] md:py-[6.5rem]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://rahmatadvocate.com/wp-content/uploads/2023/01/1.jpg)' }}
                />
                <div className="absolute inset-0 bg-black/68"/>

                <div className="container-shell relative z-10">
                    <AnimatedSection className="mx-auto max-w-3xl text-center text-white">
                        <h2 className="font-title text-[2.05rem] md:text-[2.65rem] font-semibold">What Clients Say</h2>
                        <p className="mt-3 text-md md:text-[0.98rem] text-white">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        </p>
                        <p className='text-[1rem] md:text-[0.98rem] text-white'>
                            blanditiis praesentium voluptatum deleniti atque corrupti </p>
                    </AnimatedSection>

                    <AnimatedSection
                        className="mx-auto mt-10 max-w-210 bg-white px-6 py-8 md:px-12 md:py-13 lg:px-15 shadow-[0_12px_35px_rgba(0,0,0,.18)]"
                        delay={120}
                    >
                        <TestimonialSlider testimonials={testimonials}/>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-[4.5rem] md:py-[6rem] bg-white">
                <div className="container-shell">
                    <AnimatedSection>
                        <SectionHeading centered title="Latest From Blog"/>
                    </AnimatedSection>

                    <AnimatedSection className="max-w-4xl mx-auto mt-10 border border-[var(--line)] p-6 md:p-8"
                                     delay={120}>
                        <article className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
                            <img src={featuredPost.image} alt={featuredPost.title}
                                 className="w-full h-42 md:h-full object-cover"/>
                            <div>
                                <h3 className="font-title text-2xl">{featuredPost.title}</h3>
                                <p className="text-sm mt-1 text-[#777]">{featuredPost.date}</p>
                                <p className="mt-4 text-[#535353] leading-7">{featuredPost.excerpt}</p>
                                <Link to="/our-blog"
                                      className="inline-flex items-center gap-2 bg-(--primary) text-white px-6 py-3 font-title hover:bg-(--primary-dark) transition-colors mt-4"
                                >
                                    view all
                                </Link>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}

export default HomePage
