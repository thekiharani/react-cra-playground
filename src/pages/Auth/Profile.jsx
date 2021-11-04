import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'
const { useState, useEffect } = React

const Profile = () => {
  const history = useHistory()
  const [userData, setUserData] = useState(null)

  const checkUser = async () => {
    const token = localStorage.getItem('token')
    if (!token) history.replace('/login')

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const res = await axios.get(`${API_URL}/profile`, { headers: headers })

    if (res.data.status !== 200) {
      history.replace('/login')
    } else {
      setUserData(res.data.user)
    }
  }

  useEffect(() => {
    checkUser()
    return () => {
      setUserData(null)
    }
  }, [])
  return (
    <div>
      <pre>{JSON.stringify(userData, null, 4)}</pre>
    </div>
  )
}

export default Profile
