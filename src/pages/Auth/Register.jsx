import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'

const { useState } = React

const Register = () => {
  const history = useHistory()

  const userObjectSchema = {
    surname: '',
    other_names: '',
    email: '',
    gender: '',
    phone_number: '',
    password: '',
    role: '',
  }

  const errorObjectSchema = {
    message: '',
    errors: null,
  }

  const [userObject, setUserObject] = useState(userObjectSchema)
  const [errorObject, setErrorObject] = useState(errorObjectSchema)

  const getUser = (e) => {
    setUserObject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API_URL}/register`, userObject)
      console.log(res.data)
      if (res.data.status === 201) history.replace('/login')
    } catch (error) {
      if (error.request?.status === 422) {
        setErrorObject(JSON.parse(error.request.response))
        console.log(JSON.parse(error.request.response))
      } else {
        console.log(error)
        setErrorObject({
          message: 'Error ocurred',
          errors: [],
        })
      }
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto mt-5">
        <div className="card">
          <div className="card-header text-center">
            <h2>Register</h2>
          </div>

          <div className="card-body">
            <div className="form-group my-3">
              <label htmlFor="surname">Surname</label>
              <input
                value={userObject.surname}
                onChange={getUser}
                type="text"
                name="surname"
                className="form-control"
              />
              {errorObject.errors?.surname && (
                <div className="text-danger">
                  {errorObject.errors.surname[0]}
                </div>
              )}
            </div>

            <div className="form-group my-3">
              <label htmlFor="other_names">Other Names</label>
              <input
                value={userObject.other_names}
                onChange={getUser}
                type="text"
                name="other_names"
                className="form-control"
              />
              {errorObject.errors?.other_names && (
                <div className="text-danger">
                  {errorObject.errors.other_names[0]}
                </div>
              )}
            </div>

            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                value={userObject.email}
                onChange={getUser}
                type="email"
                name="email"
                className="form-control"
              />

              {errorObject.errors?.email && (
                <div className="text-danger">{errorObject.errors.email[0]}</div>
              )}
            </div>

            <div className="form-group my-3">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                value={userObject.phone_number}
                onChange={getUser}
                type="text"
                name="phone_number"
                className="form-control"
              />

              {errorObject.errors?.phone_number && (
                <div className="text-danger">
                  {errorObject.errors.phone_number[0]}
                </div>
              )}
            </div>

            <div className="form-group my-3">
              <label htmlFor="password">Password</label>
              <input
                value={userObject.password}
                onChange={getUser}
                type="password"
                name="password"
                className="form-control"
              />

              {errorObject.errors?.password && (
                <div className="text-danger">
                  {errorObject.errors.password[0]}
                </div>
              )}
            </div>

            <div className="form-group my-3">
              <label htmlFor="gender">Gender</label>
              <select
                value={userObject.gender}
                onChange={getUser}
                name="gender"
                className="form-control"
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {errorObject.errors?.gender && (
                <div className="text-danger">
                  {errorObject.errors.gender[0]}
                </div>
              )}
            </div>

            <div className="form-group my-3">
              <label htmlFor="role">Role</label>
              <select
                value={userObject.role}
                onChange={getUser}
                name="role"
                className="form-control"
              >
                <option value="">-- Select Role --</option>
                <option value="landlord">Landlord</option>
                <option value="client">Client</option>
              </select>

              {errorObject.errors?.role && (
                <div className="text-danger">
                  {errorObject.errors.role[0]}
                </div>
              )}
            </div>

            <hr />

            <div className="form-group">
              <button onClick={handleRegister} className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
