import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', mailboxes: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const update = field => e => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  setError('')

  try {
    const res = await fetch(
      `${import.meta.env.VITE_REGISTRY_URL}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_REGISTRY_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_REGISTRY_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          mailboxes: form.mailboxes,
          message: form.message,
        }),
      }
    )

    const data = await res.json()
    if (!res.ok || data.success === false) {
      throw new Error(data.error || 'Submission failed')
    }

    setStatus('sent')
  } catch (err) {
    setError('Something went wrong. Please email us directly at admin@flowsentinel.cloud')
    setStatus('idle')
  }
}

  const inputClass = `
    w-full px-4 py-3 rounded-lg text-[14px] text-white placeholder-slate-500
    bg-navy border transition-colors outline-none
    focus:border-teal/60
  `
  const inputStyle = { border: '1px solid rgba(255,255,255,0.1)' }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left copy */}
          <div>
            <p className="font-mono text-[11px] text-teal tracking-[0.12em] uppercase mb-4">
              Get in touch
            </p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-light tracking-[-0.025em] leading-[1.15] mb-6">
              Let's talk about{' '}
              <strong className="font-semibold">keeping your workflows running.</strong>
            </h2>
            <p className="text-[16px] text-slate-400 leading-[1.7] font-light mb-8">
              Tell us about your environment and we'll put together a proposal.
              Most deployments are live within a week of sign-off.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { step: '01', text: 'You fill in the form with your details' },
                { step: '02', text: 'We respond within one business day' },
                { step: '03', text: 'Demo call — we show you the product live' },
                { step: '04', text: 'Proposal + pricing, tailored to your setup' },
                { step: '05', text: 'Sign off → we deploy → you\'re live in days' },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-mono text-[11px] text-teal/60 tracking-widest mt-0.5 w-6 flex-shrink-0">
                    {s.step}
                  </span>
                  <p className="text-[14px] text-slate-300">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-xl p-8"
            style={{ background: '#131d33', border: '1px solid rgba(255,255,255,0.07)' }}>
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,212,170,0.1)' }}>
                  <CheckCircle size={28} className="text-teal" />
                </div>
                <h3 className="text-[18px] font-semibold text-white">Message sent</h3>
                <p className="text-[14px] text-slate-400 max-w-[280px] leading-relaxed">
                  We'll be in touch within one business day. Check your email.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', company: '', email: '', mailboxes: '', message: '' }) }}
                  className="mt-2 text-[13px] text-teal hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] text-slate-400 font-medium">Full name *</label>
                    <input
                      type="text" required placeholder="Jane Smith"
                      value={form.name} onChange={update('name')}
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] text-slate-400 font-medium">Company *</label>
                    <input
                      type="text" required placeholder="Acme Corp"
                      value={form.company} onChange={update('company')}
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-slate-400 font-medium">Work email *</label>
                  <input
                    type="email" required placeholder="jane@acmecorp.com"
                    value={form.email} onChange={update('email')}
                    className={inputClass} style={inputStyle}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-slate-400 font-medium">
                    Number of mailboxes to monitor
                  </label>
                  <select
                    value={form.mailboxes} onChange={update('mailboxes')}
                    className={inputClass + ' cursor-pointer'}
                    style={{ ...inputStyle, background: '#0a0f1e' }}
                  >
                    <option value="">Select a range</option>
                    <option value="1-5">1 – 5</option>
                    <option value="6-10">6 – 10</option>
                    <option value="11-15">11 – 15</option>
                    <option value="15+">More than 15</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-slate-400 font-medium">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={4} placeholder="Tell us about your current setup, pain points, or questions..."
                    value={form.message} onChange={update('message')}
                    className={inputClass + ' resize-none'} style={inputStyle}
                  />
                </div>

                {error && (
                  <p className="text-[13px] text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-[14px] font-semibold text-navy bg-teal hover:bg-teal-dim transition-colors disabled:opacity-60 mt-2"
                >
                  {status === 'sending' ? (
                    <>Sending...</>
                  ) : (
                    <><Send size={15} /> Send message</>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
