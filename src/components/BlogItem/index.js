// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlogItem

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-card">
        <img src={imageUrl} alt={`item${id}`} className="item-img" />
        <div className="topic-title-and-author-card-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-card-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
