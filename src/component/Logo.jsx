import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'} className='font-bold text-2xl text-brand-light'>AS Blogs</Link>
  )
}

export default Logo