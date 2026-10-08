import SectionLabel from './SectionLabel'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionLabel>01 about</SectionLabel>

          <div className="grid gap-12 md:grid-cols-3">
            <h2 className="font-display text-2xl font-semibold">About me</h2>

            <div className="space-y-5 leading-8 text-slate-600 md:col-span-2 dark:text-slate-400">
              <p>
                I'm a Full-stack web developer with 3+ years of experience turning
                designs into fast, accessible products. I care about clean
                architecture, readable code and the small details that make an
                interface feel right.
              </p>

              <p>
                I enjoy solving practical problems and continuously improving how I build software.
              </p>

              <div className="grid max-w-sm grid-cols-2 gap-6 pt-4">
                <div>
                  <p className="font-display text-3xl font-semibold">3+</p>
                  <p className="mt-1 text-sm text-slate-500">years experience</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold">15+</p>
                  <p className="mt-1 text-sm text-slate-500">projects shipped</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}