import React from 'react'
import axios from 'axios'
import Album from './Album'

const { useState, useEffect } = React

const Albums = () => {
  const [albums, setAlbums] = useState([])

  const getAlbums = async () => {
    const res = await axios.get('/albums')
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
