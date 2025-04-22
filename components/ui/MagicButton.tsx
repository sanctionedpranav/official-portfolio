import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: {
  title: string,
  icon: React.ReactNode,
  position: string,
  handleClick?: () => void,
  otherClasses?: string
}) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
      <span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        style={{
          animation: `spin ${Math.floor(Math.random() * 1000 + 1000)}ms linear infinite`,
        }}
      />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        <span className='text-lg'>{position === 'left' && icon}</span>
        {title}
        <span className='text-lg'>{position === 'right' && icon}</span>
      </span>
    </button>
  )
}

export default MagicButton