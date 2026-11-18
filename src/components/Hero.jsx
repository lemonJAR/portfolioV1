export default function Hero() {
return (
    <section
    id="home"
    className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6"
    >
    <p className="mb-4 font-medium text-indigo-400">Hi, my name is</p>
    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        Your Name.
    </h1>
    <h2 className="mt-2 text-3xl font-bold text-slate-400 sm:text-5xl">
        I build things for the web.
    </h2>
    <p className="mt-6 max-w-xl text-lg text-slate-400">
        I'm a developer who enjoys turning ideas into clean, fast, and
        accessible websites. Currently based in Cebu, Philippines.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
        <a
        href="#projects"
        className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
        >
        View my work
        </a>
        <a
        href="#contact"
        className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
        Get in touch
        </a>
    </div>
    </section>
)
}