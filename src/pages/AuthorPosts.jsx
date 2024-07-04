import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../Components/PostItem'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        {posts.length > 0 ? <div className="container posts_container">
        {
            posts.map(({id,thumbnail,category,title,desc,authorId}) => <PostItem 
            key={id} postID={id} thumbnail={thumbnail} category={category}
            title={title} desc={desc} authorId={authorId}
            />)
        }
        </div> : <h2 className='center'>No posts founds</h2>}
        
      </section>
  )
}

export default AuthorPosts
