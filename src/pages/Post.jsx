import React from 'react'

const Post = ({ post }) => {
  return (
    <div className="card m-4">
      <div className="card-header">
        <h2>{post.title}</h2>
      </div>

      <div className="card-body">
        {post.body}
      </div>
    </div>
  )
}

export default Post
