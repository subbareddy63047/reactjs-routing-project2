// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="blog-list-container">
      <div className="profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-img"
        />
        <h1 className="name">Wade warren</h1>
        <p className="role">Software Developer</p>
      </div>
      <ul className="blog-items-list">
        {blogsList.map(each => (
          <BlogItem each={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
