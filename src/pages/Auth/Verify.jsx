import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'

const { useState } = React

const Verify = () => {
  const history = useHistory()

  const [otp, setOtp] = useState('')

  const getOtp = (e) => {
    setOtp(e.target.value)
  }

  const handleVerify = async () => {
    const token = localStorage.getItem('token')
    if (!token) history.replace('/login')

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    const res = await axios.post(
      `${API_URL}/verify`,
      { otp_code: otp },
      { headers: headers }
    )
    console.log(res.data)
    if (res.data.status === 200) {
      history.replace('/profile')
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto mt-5">
        <div className="card">
          <div className="card-header text-center">
            <h2>Verify Account</h2>
          </div>

          <div className="card-body">
            <div className="form-group my-3">
              <label htmlFor="otp">OTP Code</label>
              <input
                value={otp}
                onChange={getOtp}
                type="text"
                name="otp"
                className="form-control"
              />
            </div>

            <hr />

            <div className="form-group">
              <button onClick={handleVerify} className="btn btn-primary">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify
