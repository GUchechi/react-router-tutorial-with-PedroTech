import React from 'react'

const About = ({name, number}) => {
  return (
    <div className='about'>
        <h1>{name}</h1>
        <h1>{number}</h1>
    </div>
  )
}

export default About