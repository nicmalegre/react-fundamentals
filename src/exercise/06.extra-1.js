// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Try to get the usernameInput's value using a ref.

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const username = ref.current.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={ref} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
