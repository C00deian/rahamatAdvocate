import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { blogPosts } from '../data/siteData'
import blogExtraOne from '../assets/home/Rahmat.com_45.jpg'
import blogExtraTwo from '../assets/gallery/Rahmat.com_46.jpg'

const extraPosts = [
  {
    title: 'How to Prepare for Your First Legal Consultation',
    date: 'February 2, 2023',
    excerpt: 'Checklist and practical preparation to make your first meeting legally productive.',
    image: blogExtraOne,
  },
  {
    title: 'Understanding Bail and Anticipatory Bail',
    date: 'February 10, 2023',
    excerpt: 'Key procedural differences and how strategy differs based on your case stage.',
    image: blogExtraTwo,
  },
]

function BlogPage() {
  const posts = [...blogPosts, ...extraPosts]

  return (
    <>
      <PageHero title="Our Blog"/>

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              eyebrow="Insights"
              title="Latest From Blog"
              description="Articles and explainers designed to help clients understand legal processes more clearly."
            />
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 80}>
                <article className="h-full border border-[var(--line)] bg-[#fdfbf8] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="font-title text-2xl leading-8">{post.title}</h3>
                    <p className="mt-2 text-sm text-[#787878]">{post.date}</p>
                    <p className="mt-4 text-[#545454] leading-7">{post.excerpt}</p>
                    <button type="button" className="mt-5 text-[var(--primary)] font-title">Read more</button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
