import { Bell, RefreshCw, Shield, BarChart3, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Bell,
    title: 'Proactive token expiry alerts',
    body: 'Set a notification date for each integration credential. FlowSentinel emails designated recipients days before expiry — not after the outage.',
  },
  {
    icon: Zap,
    title: '5-minute liveness checks',
    body: 'Every five minutes, FlowSentinel connects to each monitored mailbox and verifies messages are being processed. Stale mail triggers an immediate alert.',
  },
  {
    icon: RefreshCw,
    title: 'Guided token regeneration',
    body: 'When a credential needs rotation, an in-app workflow guides the administrator through generating and applying the new token — step by step, with no ambiguity.',
  },
  {
    icon: Shield,
    title: 'Your data, your infrastructure',
    body: 'Each organisation runs on its own dedicated database instance. Credentials are encrypted at rest. No shared infrastructure, no data co-mingling.',
  },
  {
    icon: BarChart3,
    title: 'Alert history and audit trail',
    body: 'Every alert sent, every credential regenerated, every configuration change — all logged with actor, timestamp, and detail for accountability and compliance.',
  },
  {
    icon: Users,
    title: 'Multi-admin access control',
    body: 'Role-based access with approval workflows for new users, OTP-based password recovery, and super-admin controls — built for teams, not individuals.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-[11px] text-teal tracking-[0.12em] uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light tracking-[-0.025em] leading-[1.15] mb-5">
            Everything you need to keep{' '}
            <br className="hidden md:block" />
            <strong className="font-semibold">workflows running continuously.</strong>
          </h2>
          <p className="text-[16px] text-slate-400 max-w-[520px] leading-[1.7] font-light">
            Built specifically for enterprise workflow integrations.
            Not a generic monitoring tool adapted for your use case.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="group p-7 bg-card hover:bg-card-hover transition-colors duration-200 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-teal transition-colors duration-300" />
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Icon size={16} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-400 leading-[1.65] font-light">
                      {f.body}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
