import React from 'react';
import './home.css';
function Home() {
  return (
    <div>
      <div className="content-header">
        <div>
          <h2>Total Student</h2>
          <h1>4500</h1>
          <div className="line under-line">
            <div
              className="line above-line"
              style={{ backgroundColor: '#10B981', width: '80%' }}
            >
              `
            </div>
          </div>
          <span>80% Increase in 20 days</span>
        </div>

        <div>
          <h2>New Student</h2>
          <h1>850</h1>
          <div className="line under-line">
            <div
              className="line above-line"
              style={{ backgroundColor: '#F59E0B', width: '50%' }}
            >
              `
            </div>
          </div>
          <span>50% Increase in 25 days</span>
        </div>
        <div>
          <h2>Total Course</h2>
          <h1>24</h1>
          <div className="line under-line">
            <div
              className="line above-line"
              style={{ backgroundColor: '#EF4444', width: '70%' }}
            >
              `
            </div>
          </div>
          <span>70% Increase in 25 days</span>
        </div>
      </div>

      <div className="content-middle">
        <div className="middle-left">
          <ul>
            <li>Teachers List</li>
            <li>
              <img src="images/teacher1.jpg" alt="" />
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
        <div className="middle-right">
          <ul>
            <li>Students List</li>
            <li>
              <div className="middle-student">
                <img src="images/teacher7.jpg" alt="" />
                <span>
                  Morese Sharpe
                  <span>(Class 10th)</span>
                </span>
              </div>

              <div className="middle-icon">
                <i class="fas fa-pen"></i>
                <i class="fas fa-times"></i>
              </div>
            </li>
            <li>
              <div className="middle-student">
                <img src="images/teacher6.jpg" alt="" />
                <span>
                  Morese Sharpe
                  <span>(Class 10th)</span>
                </span>
              </div>
              <div className="middle-icon">
                <i class="fas fa-pen"></i>
                <i class="fas fa-times"></i>
              </div>
            </li>
            <li>
              <div className="middle-student">
                <img src="images/teacher5.jpg" alt="" />
                <span>
                  Morese Sharpe
                  <span>(Class 10th)</span>
                </span>
              </div>
              <div className="middle-icon">
                <i class="fas fa-pen"></i>
                <i class="fas fa-times"></i>
              </div>
            </li>
            <li>
              <div className="middle-student">
                <img src="images/teacher8.jpg" alt="" />
                <span>
                  Morese Sharpe
                  <span>(Class 10th)</span>
                </span>
              </div>
              <div className="middle-icon">
                <i class="fas fa-pen"></i>
                <i class="fas fa-times"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="content-bottom">
        <h4>New Student List</h4>
        <ul>
          <li>
            <h5 className="bottom-id">ID</h5>
            <h5>Name</h5>
            <h5 className="bottom-date">Date of Admission</h5>
            <h5>Status</h5>
            <h5>Edit</h5>
          </li>
          <hr />
          <li>
            <h3 className="bottom-id">1.</h3>
            <h3 className="bottom-name">Cedric Kelly</h3>
            <h3 className="bottom-date">6 Augest 2021</h3>
            <h3 className="bottom-status">Checkin</h3>
            <div>
              <i class="fas fa-pen"></i>
              <i class="fas fa-times"></i>
            </div>
          </li>
          <li>
            <h3 className="bottom-id">2.</h3>
            <h3 className="bottom-name">Rihana</h3>
            <h3 className="bottom-date">6 Augest 2021</h3>
            <h3
              className="bottom-status"
              style={{ backgroundColor: '#F59E0B' }}
            >
              Pending
            </h3>
            <div>
              <i class="fas fa-pen"></i>
              <i class="fas fa-times"></i>
            </div>
          </li>
          <li>
            <h3 className="bottom-id">3.</h3>
            <h3 className="bottom-name">Joe</h3>
            <h3 className="bottom-date">6 Augest 2021</h3>
            <h3
              className="bottom-status"
              style={{ backgroundColor: '#EF4444' }}
            >
              Cancled
            </h3>
            <div>
              <i class="fas fa-pen"></i>
              <i class="fas fa-times"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
