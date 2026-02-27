import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { brand, socials } from '../data/siteData'

const icons = {
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
}

function Footer() {
  return (
    <footer className="bg-[#111] text-white mt-20">
      <div className="container-shell py-14 grid gap-9 md:grid-cols-3">
        <section>
          <h3 className="font-title text-lg">{brand.name}</h3>
          <p className="mt-3 text-white/75 leading-7">{brand.tagline}. Professional legal support across criminal, family, corporate and NRI legal matters.</p>
        </section>

        <section>
          <h3 className="font-title text-lg">Contact</h3>
          <ul className="mt-3 space-y-2.5 text-white/80">
            <li className="flex items-center gap-2"><FaPhoneAlt size={12} />+91 9642066661</li>
            <li className="flex items-center gap-2"><FaEnvelope size={12} /> advocatesrahmat@gmail.com</li>
            <li>1st Floor, above My Home Super Market & Country Dairy, Near
              AMBA Theatre, MEHDIPATNAM, Hyderabad – 500028. Telangana State.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-title text-lg">Follow</h3>
          <div className="mt-4 flex gap-2.5">
            {socials.map((social) => {
              const Icon = icons[social.label]
              if (!Icon) return null

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="size-9 rounded-full border border-white/25 text-white inline-flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>
        </section>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-white/70 text-sm">
        @2022 - All Right Reserved. Designed and Developed by |Startupway24|
      </div>
    </footer>
  )
}

export default Footer
