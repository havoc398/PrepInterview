import React from 'react'
import { useNavigate,Link } from 'react-router'

const Register = () => {
  
  const navigate = useNavigate()
  useState[username, setUsername] = useState("")
  useState[email, setEmail] = useState("")
  useState[password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
             onChange={(e)=>{}}
             type="username" id='username' name='username' placeholder='Enter username' />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' placeholder='Enter email address' />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' placeholder='Enter the password' />
          </div>

          <button className='button primary-button'>Register</button>

        </form>

        <p>Already have an account? <Link to={"/login"}>Login</Link> </p>
      </div>
    </main>
  )
}

export default Register;