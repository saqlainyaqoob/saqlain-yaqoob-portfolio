import { SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 sm:flex-row">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {SITE.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}