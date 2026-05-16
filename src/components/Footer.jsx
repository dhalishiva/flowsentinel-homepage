import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-subtle py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            {/* <Logo size={26} />
            <span className="text-[14px] font-semibold text-white">
              Flow<span className="text-teal">Sentinel</span>
            </span> */}
            <img src="/logo-dark.svg" alt="FlowSentinel" className="h-10" />
          </div>
          <p className="text-[13px] text-slate-500 text-center">
            © {new Date().getFullYear()} FlowSentinel. Intelligent Workflow Continuity Monitoring.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="text-[13px] text-slate-500 hover:text-teal transition-colors no-underline">
              Contact
            </a>
            <a href="https://app.supportu.cloud" className="text-[13px] text-slate-500 hover:text-teal transition-colors no-underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
