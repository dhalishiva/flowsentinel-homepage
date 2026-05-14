import { AlertTriangle, Clock, Search } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Silent credential expiry',
    body: 'Microsoft OAuth refresh tokens expire every 90 days. When they do, your approval integration fails without warning. The first sign of trouble is your finance team reporting missing approvals — hours later.',
  },
  {
    icon: Clock,
    title: 'Processing stalls go undetected',
    body: 'When the service hosting your workflow engine crashes or stalls, emails accumulate in inboxes with no alerts. You only discover the problem after downstream processes are already delayed.',
  },
  {
    icon: Search,
    title: 'No built-in monitoring exists',
    body: 'Tungsten ReadSoft and similar platforms have no proactive notification for credential lifecycle or processing health. The industry workaround is a calendar reminder every 80 days. That is not enough.',
  },
]

export default function Problem() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-navy-2">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-[11px] text-teal tracking-[0.12em] uppercase mb-4">
            The problem
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light tracking-[-0.025em] leading-[1.15] mb-5">
            Enterprise workflow failures are{' '}
            <strong className="font-semibold">predictable.</strong>
            <br className="hidden md:block" /> They just go{' '}
            <strong className="font-semibold text-gradient">unmonitored.</strong>
          </h2>
          <p className="text-[16px] text-slate-400 max-w-[520px] leading-[1.7] font-light">
            The tools that orchestrate your approval workflows were built for processing,
            not for observability. FlowSentinel fills that gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group p-8 bg-card hover:bg-card-hover transition-colors duration-200 relative"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-teal transition-colors duration-300" />

                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-5"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Icon size={18} className="text-teal" />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[14px] text-slate-400 leading-[1.7] font-light">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
