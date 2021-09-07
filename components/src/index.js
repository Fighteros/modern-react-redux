import React from 'react';

import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
import faker from 'faker'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                {/* as a prop */}
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog Post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                content="i like the subject"
                avatar={faker.image.avatar()}

            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                content="i like the writing"
                avatar={faker.image.avatar()}

            />
        </div>
    );
};





ReactDOM.render(
    <App />,
    document.querySelector('#root')
);