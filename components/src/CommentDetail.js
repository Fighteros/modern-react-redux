import React from 'react'

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar" />
            </a>
            <div className="content">
                <a className="Author" href="/">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default CommentDetail
