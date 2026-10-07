import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const alt = 'Pranav Sharma — Frontend Developer & UI Engineer';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #050819 0%, #0c1033 50%, #040615 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 20px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 12px #22c55e',
              }}
            />
            <span style={{ fontSize: '18px', fontWeight: 600, color: '#e2e8f0', letterSpacing: '0.5px' }}>
              Available for Full-Time Roles & Freelance
            </span>
          </div>

          <span
            style={{
              fontSize: '20px',
              color: '#a78bfa',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            pranav-portfolio-woad.vercel.app
          </span>
        </div>

        {/* Center Main Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              background: 'linear-gradient(90deg, #ffffff 30%, #cbacf9 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Pranav Sharma
          </h1>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#cbd5e1',
              margin: 0,
            }}
          >
            Frontend Developer & UI Engineer
          </p>
          <p
            style={{
              fontSize: '22px',
              color: '#94a3b8',
              margin: 0,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Crafting high-performance modern web apps with React, Next.js, TypeScript & 3D Interactive Design.
          </p>
        </div>

        {/* Bottom Tech Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {['React.js', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Three.js', 'GSAP', 'Redux'].map(
            (skill) => (
              <div
                key={skill}
                style={{
                  padding: '8px 18px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(203, 172, 249, 0.12)',
                  border: '1px solid rgba(203, 172, 249, 0.3)',
                  color: '#e9d5ff',
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
