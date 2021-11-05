import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'

const { useState, useEffect } = React

const CreateProperty = () => {
  const history = useHistory()

  const token = localStorage.getItem('token')
  if (!token) history.replace('/login')
  const headers = {
    'Content-Type': 'multipart/formdata',
    Authorization: `Bearer ${token}`,
  }

  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  const getProperties = async () => {
    const res = await axios.get(`${API_URL}/properties`, {
      headers: headers,
    })
    setProperties(res.data.data)
    setLoading(false)
  }

  useEffect(() => {
    getProperties()
    return () => {
      setProperties([])
    }
  }, [])

  const handleCreate = async () => {
    const dataObject = {
      listing_type: 'Own Compound',
      building_type: 'Apartment',
      property_name: 'Test Apartments II',
      unit_size: '500 sqft',
      stay_type: 'Long Stay',
      is_furnished: true,
      rent_cost: 43500,
      utilities_cost: 7500,
      currency: 'KES',
      bedrooms: 2,
      bathrooms: 2,
      location: 'Kasarani, Nairobi',
      description: 'Call the number insets...',
      amenities: ['Pool Table', 'PS5', 'Parking', 'SPA'],
      available_from: '15/11/2021',
    }

    try {
      await axios.post(`${API_URL}/properties`, dataObject, {
        headers: headers,
      })

      getProperties()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={handleCreate} className="btn btn-success">
        Create Property
      </button>

      {loading && <div className="text-success">Loading..., Please wait.</div>}
      <div className="row my-5">
        {properties.map((p) => {
          return (
            <div key={p.id} className="col-lg-6 mt-5">
              <div className="card">
                <div className="card-header text-center">
                  <h2>{p.name}</h2>
                </div>
                <div className="card-body">
                  <p>Listing Type: {p.listing_type}</p>
                  <p>Bulding Type: {p.building_type}</p>
                  <p>Stay Type: {p.stay_type}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* <pre>{JSON.stringify(properties, null, 2)}</pre> */}
    </div>
  )
}

export default CreateProperty
