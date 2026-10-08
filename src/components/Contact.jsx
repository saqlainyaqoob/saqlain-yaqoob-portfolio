import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { SITE } from "../data/site";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionLabel>05 contact</SectionLabel>

          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display mb-4 text-2xl font-semibold">
                Let's work together
              </h2>
              <p className="max-w-xl leading-8 text-slate-600 dark:text-slate-400">
                Have a project in mind or just want to say hi? My inbox is open.
                I usually reply within a day or two.
              </p>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex w-fit items-center gap-3 rounded-lg border border-slate-200 px-5 py-4 transition-all hover:-translate-y-1 hover:border-amber-500 dark:border-slate-800"
            >
              <CiMail size={18} className="text-amber-500" />
              <span className="font-code text-sm">{SITE.email}</span>
              <BsBoxArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
