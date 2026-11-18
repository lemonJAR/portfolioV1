export default function SectionHeading({ id, title, children }) {
  return (
    <div className="mb-10">
      <h2
        id={id}
        className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-lg text-slate-400">{children}</p>
    </div>
  )
}