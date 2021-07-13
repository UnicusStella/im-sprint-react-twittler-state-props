// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [정보목록, 정보목록변경] = useState(dummyTweets);
  const [유저이름, 유저이름변경] = useState('');
  const [내용, 내용변경] = useState('');

  const handleButtonClick = (event) => {
    const tweet = {
      id: 9,
      username: 유저이름,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: 내용,
      createdAt: '2019-02-25T16:17:47.000Z',
      updatedAt: '2019-02-25T16:17:47.000Z',
    };

    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    정보목록변경([tweet, ...정보목록]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에  입력 시 작동하는 함수를 완성하세요.
    유저이름변경(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    내용변경(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  className="tweetForm__input--username"
                  type="text"
                  placeholder="your username here.."
                  defaultValue={유저이름}
                  onChange={handleChangeUser}
                ></input>
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  className="tweetForm__input--message"
                  type="text"
                  placeholder="your message here.."
                  defaultValue={내용}
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  total : {정보목록.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
                value={정보목록}
                onChange={handleButtonClick}
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {/* <Tweet tweet={dummyTweets[0]} /> */}
        {정보목록.map((el) => (
          <Tweet tweet={el} key={el.id} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
