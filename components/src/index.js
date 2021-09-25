import React from 'react';

import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
import faker from 'faker'


const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>
                        Warning!
                    </h4>
                    Are You Sure you want To do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>

                {/* as a prop */}
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog Post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="i like the subject"
                    avatar={faker.image.avatar()}

                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    content="i like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};





ReactDOM.render(
    <App />,
    document.querySelector('#root')
);