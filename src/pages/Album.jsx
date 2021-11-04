import React from 'react'

const Album = ({ album }) => {
  return (
    <div className="card m-4">
      <div className="card-header">
        <h2>{album.title}</h2>
      </div>
    </div>
  )
}

export default Album
