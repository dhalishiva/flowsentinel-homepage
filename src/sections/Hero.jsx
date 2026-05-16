import { useEffect, useRef } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.anim')
    els?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1 + 0.1}s`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,170,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,170,0.04) 0%, transparent 65%)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="opacity-0-init anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
          style={{ borderColor: 'rgba(0,212,170,0.25)', background: 'rgba(0,212,170,0.06)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot" />
          <span className="font-mono text-[11px] text-teal tracking-[0.12em] uppercase font-medium">
            Intelligent Workflow Continuity Monitor
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0-init anim text-[clamp(38px,6vw,72px)] font-light leading-[1.06] tracking-[-0.03em] mb-6">
          Your approval workflows{' '}
          <br className="hidden md:block" />
          should{' '}
          <strong className="font-semibold text-gradient">never stop silently.</strong>
        </h1>

        {/* Sub */}
        <p className="opacity-0-init anim text-[clamp(15px,2vw,18px)] font-light text-slate-400 max-w-[560px] mx-auto leading-[1.75] mb-10">
          FlowSentinel monitors your enterprise workflow integrations in real time —
          detecting credential failures, processing stalls, and service outages
          before your business feels the impact.
        </p>

        {/* CTAs */}
        <div className="opacity-0-init anim flex items-center justify-center gap-4 flex-wrap mb-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-navy text-[15px] font-semibold rounded-lg hover:bg-teal-dim transition-colors no-underline"
            style={{ boxShadow: '0 0 0 0 rgba(0,212,170,0)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 0 6px rgba(0,212,170,0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0,212,170,0)'}
          >
            Request a demo <ArrowRight size={16} />
          </a>
          <a
            href="https://app.flowsentinel.cloud"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white rounded-lg no-underline transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Sign in to app
          </a>
        </div>

        {/* Trust note */}
        <p className="opacity-0-init anim text-[12px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} className="text-teal opacity-70" />
          Data stays in your own cloud account. No shared infrastructure.
        </p>
      </div>

      {/* Stats bar */}
      <div className="opacity-0-init anim relative z-10 w-full max-w-3xl mx-auto mt-20">
        <div className="grid grid-cols-3 rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          {[
            { value: '< 5 min', label: 'Detection latency' },
            { value: '90 days', label: 'Token lifecycle tracked' },
            { value: '24 / 7', label: 'Autonomous monitoring' },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-7 text-center bg-navy-2"
              style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              <div className="text-[28px] font-semibold text-teal tracking-tight leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-[12px] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
