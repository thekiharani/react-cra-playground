import React from 'react'
import axios from 'axios'
import Album from './Album'

const { useState, useEffect } = React

const Albums = () => {
  const [albums, setAlbums] = useState([])

  const getAlbums = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/albums'
    const res = await axios.get(API_URL)
    setAlbums(res.data)
  }

  useEffect(() => {
    getAlbums()
    return () => {
      setAlbums([])
    }
  }, [])
  return (
    <div>
      <h1>Albums</h1>
      <div className="row">
        {albums.map((album) => {
          return (
            <div key={album.id} className="col-md-6">
              <Album album={album} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Albums
