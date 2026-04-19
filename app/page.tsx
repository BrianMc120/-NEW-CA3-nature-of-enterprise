import Link from 'next/link'

const courses = [
  { label: 'CS1010 · Programming', color: 'var(--lec-bg)', text: 'var(--lec-text)' },
  { label: 'CS1020 · Maths', color: 'var(--tut-bg)', text: 'var(--tut-text)' },
  { label: 'CS1030 · Systems', color: 'var(--lab-bg)', text: 'var(--lab-text)' },
]

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        gap: '2rem',
      }}
    >
      <style>{`
        .home-link {
          display: inline-block;
          background: var(--text);
          color: #fff;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.04em;
          padding: 0.75rem 2rem;
          border-radius: 999px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .home-link:hover { opacity: 0.75; }
        .home-link:focus-visible {
          outline: 3px solid var(--accent);
          outline-offset: 3px;
        }
      `}</style>

      <div className="fade-up" style={{ textAlign: 'center', maxWidth: '480px' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '1rem',
        }}>
          First Year Computing
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '1.25rem',
        }}>
          Campus<br />
          <em>Companion</em>
        </h1>

        <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '2rem', lineHeight: 1.7 }}>
          Your semester at a glance. See lectures, labs, and tutorials
          for each of your modules — all in one place.
        </p>

        <Link href="/timetable" className="home-link">
          View my timetable →
        </Link>
      </div>

      {/* decorative course pills */}
      <div
        className="fade-up delay-2"
        style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {courses.map(p => (
          <span
            key={p.label}
            style={{
              background: p.color,
              color: p.text,
              fontSize: '12px',
              fontWeight: 500,
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
            }}
          >
            {p.label}
          </span>
        ))}
      </div>
    </main>
  )
}