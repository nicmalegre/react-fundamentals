// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Try to get the usernameInput's value using a ref.

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const ref = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const username = ref.current.value
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={ref}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
      {error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
