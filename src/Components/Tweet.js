import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');
  // const tweetList = tweet.
  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {tweet.username} {parsedDate}
            {/* TODO : 유져 이름이 있어야 합니다. */}
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
          </div>
        </div>
        <div className="tweet__message">{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet;
