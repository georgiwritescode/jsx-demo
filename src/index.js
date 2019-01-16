import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './Comments';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Gosho" postedOn="Today at 14:30" avatar={faker.image.avatar()} content="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Pesho" postedOn="Yesterday at 10:00" avatar={faker.image.avatar()} content="Helpful blog post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ivan" postedOn="Yesterday at 09:00" avatar={faker.image.avatar()} content="Not helpful at all!" />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)