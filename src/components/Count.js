import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Count
