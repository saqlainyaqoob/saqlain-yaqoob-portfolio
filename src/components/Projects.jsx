import { FiExternalLink } from "react-icons/fi";
import {FaGithub } from "react-icons/fa"
import { PROJECTS } from '../data/projects'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionLabel>03 projects</SectionLabel>
          <h2 className="font-display mb-10 text-2xl font-semibold">Selected work</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <article className="group flex h-full flex-col rounded-r-xl border-l-2 border-amber-500 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/5 dark:bg-slate-900/70 dark:hover:shadow-black/20">
                  <h3 className="font-display mb-3 text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-200 px-2 py-1 font-code text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 text-sm">
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-1 font-medium transition-colors hover:text-amber-500"
                    >
                      Live <FiExternalLink size={14} />
                    </a>
                    <a
                      href={project.code}
                      className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-amber-500 dark:text-slate-400"
                    >
                      Code <FaGithub size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}