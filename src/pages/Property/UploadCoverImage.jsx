import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'
const { useState, useEffect } = React

const UploadCoverImage = ({ propertyID }) => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if (!token) history.replace('/login')
  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  }

  const [dataObject, setDataObject] = useState({
    image: null,
    caption: '',
  })

  const handleFile = (e) => {
    console.log(e.target.files[0])
    setDataObject((prev) => ({
      ...prev,
      image: e.target.files[0],
    }))
  }

  const handleCaption = (e) => {
    setDataObject((prev) => ({
      ...prev,
      caption: e.target.value,
    }))
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    console.log(dataObject)
    let formData = new FormData()
    formData.append('cover_image', dataObject.image)
    formData.append('caption', dataObject.caption)
    console.log(formData)
    /* fetch(`${API_URL}/property/${propertyID}/ci_update`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      }) */
    const res = await axios.post(
      `${API_URL}/property/${propertyID}/ci_update`,
      formData,
      {
        headers: headers,
      }
    )

    console.log(res.data);
  }

  return (
    <div className="card">
      <div className="card-header text-center">
        <h3>Upload Image</h3>
      </div>

      <div className="card-body">
        {JSON.stringify(dataObject, null, 2)}
        <form>
          <div className="form-group mb-4">
            <input
              type="text"
              name="caption"
              onChange={handleCaption}
              value={dataObject.caption}
              className="form-control"
              placeholder="Caption"
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="file"
              name="image"
              onChange={handleFile}
              className="form-control form-control-file"
              placeholder="Caption"
            />
          </div>

          <hr />

          <div className="form-group mb-4">
            <button onClick={handleUpload} className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadCoverImage
