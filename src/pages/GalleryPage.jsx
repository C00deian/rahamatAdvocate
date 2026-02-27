import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { galleryImages } from '../data/siteData'

function GalleryPage() {
  const [activeImage, setActiveImage] = useState('')

  return (
    <>
      <PageHero
        title="Gallery"
        image="https://rahmatadvocate.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-31-at-13.26.03-2.jpeg"
      />

      <section className="py-18 md:py-24 bg-white">
        <div className="container-shell">
          <AnimatedSection>
            <SectionHeading
              centered
              eyebrow="Gallery"
              title="Moments & Professional Highlights"
              description="A visual glimpse of legal practice, events, and professional engagements."
            />
          </AnimatedSection>

          <div className="masonry-grid mt-10">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={image + index} className="mb-4 break-inside-avoid" delay={(index % 3) * 90}>
                <button
                  type="button"
                  className="block w-full overflow-hidden"
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image}
                    alt="Gallery"
                    className="w-full h-auto object-cover hover:scale-[1.04] transition-transform duration-500"
                  />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <button
          type="button"
          aria-label="Close preview"
          onClick={() => setActiveImage('')}
          className="fixed inset-0 z-[90] bg-black/80 p-4 flex items-center justify-center"
        >
          <img src={activeImage} alt="Preview" className="max-h-[92vh] w-auto max-w-[95vw]" />
        </button>
      ) : null}
    </>
  )
}

export default GalleryPage
