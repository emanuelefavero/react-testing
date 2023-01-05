import React from 'react'

function Mocking({ name, setName }) {
  return (
    <>
      <h1>Mocking</h1>
      <label htmlFor='nameInput'>
        Name:
        <input
          id='nameInput'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <h2>{name}</h2>
    </>
  )
}

export default Mocking
