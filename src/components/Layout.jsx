import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import Footer from './Footer'
import Header from './Header'

const titleByPath = {
  '/': 'RAHMAT ADVOCATE - JUSTICE FOR ALL',
  '/services': 'Services - RAHMAT ADVOCATE',
  '/contact-us': 'Contact Us - RAHMAT ADVOCATE',
  '/about-us': 'About Us - RAHMAT ADVOCATE',
  '/our-blog': 'Our Blog - RAHMAT ADVOCATE',
  '/gallery': 'Gallery - RAHMAT ADVOCATE',
}

function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.title = titleByPath[pathname] || 'RAHMAT ADVOCATE'
  }, [pathname])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <a
        href="https://wa.me/919642066661?text=Hello%20Adv.%20Rahmat"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="floating-action fixed left-4 bottom-4 z-40 size-13 rounded-xl bg-[#25D366] text-white inline-flex items-center justify-center shadow-[0_10px_26px_rgba(0,0,0,.25)]"
      >
        <FaWhatsapp size={28} />
      </a>

      <Link
        to="/contact-us"
        aria-label="Call"
        className="floating-action fixed right-4 bottom-4 z-40 size-13 rounded-xl bg-[#00bb00] text-white inline-flex items-center justify-center shadow-[0_10px_26px_rgba(0,0,0,.25)]"
      >
        <FaPhoneAlt size={20} />
      </Link>
    </>
  )
}

export default Layout
