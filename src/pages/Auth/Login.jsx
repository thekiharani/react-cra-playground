import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'

const { useState } = React

const Login = () => {
  const history = useHistory()

  const userObject = {
    email: '',
    password: '',
  }

  const [user, setUser] = useState(userObject)

  const getUser = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = async () => {
    const res = await axios.post(`${API_URL}/login`, user)
    console.log(res.data)
    if (res.data.status === 200) {
      localStorage.setItem('token', res.data.token)
      history.replace('/verify')
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto mt-5">
        <div className="card">
          <div className="card-header text-center">
            <h2>Login</h2>
          </div>

          <div className="card-body">
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                value={user.email}
                onChange={getUser}
                type="email"
                name="email"
                className="form-control"
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="password">Password</label>
              <input
                value={user.password}
                onChange={getUser}
                type="password"
                name="password"
                className="form-control"
              />
            </div>

            <hr />

            <div className="form-group">
              <button onClick={handleLogin} className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
