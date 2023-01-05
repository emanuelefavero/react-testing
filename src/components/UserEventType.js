import { useState } from 'react'

function UserEventType() {
  const [username, setUsername] = useState('')
  return (
    <>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button aria-label='Register' disabled={!username}>
        Register
      </button>
    </>
  )
}

export default UserEventType
