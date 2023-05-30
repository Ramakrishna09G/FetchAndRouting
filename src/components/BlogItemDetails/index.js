// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogItemDetails: []}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responseData = await response.json()

    console.log(responseData)

    const formattedData = {
      id: responseData.id,
      title: responseData.title,
      topic: responseData.topic,
      imageUrl: responseData.image_url,
      author: responseData.author,
      avatarUrl: responseData.avatar_url,
      content: responseData.content,
    }
    console.log(formattedData)
    this.setState({isLoading: false, blogItemDetails: formattedData})
  }

  renderBlogItemDetailsView = () => {
    const {blogItemDetails} = this.state
    const {
      id,
      title,
      topic,
      imageUrl,
      avatarUrl,
      author,
      content,
    } = blogItemDetails

    return (
      <div className="blog-item-info-card">
        <h1 className="title">{title}</h1>
        <div className="avatar-and-author-card">
          <img src={avatarUrl} alt={author} className="avatar-pic" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="item-pic" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetailsView()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
