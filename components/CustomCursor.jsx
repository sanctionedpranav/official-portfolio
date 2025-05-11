import React from 'react'
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        outerScale={1.5}
        innerScale={1.2}
        trailingSpeed={6}
        outerAlpha={0}
        outerStyle={{
          // border: '3px solid #ffffff',
          backgroundColor: '#ffffff44',
          mixBlendMode: 'difference',
        }}
        innerStyle={{
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
        }}
        clickables={[
          'a',
          'button',
          'input',
          'textarea',
          '.cursor-hover', // your custom hover classes
        ]}
      />

    </div>
  )
}

export default CustomCursor