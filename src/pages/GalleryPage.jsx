import AnimatedSection from '../components/AnimatedSection'
import PageHero from '../components/PageHero'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { brand, socials } from '../data/siteData'
import galleryImg01 from '../assets/gallery/WhatsApp-Image-2023-01-31-at-13.26.03-2.jpeg'
import galleryImg02 from '../assets/gallery/WhatsApp-Image-2023-01-31-at-13.26.03-1.jpeg'
import galleryImg03 from '../assets/gallery/WhatsApp-Image-2023-01-31-at-13.26.02.jpeg'
import galleryImg04 from '../assets/gallery/Rahmat.com_46.jpg'
import galleryImg05 from '../assets/gallery/Rahmat.com_38_2.jpg'
import galleryImg06 from '../assets/gallery/Rahmat.com_27_3.jpg'
import galleryImg07 from '../assets/gallery/yu-e1675153140309.jpeg'
import galleryImg08 from '../assets/gallery/Rahmat.com_20_3.jpg'
import galleryImg09 from '../assets/gallery/Rahmat.com_22_3.jpg'
import galleryImg10 from '../assets/gallery/Rahmat.com_43_2-e1675152948617.jpg'
import galleryImg11 from '../assets/gallery/1.jpg'
import galleryImg12 from '../assets/gallery/Rahmat.com_30_3.jpg'

const galleryRows = [
  [galleryImg01, galleryImg02, galleryImg03],
  [galleryImg04, galleryImg05, galleryImg06],
  [galleryImg07, galleryImg08, galleryImg09],
  [galleryImg10, galleryImg11, galleryImg12],
]

const iconByLabel = {
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
}

function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery"/>
      <section className="bg-[#eeeeee] py-8 md:py-10 border-b border-[#dfdfdf]">
        <div className="container-shell">
          <AnimatedSection className="mx-auto max-w-[980px] bg-[#ececec] p-3 md:p-5">
            <img src={brand.logo} alt={brand.name} className="mx-auto w-full max-w-[760px] h-auto object-contain" />
          </AnimatedSection>

          <AnimatedSection className="mt-5 text-center" delay={80}>
            <div className="mx-auto max-w-[420px] flex items-center gap-3 text-[#101010]">
              <span className="h-px flex-1 bg-[#cecece]" />
              <p className="font-title italic text-[0.97rem] font-semibold lowercase tracking-[0.01em]">
                keep your memories alive
              </p>
              <span className="h-px flex-1 bg-[#cecece]" />
            </div>

            <div className="mt-3 flex justify-center items-center gap-4">
              {socials.map((social) => {
                const Icon = iconByLabel[social.label]
                if (!Icon) return null

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-[#111] hover:text-[var(--primary)] transition-colors"
                  >
                    <Icon size={13} />
                  </a>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container-shell">
          <div className="space-y-5 md:space-y-6">
            {galleryRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid gap-5 md:gap-6 md:grid-cols-3">
                {row.map((image, imageIndex) => (
                  <AnimatedSection key={image} delay={(rowIndex * 3 + imageIndex) * 45}>
                    <div className="w-full overflow-hidden">
                      <img
                        src={image}
                        alt="Gallery"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPage
