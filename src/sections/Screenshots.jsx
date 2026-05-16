import { useState } from 'react'

const screenshots = [
  {
    id: 1,
    label: 'Secure Login',
    caption: 'Company-code based authentication keeps your monitoring portal secure and isolated from other tenants.',
    file: '/screenshots/2.webp',
  },
  {
    id: 2,
    label: 'Mailbox Monitoring',
    caption: 'Monitor all your ReadSoft approval mailboxes in one place. Real-time token health, sync status, and instant error visibility.',
    file: '/screenshots/1.webp',
  },
  {
    id: 3,
    label: 'Alert History',
    caption: 'Full audit trail of every alert sent. Filter by mailbox or alert type to quickly diagnose recurring issues.',
    file: '/screenshots/3.webp',
  },
  {
    id: 4,
    label: 'SMTP Configuration',
    caption: 'Configure outbound alerts once and all notifications flow through your own email infrastructure.',
    file: '/screenshots/4.webp',
  },
  {
    id: 5,
    label: 'Admin Users',
    caption: 'Create and manage your operations team. Role-based access with super admin controls.',
    file: '/screenshots/5.webp',
  },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Product tour
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See it in action
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A clean, purpose-built interface for operations teams who need to know their approval workflows are running — without the noise.
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {screenshots.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <div className="relative">
          {/* Glow effect behind the image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[60%] h-[40%] bg-indigo-600/20 rounded-full blur-3xl" />
          </div>

          {/* Main screenshot */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-500/10 transition-all duration-300">
            <img
              key={active}
              src={screenshots[active].file}
              alt={screenshots[active].label}
              className="w-full h-auto block"
              style={{ animation: 'fadeIn 0.25s ease' }}
            />
          </div>

          {/* Caption below */}
          <div className="text-center mt-6">
            <p className="text-slate-300 text-base max-w-xl mx-auto">
              {screenshots[active].caption}
            </p>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${
                active === i
                  ? 'w-6 h-2 bg-indigo-500'
                  : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}