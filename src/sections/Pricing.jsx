import { Check, ArrowRight, Mail } from 'lucide-react'

const tiers = [
  {
    name: 'Standard',
    tagline: 'For enterprise AP workflow monitoring',
    price: '$25,000',
    period: '/year',
    setup: '$12,500 one-time setup fee',
    highlight: false,
    mailboxes: 'Up to 5 mailboxes',
    support: 'Email support (48hr response)',
    features: [
      'Real-time IMAP liveness monitoring',
      'OAuth token lifecycle tracking',
      'Proactive expiry email alerts',
      'Connection failure detection',
      '1-click token regeneration',
      'Alert history & audit log',
      'Unlimited admin users',
      'Your own dedicated database',
      '$5,000 per additional workflow',
    ],
    cta: 'Contact sales',
    ctaHref: '#contact',
    custom: false,
  },
  {
    name: 'Professional',
    tagline: 'Larger deployments & priority support',
    price: null,
    period: null,
    setup: null,
    highlight: true,
    mailboxes: 'Up to 15+ mailboxes',
    support: 'Priority support (same business day)',
    features: [
      'Everything in Standard, plus:',
      'Priority same-day support',
      'Dedicated onboarding call',
      'Quarterly continuity health reviews',
      'Custom alert thresholds per workflow',
      'Weekly digest reports to stakeholders',
      'Audit logs & compliance export',
      'Early access to new features',
    ],
    cta: 'Get a custom quote',
    ctaHref: '#contact',
    custom: true,
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
            Additional mailbox available at{' '}
            <span className="text-white font-medium">$5,000 / workflow / year</span>.
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
                    Enterprise
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[18px] font-semibold text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-[13px] text-slate-400">{tier.tagline}</p>
              </div>

              {tier.custom ? (
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={22} className="text-teal" />
                    <span className="text-[28px] font-light text-white tracking-tight leading-none">
                      Custom pricing
                    </span>
                  </div>

                  <p className="text-[12px] text-slate-500">
                    Tailored to your deployment size and requirements
                  </p>
                </div>
              ) : (
                <div className="mb-6">
                  <span className="text-[42px] font-light tracking-tight text-white leading-none">
                    {tier.price}
                  </span>

                  <span className="text-slate-400 text-[14px] ml-1">
                    {tier.period}
                  </span>

                  <p className="text-[12px] text-slate-500 mt-1">
                    {tier.setup}
                  </p>
                </div>
              )}

              <div
                className="flex flex-col gap-2 mb-6 p-4 rounded-lg"
                style={{
                  background: 'rgba(0,212,170,0.05)',
                  border: '1px solid rgba(0,212,170,0.12)',
                }}
              >
                <p className="text-[13px] text-teal font-medium">
                  {tier.mailboxes}
                </p>

                <p className="text-[13px] text-teal/70">
                  {tier.support}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className="text-teal flex-shrink-0 mt-0.5"
                      style={{ opacity: f.startsWith('Everything') ? 0.5 : 1 }}
                    />

                    <span
                      className={
                        f.startsWith('Everything')
                          ? 'text-[13.5px] leading-[1.5] text-slate-500 italic'
                          : 'text-[13.5px] leading-[1.5] text-slate-300'
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                style={
                  tier.highlight
                    ? {}
                    : { border: '1px solid rgba(255,255,255,0.12)' }
                }
                className={
                  tier.highlight
                    ? 'flex items-center justify-center gap-2 py-3 rounded-lg text-[14px] font-semibold no-underline transition-colors bg-teal text-navy hover:bg-teal-dim'
                    : 'flex items-center justify-center gap-2 py-3 rounded-lg text-[14px] font-semibold no-underline transition-colors text-white hover:bg-white/5'
                }
              >
                {tier.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-slate-500 mt-8">
          On-site and call support is available and charged separately.
          <a href="#contact" className="text-teal hover:underline no-underline ml-1">
            Contact us
          </a>
          {' '}to discuss your requirements.
        </p>
      </div>
    </section>
  )
}