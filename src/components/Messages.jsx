import React from 'react';
import './messages.css';
function Messages() {
  return (
    <div className="message">
      <h1 style={{ color: '#1F155E' }}>Messages</h1>
      <br />
      <br />

      <div className="message-body">
        <div className="body-left">
          <ul>
            <li>Teachers List</li>
            <li>
              <img src="images/teacher5.jpg" alt="" />
              <span>
                Morese Sharpe
                <span>(B.com)</span>
              </span>
            </li>
            <li>
              <img src="images/teacher3.jpg" alt="" />
              <span>
                Smith Watson
                <span>(English)</span>
              </span>
            </li>
            <li>
              <img src="images/teacher4.jpg" alt="" />
              <span>
                Tom Willimas
                <span>(Biology)</span>
              </span>
            </li>
            <li>
              <img src="images/teacher2.jpg" alt="" />
              <span>
                Cedric Kelly
                <span>(B.com)</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="body-right">
          <div className="body-right-header">
            <div className="left">
              <img
                src="images/teacher1.jpg"
                alt=""
                style={{
                  width: '60px',
                  borderRadius: '100%',
                  marginRight: '20px',
                }}
              />
              <span>
                <h2>Smith Watson</h2>
                <p>online 🟢</p>
              </span>
            </div>
            <div className="right">
              <img
                src="images/mobile.png"
                alt=""
                style={{ width: '60px', borderRadius: '100%' }}
              />
              <img
                src="images/video.png"
                alt=""
                style={{ width: '60px', borderRadius: '100%' }}
              />
            </div>
          </div>
          <hr />

          <div className="body-right-footer">
            <div className="left">
              <hr />
              <br />

              <input type="text" placeholder="text message" />
            </div>
            <div className="right">
              <img
                src="images/link.png"
                alt=""
                style={{
                  width: '30px',
                  borderRadius: '100%',
                  marginRight: '10px',
                }}
              />
              <img
                src="images/send.png"
                alt=""
                style={{ width: '30px', borderRadius: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
