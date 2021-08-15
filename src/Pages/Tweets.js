// TODO : useState를 react로 부터 import 합니다.
import React, { useState /* TODO */ } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [tweetList, setTweetList] = useState(dummyTweets);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = (event) => {
    const count = 5;
    const tweet = {
      id: count,
      username: { user },
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: { message },
      createdAt: '2019-02-25T16:17:47.000Z',
      updatedAt: '2019-02-25T16:17:47.000Z',
    };

    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    console.log('event 는 ', event);
    console.log('tweet 는 ', tweet);
    console.log('tweetList 는 ', tweetList);
    setTweetList([tweet, ...tweetList]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUser(event.target.value);
    console.log('asdfad');
    console.log(handleButtonClick);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMessage(event.target.value);
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
                  defaultValue={user}
                  placeholder="your username here.."
                  onChange={handleChangeUser}
                  type="text"
                ></input>
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  className="tweetForm__input--message"
                  defaultValue={message}
                  placeholder="your message here.."
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  total: {tweetList.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
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
        {tweetList.map((el) => (
          <Tweet tweet={el} ker={el.id} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
