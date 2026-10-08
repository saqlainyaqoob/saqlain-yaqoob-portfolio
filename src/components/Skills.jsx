import { SKILLS } from '../data/skills'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionLabel>02 skills</SectionLabel>
          <h2 className="font-display mb-10 text-2xl font-semibold">Skills & tools</h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items], index) => (
              <Reveal key={category} delay={index * 100}>
                <div className="rounded-lg border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/70 dark:border-slate-800">
                  <h3 className="mb-5 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {category}
                  </h3>

                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-slate-200 pl-3 font-code text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}