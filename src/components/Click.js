import { useState } from 'react'

function Click() {
  const [heading, setHeading] = useState('Hello, world')

  const handleClick = () => {
    setHeading('Ciao, mondo')
  }

  return (
    <>
      <h1>{heading}</h1>
      <button type='button' onClick={handleClick}>
        Click Me
      </button>
    </>
  )
}

export default Click
