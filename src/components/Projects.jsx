import Board from './board/Board'
import Pin from './board/Pin'
import { PIN_COLORS } from './board/pinColors'
import SectionHeading from './board/SectionHeading'
import { projects } from '../data/portfolio'

// Each card sits a little crooked, like it was pinned by hand.
const TILTS = ['-1.4deg', '1.1deg', '-0.9deg', '1.6deg']

function ProjectCard({ project, index }) {
  const { title, subtitle, blurb, tags, note, image, imageAlt, href, featured } =
    project

  return (
    <li className={featured ? 'md:col-span-2 lg:row-span-2' : ''}>
      <article
        style={{ '--tilt': TILTS[index % TILTS.length] }}
        className="relative mx-auto max-w-xl rotate-[var(--tilt)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none lg:max-w-none"
      >
        {featured ? (
          <>
            <span aria-hidden="true" className="tape -top-3 left-5 -rotate-6" />
            <span aria-hidden="true" className="tape -top-3 right-5 rotate-6" />
          </>
        ) : (
          <Pin
            color={PIN_COLORS[index % PIN_COLORS.length]}
            className="-top-2 left-1/2 -translate-x-1/2"
          />
        )}

        <div
          className={`paper font-print p-5 text-stone-800 sm:p-6 ${
            note ? 'pb-10 sm:pb-11' : ''
          }`}
        >
          {image && (
            <img
              src={image}
              alt={imageAlt}
              width="1400"
              height="787"
              loading="lazy"
              className="mb-5 w-full border-[6px] border-white shadow-md"
            />
          )}

          <h3
            className={`font-bold leading-tight text-stone-900 ${
              featured ? 'text-3xl' : 'text-2xl'
            }`}
          >
            {title}
          </h3>
          {subtitle && <p className="mt-1 text-sm text-stone-600">{subtitle}</p>}
          <p className="mt-3 text-[15.5px] leading-relaxed">{blurb}</p>

          {tags?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <li
                  key={`${tag}-${i}`}
                  className="rounded-sm border border-dashed border-stone-500 px-2 py-0.5 text-[13px] text-stone-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {href && (
            <a
              href={href}
              className="mt-4 inline-block font-hand text-lg font-bold text-indigo-700 underline decoration-2 underline-offset-4 hover:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
            >
              View project
            </a>
          )}
        </div>

        {note && (
          <p className="sticky-note font-hand relative z-[1] -mt-8 mr-[-0.75rem] ml-auto w-44 rotate-3 px-3 pt-4 pb-3 text-[17px] leading-snug">
            {note}
          </p>
        )}
      </article>
    </li>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="projects-title" title="Projects">
          A few things I’ve built.
        </SectionHeading>

        <Board className="p-7 pb-12 sm:p-10 sm:pb-14 lg:p-12 lg:pb-16">
          <ul className="grid items-start gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </ul>
        </Board>
      </div>
    </section>
  )
}