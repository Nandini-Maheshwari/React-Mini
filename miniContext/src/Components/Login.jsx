import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)
  // In this line we're accessing the setUser function from the context created 
  // it's not a global value, it might have diff states/values in a single project
  // we are accessing the one provided by UserContext

  // Changes made using setUser inside a component will affect the state stored
  // in the UserContext provided by the UserContextProvider.
  // Other components consuming the same context will reflect these changes
  // when they are re-rendered due to state updates.

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div>
      <h2>Login</h2>

      <input type="text" 
      value={username}
      onChange={(e) => {setUsername(e.target.value)}}
      placeholder="Username"/>

      <input type="text" 
      value={password}
      onChange={(e) => {setPassword(e.target.value)}}
      placeholder="Password"/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
