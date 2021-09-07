import React from 'react'
import faker from 'faker'

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div className="content">
                <a className="Author" href="/">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">
                        Today at 6:00PM
                    </span>
                </div>
                <div className="text">
                    Nice blog
                </div>
            </div>
        </div>
    )
}

export default CommentDetail
