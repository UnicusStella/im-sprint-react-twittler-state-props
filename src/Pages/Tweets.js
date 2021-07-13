// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [유저정보목록, set유저정보목록] = useState(dummyTweets);
  const [유저이름, set유저이름] = useState('');
  const [유저내용, set유저내용] = useState('');

  const handleButtonClick = (event) => {
    const tweet = {
      id: 9,
      username: 유저이름,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: 유저내용,
      createdAt: '2019-02-25T16:17:47.000Z',
      updatedAt: '2019-02-25T16:17:47.000Z',
    };

    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    set유저정보목록([tweet, ...유저정보목록]);
    document.getElementsByClassName('tweetForm__input--username')[0].value = '';
    document.getElementsByClassName('tweetForm__input--message')[0].value = '';
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에  입력 시 작동하는 함수를 완성하세요.
    set유저이름(event.target.value);
    console.log(temp);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    set유저내용(event.target.value);
  };

  const handleUser = (event) => {
    console.log(temp);
  };

  const idList = 유저정보목록.map((유저) => (
    <option value={유저.username}>{유저.username}</option>
  ));

  let temp = 유저정보목록.filter((이름) => 이름.username);
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
                  defaultValue={유저내용}
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  total : {유저정보목록.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
                onChange={handleButtonClick}
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        <select
          placeholder="-- click to filter tweets by username --"
          onClick={handleUser}
        >
          {idList}
        </select>
      </div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {/* <Tweet tweet={dummyTweets[0]} /> */}
        {유저정보목록.map((el) => (
          <Tweet tweet={el} key={el.id} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
