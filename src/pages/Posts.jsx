import React from 'react'
import axios from 'axios'
import Post from './Post'

const { useState, useEffect } = React

const Posts = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    // const URL = 'https://jsonplaceholder.typicode.com/posts'
    const res = await axios.get('/posts')
    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
    return () => {
      setPosts([])
    }
  }, [])
  return (
    <div>
      <h1>Posts</h1>
      <div className="row">
        {posts.map((post) => {
          return (
            <div key={post.id} className="col-md-6">
              <Post post={post} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
