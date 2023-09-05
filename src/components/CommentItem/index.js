// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, isLikeClicked, isDeleClicked} = props
  const {id, name, comment, time, isLike} = commentDetails

  const isLikeButtonClicked = () => {
    isLikeClicked(id)
  }
  const isDeleteButtonClicked = () => {
    isDeleClicked(id)
  }
  const likeUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="details">
        <p>{name}</p>
        <p>{time}</p>
      </div>
      <p>{comment}</p>
      <div className="img-container">
        <button type="button" onClick={isLikeButtonClicked}>
          <img src={likeUrl} alt="like" />
          Like
        </button>
        <button
          data-testid="delete"
          type="button"
          onClick={isDeleteButtonClicked}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
