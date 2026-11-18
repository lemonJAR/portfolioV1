import { useState } from 'react'

const links = [
{ label: 'About', href: '#about' },
{ label: 'Projects', href: '#projects' },
{ label: 'Contact', href: '#contact' },
]

export default function Navbar() {
const [open, setOpen] = useState(false)

return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
    <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
    >
        <a href="#home" className="text-xl font-bold text-white">
        John Anthony Romeo
        </a>

        <ul className="hidden gap-8 md:flex">
        {links.map((link) => (
            <li key={link.href}>
            <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
                {link.label}
            </a>
            </li>
        ))}
        </ul>

        <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        className="text-2xl text-white md:hidden"
        >
        {open ? '✕' : '☰'}
        </button>
    </nav>

    {open && (
        <ul id="mobile-menu" className="space-y-1 px-6 pb-4 md:hidden">
        {links.map((link) => (
            <li key={link.href}>
            <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white"
            >
                {link.label}
            </a>
            </li>
        ))}
        </ul>
    )}
    </header>
)
}