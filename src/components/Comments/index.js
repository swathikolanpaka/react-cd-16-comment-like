import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    time: '',
    count: 0,
    isLike: false,
  }

  onAddComment = event => {
    event.preventDefault()

    const {commentsList, name, comment, time, count} = this.state

    const addCommentDetails = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      isLike: false,
    }

    this.setState(prevDetails => ({
      commentsList: [...prevDetails.commentsList, addCommentDetails],
      name: '',
      comment: '',
    }))

    console.log(commentsList)

    this.setState(prevCount => ({
      count: prevCount.count + 1,
    }))
    console.log(count)
  }

  isLikeClicked = id => {
    this.setState(prevDetails => ({
      commentsList: prevDetails.commentsList.map(eachDetails => {
        if (id === eachDetails.id) {
          return {...eachDetails, isLike: !eachDetails.isLike}
        }
        return eachDetails
      }),
    }))
  }

  isDeleClicked = id => {
    const {commentsList, count} = this.state

    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState(prevCount => ({
        count: prevCount.count - 1,
      }))
    }
  }

  onChangeName = event => {
    const {name} = this.state
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    const {comment} = this.state
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, count} = this.state
    return (
      <div>
        <div className="form-container">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="value"
                onChange={this.onChangeName}
                placeholder="Your name"
              />
              <br />
              <textarea
                type="value"
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <br />
              <button type="submit" data-testId="delete">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />

        <p className="comment-count">{count} Comments</p>

        <ul className="comment-count">
          {commentsList.map(eachDetails => (
            <CommentItem
              commentDetails={eachDetails}
              key={eachDetails.id}
              isLikeClicked={this.isLikeClicked}
              isDeleClicked={this.isDeleClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
