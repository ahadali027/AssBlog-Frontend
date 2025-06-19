import React from 'react'

function SectionWrapper({children, className}) {
  return (
    <div className={`max-w-7xl mx-auto px-10 py-5 ${className}`}>{children}</div>
  )
}

export default SectionWrapper