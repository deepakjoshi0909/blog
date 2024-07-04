import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthors from './PostAuthors'

const PostItem = ({psotID,category,title,desc,authorId,thumbnail}) => {
  return (
    <article className='post'>
        <div className='post_thumbnail'>
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post_content">
            <Link to={`/posts/ ${psotID}`}><h3>{title}</h3></Link>
            <p>{desc}</p>
            <div className="post_footer">
                <PostAuthors/>
                <Link to={`/posts/categories/${category}`} className='btn catagory'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem
