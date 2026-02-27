import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { brand, navigation, socials } from '../data/siteData'

const iconByLabel = {
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ece5dd]/90 backdrop-blur">
      <div className="container-shell">
        <div className="flex h-22 items-center gap-4">
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden text-[#111]"
            onClick={() => setOpen(true)}
          >
            <FaBars size={20} />
          </button>

          <Link to="/" className="shrink-0">
            <img src={brand.logo} alt={brand.name} className="h-14 w-auto md:h-16" />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-title text-[0.95rem] tracking-[0.01em] transition-colors ${
                        isActive ? 'text-[var(--primary)]' : 'text-[#121212] hover:text-[var(--primary)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden md:flex items-center gap-4">
            <button type="button" aria-label="search" className="text-[#111] hover:text-[var(--primary)] transition-colors">
              <FiSearch size={18} />
            </button>
            <div className="hidden xl:flex items-center gap-2">
              {socials.map((social) => {
                const Icon = iconByLabel[social.label]
                if (!Icon) return null

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="size-8 inline-flex items-center justify-center rounded-full border border-[#d8c8b9] text-[#111] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={13} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <aside
        className={`fixed inset-0 z-[70] lg:hidden transition-all ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`absolute inset-0 bg-black/55 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute left-0 top-0 h-full w-[88%] max-w-[330px] bg-white shadow-2xl p-6 transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <FaTimes size={19} />
            </button>
          </div>

          <ul className="mt-7 space-y-5">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-title text-[1.03rem] ${isActive ? 'text-[var(--primary)]' : 'text-[#171717]'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  )
}

export default Header
