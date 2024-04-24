// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {publishedDate, title, description} = each
  return (
    <li className="each-item">
      <div className="first-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
