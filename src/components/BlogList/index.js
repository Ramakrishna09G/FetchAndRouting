// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem/index'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogListData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const responseData = await response.json()

    const formattedData = responseData.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    console.log(formattedData)
    this.setState({isLoading: false, blogListData: formattedData})
  }

  render() {
    const {isLoading, blogListData} = this.state
    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogListData.map(eachItem => (
            <BlogItem key={eachItem.id} eachBlogItem={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
