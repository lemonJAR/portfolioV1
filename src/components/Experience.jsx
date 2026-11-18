import { useRef } from 'react'
import Board from './board/Board'
import Pin from './board/Pin'
import { PIN_COLORS } from './board/pinColors'
import SectionHeading from './board/SectionHeading'
import Yarn from './board/Yarn'
import { experience } from '../data/portfolio'

const TILTS = ['-1.2deg', '1deg', '-0.7deg', '1.4deg']

function ExperienceCard({ job, index }) {
  const { role, org, period, points } = job
  const onLeft = index % 2 === 0

  return (
    <li
      style={{ '--row': index + 1 }}
      className={[
        'w-[95%]',
        onLeft ? 'mr-auto' : 'ml-auto',
        // Two columns from md up. Pull each card up a little so they interleave.
        'md:w-full md:max-w-md md:justify-self-center md:[grid-row:var(--row)]',
        onLeft ? 'md:col-start-1' : 'md:col-start-2',
        index > 0 ? 'md:-mt-12' : '',
      ].join(' ')}
    >
      <article
        style={{ rotate: TILTS[index % TILTS.length] }}
        className="index-card font-hand relative px-6 pt-7 pb-6"
      >
        <Pin
          yarn
          color={PIN_COLORS[(index + 1) % PIN_COLORS.length]}
          className="-top-2 left-1/2 -translate-x-1/2"
        />

        <header className="flex items-start justify-between gap-4 border-b-2 border-rose-700/70 pb-2">
          <div>
            <h3 className="text-xl leading-tight font-bold text-stone-900">
              {role}
            </h3>
            <p className="mt-0.5 text-base text-stone-700">{org}</p>
          </div>
          <p className="shrink-0 pt-0.5 text-[15px] font-bold text-rose-800">
            {period}
          </p>
        </header>

        <ul className="ruled mt-3 text-[17px]">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </li>
  )
}

export default function Experience() {
  const trackRef = useRef(null)

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="experience-title" title="Experience">
          Where I’ve worked and studied, newest first.
        </SectionHeading>

        <Board className="px-4 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div ref={trackRef} className="relative">
            <Yarn containerRef={trackRef} />
            <ol className="relative z-10 grid gap-y-14 md:grid-cols-2 md:gap-y-14 md:gap-x-8">
              {experience.map((job, i) => (
                <ExperienceCard key={`${job.role}-${job.period}`} job={job} index={i} />
              ))}
            </ol>
          </div>
        </Board>
      </div>
    </section>
  )
}