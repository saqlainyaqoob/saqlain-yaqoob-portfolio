import { GoArrowUpRight } from "react-icons/go";
import { IoMdDownload } from "react-icons/io";
import {FaGithub , FaLinkedin, } from "react-icons/fa"
import { SITE } from '../data/site'


export default function Hero() {
  return (
    <section id="top" className="relative isolate mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="grid items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
        <div className="animate-fade-up">
          <p className="mb-5 font-code text-xs text-amber-500">
            // available for hire
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {SITE.name} builds{' '}
            <span className="text-amber-500">fast, reliable</span> web products.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            Full-stack web developer focused on React, Node.js and clean,
            maintainable code. I turn ideas and designs into polished,
            accessible digital products.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={SITE.resumePath}
              download="Alex-Rivera-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-1 hover:bg-slate-700 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
            >
              <IoMdDownload size={16} />
              Download résumé
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-amber-500 dark:text-slate-300"
            >
              View projects
              <GoArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className=" flex text-slate-500 transition-all hover:-translate-y-1 hover:text-amber-500"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition-all hover:-translate-y-1 hover:text-amber-500"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div className="animate-fade-up md:[animation-delay:150ms]">
          <div className="animate-float overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 font-code text-xs text-slate-400">
                developer.js
              </span>
            </div>

            <div className="font-code p-6 text-sm leading-8">
              <div>
                <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
                <span className="text-sky-600 dark:text-sky-400">developer</span> = {'{'}
              </div>
              <div className="pl-5">
                <span className="text-slate-500">name:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  '{SITE.name}'
                </span>,
              </div>
              <div className="pl-5">
                <span className="text-slate-500">role:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  '{SITE.role}'
                </span>,
              </div>
              <div className="pl-5">
                <span className="text-slate-500">stack:</span> [
                <span className="text-emerald-600 dark:text-emerald-400">'React'</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">'Node.js'</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">'TypeScript'</span>
                ],
              </div>
              <div className="pl-5">
                <span className="text-slate-500">status:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  'open to opportunities'
                </span>,
              </div>
              <div>{'}'};</div>
              <div className="mt-4 text-slate-400">
                <span className="animate-pulse-soft">▌</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}