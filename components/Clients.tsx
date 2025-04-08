import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Kind Words From {' '}
        <span className="text-purple">Satisfied Client</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

       
      </div>
    </div>
  )
}

export default Clients