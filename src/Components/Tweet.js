import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const { id, picture, username, content, createdAt } = tweet;
  const parsedDate = new Date(createdAt).toLocaleDateString('ko-kr');

  return (
    <li className="tweet" id={id}>
      <div className="tweet__profile">
        <img src={picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {/* TODO : 유져 이름이 있어야 합니다. */}
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
            <span className="tweet__username">{username}</span>
            <span className="tweet__createdAt">{parsedDate}</span>
          </div>
        </div>
        <div className="tweet__message">
          {/* TODO : 트윗 메세지가 있어야 합니다. */}
          {content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
