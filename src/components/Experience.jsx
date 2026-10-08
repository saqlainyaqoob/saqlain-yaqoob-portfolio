import { EXPERIENCE } from '../data/experience'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionLabel>04 experience</SectionLabel>
          <h2 className="font-display mb-10 text-2xl font-semibold">Experience</h2>

          <div className="space-y-10">
            {EXPERIENCE.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 100}>
                <div className="grid gap-4 sm:grid-cols-4">
                  <p className="font-code text-sm text-slate-500 dark:text-slate-400">
                    {job.period}
                  </p>

                  <div className="sm:col-span-3">
                    <h3 className="font-display font-semibold">
                      {job.role}{' '}
                      <span className="font-body font-normal text-slate-500">
                        at {job.company}
                      </span>
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {job.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}