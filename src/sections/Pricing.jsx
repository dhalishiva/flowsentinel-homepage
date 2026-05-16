import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    tagline: 'For teams getting started',
    price: '$15,000',
    period: '/year',
    setup: '$10,000 one-time setup',
    highlight: false,
    mailboxes: 'Up to 5 mailboxes',
    support: 'Standard support (2 business days)',
    features: [
      'Real-time IMAP liveness monitoring',
      'OAuth token lifecycle tracking',
      'Proactive expiry email alerts',
      'Connection failure detection',
      'Token regeneration workflow',
      'Alert history & audit log',
      'Unlimited admin users',
      'Your own dedicated database',
      'Standard email support',
    ],
    cta: 'Contact sales',
    ctaHref: '#contact',
  },
  {
    name: 'Professional',
    tagline: 'For larger deployments',
    price: '$25,000',
    period: '/year',
    setup: '$10,000 one-time setup',
    highlight: true,
    mailboxes: 'Up to 15 mailboxes',
    support: 'Priority support (same business day)',
    features: [
      'Everything in Starter, plus:',
      'Priority same-day support',
      'Dedicated onboarding call',
      'Quarterly health reviews',
      'Custom alert thresholds',
      'Weekly summary reports',
      'Audit logs & compliance export',
      'Early access to new features',
    ],
    cta: 'Contact sales',
    ctaHref: '#contact',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-navy-2">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="font-mono text-[11px] text-teal tracking-[0.12em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light tracking-[-0.025em] leading-[1.15] mb-5">
            Simple, predictable pricing.
            <br />
            <strong className="font-semibold">No surprises.</strong>
          </h2>
          <p className="text-[16px] text-slate-400 max-w-[480px] mx-auto leading-[1.7] font-light">
            Annual license includes all monitoring features and support.
            Additional mailboxes available at{' '}
            <span className="text-white font-medium">$3,000/mailbox/year</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="rounded-xl p-8 relative flex flex-col"
              style={{
                background: tier.highlight ? 'rgba(0,212,170,0.05)' : '#131d33',
                border: tier.highlight
                  ? '1px solid rgba(0,212,170,0.3)'
                  : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-teal text-navy text-[11px] font-semibold tracking-wide uppercase">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[18px] font-semibold text-white mb-1">{tier.name}</h3>
                <p className="text-[13px] text-slate-400">{tier.tagline}</p>
              </div>

              <div className="mb-2">
                <span className="text-[42px] font-light tracking-tight text-white leading-none">
                  {tier.price}
                </span>
                <span className="text-slate-400 text-[14px] ml-1">{tier.period}</span>
              </div>
              <p className="text-[12px] text-slate-500 mb-6">{tier.setup}</p>

              {/* Highlighted limits */}
              <div className="flex flex-col gap-2 mb-6 p-4 rounded-lg"
                style={{ background: 'rgba(0,212,170,0.05)', border: '1px solid rgba(0,212,170,0.12)' }}>
                <p className="text-[13px] text-teal font-medium">{tier.mailboxes}</p>
                <p className="text-[13px] text-teal/70">{tier.support}</p>
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className="text-teal flex-shrink-0 mt-0.5"
                      style={{ opacity: f.startsWith('Everything') ? 0.5 : 1 }}
                    />
                    <span className={`text-[13.5px] leading-[1.5] ${
                      f.startsWith('Everything') ? 'text-slate-500 italic' : 'text-slate-300'
                    }`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`flex items-center justify-center gap-2 py-3 rounded-lg text-[14px] font-semibold no-underline transition-colors ${
                  tier.highlight
                    ? 'bg-teal text-navy hover:bg-teal-dim'
                    : 'text-white hover:bg-white/5'
                }`}
                style={!tier.highlight ? { border: '1px solid rgba(255,255,255,0.12)' } : {}}
              >
                {tier.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Extra mailboxes note */}
        <p className="text-center text-[13px] text-slate-500 mt-8">
          Need more mailboxes?{' '}
          <a href="#contact" className="text-teal hover:underline no-underline">
            Contact us
          </a>{' '}
          for a custom quote. All plans include a 3-day trial license for initial setup.
        </p>
      </div>
    </section>
  )
}
