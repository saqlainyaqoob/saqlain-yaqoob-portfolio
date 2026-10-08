import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SITE } from "../data/site";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Connect() {
  return (
    <section
      id="connect"
      className="border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <SectionLabel>06 connect</SectionLabel>

          <div className="flex flex-col sm:flex-row gap-6 text-slate-500 text-sm">
            <a
              href={SITE.email}
              rel="noreferrer"
              aria-label="Send email to Saqlain Yaqoob"
              className="flex items-center gap-2 hover:text-amber-500 transition"
            >
              <IoMdMail size={19} />
              saqlainyakub@gmail.com
            </a>

            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 hover:text-amber-500  transition"
            >
              <FaGithub size={19} />
              github.com/saqlainyaqoob
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 hover:text-amber-500  transition"
            >
              <FaLinkedin size={19} className="mb-1" />
              linkedin.com/in/saqlain-yaqoob-2022621a4/
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
