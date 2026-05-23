import React from "react"

const Login = () => {
  return (
    <main>
    <div className="form-container">
      <h1>Login</h1>

      <form>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" id = "email" name = "email" placeholder="Enter email address"/>
        </div>

      </form>
    </div>
    </main>
  )
}

export default Login