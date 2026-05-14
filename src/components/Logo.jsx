export default function Logo({ size = 32, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-teal ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    >
      <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 18 18" fill="none">
        {/* Flow lines — represent workflow continuity */}
        <path d="M2 5h6a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h2" stroke="#0a0f1e" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M2 9h3" stroke="#0a0f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
        <path d="M2 13h6a3 3 0 0 0 3-3v0" stroke="#0a0f1e" strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
        {/* Sentinel dot */}
        <circle cx="15.5" cy="5" r="1.5" fill="#0a0f1e"/>
      </svg>
    </div>
  )
}
