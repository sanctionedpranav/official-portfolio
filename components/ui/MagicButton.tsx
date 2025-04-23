import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string
  icon: React.ReactNode
  position: 'left' | 'right'
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
    <button
      className="relative inline-flex w-full sm:w-auto md:mt-10 overflow-hidden rounded-lg focus:outline-none p-[1px]"
      onClick={handleClick}
    >
      <span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        style={{
          animation: `spin ${Math.floor(Math.random() * 1000 + 1000)}ms linear infinite`,
        }}
      />
      <span
        className={`px-6 py-3 relative inline-flex items-center justify-center gap-2 w-full text-white text-sm font-medium bg-slate-950 rounded-lg backdrop-blur-3xl z-10 ${otherClasses}`}
      >
        {position === 'left' && <span className="text-xl">{icon}</span>}
        {title}
        {position === 'right' && <span className="text-xl">{icon}</span>}
      </span>
    </button>
  )
}

export default MagicButton
