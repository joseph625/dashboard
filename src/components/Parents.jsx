import React from 'react';
import './parents.css';
import { Calendar } from 'antd';
import { Card, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
function Parents() {
  return (
    <div className="parents">
      <div className="parents-header">
        <div className="welcome">
          <div className="left">
            <h2 className="text" style={{ fontSize: '1.8rem' }}>
              Welcome back, Justin!
            </h2>
            <h4 className="text">
              Your child completed <span>80%</span> of the tasks
            </h4>
            <h4 className="text">
              Progress is <span>very Good!</span>
            </h4>
          </div>
          <div className="right">
            <img style={{ width: '300px' }} src="images/data.png" alt="" />
          </div>
        </div>
        <div className="site-calendar-demo-card">
          <Calendar fullscreen={false} />
        </div>
      </div>

      <div className="parents-middle">
        <Row gutter={30}>
          <Col span={6}>
            <Card title="Mathmatics" bordered={false}>
              <p>Quisque a fells quiz Course A-Z</p>
              <span>16 days left</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="History" bordered={false}>
              <p>Quisque a fells quiz Course A-Z</p>
              <span>10 days left</span>{' '}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Science" bordered={false}>
              <p>Quisque a fells quiz Course A-Z</p>
              <span>6 days left</span>{' '}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Computer" bordered={false}>
              <p>Quisque a fells quiz Course A-Z</p>
              <span>4 days left</span>{' '}
            </Card>
          </Col>
        </Row>
      </div>

      <div className="parents-footer">
        <div className="lessons">
          <h2>Upcomming Lessons</h2>
          <Card title="Programming" bordered={false}>
            <p>Every day 10-11 am</p>
            <img
              style={{
                width: '50px',
                borderRadius: '100%',
                marginRight: '6px',
              }}
              src="images/teacher6.jpg"
              alt=""
            />
            <img
              style={{ width: '50px', borderRadius: '100%' }}
              src="images/teacher5.jpg"
              alt=""
            />
          </Card>
          <br />
          <Card title="Course Language" bordered={false}>
            <p>Every day 10-11 am</p>
            <img
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '100%',
                marginRight: '6px',
              }}
              src="images/teacher7.jpg"
              alt=""
            />
            <img
              style={{ width: '50px', height: '50px', borderRadius: '100%' }}
              src="images/teacher2.jpg"
              alt=""
            />
          </Card>
        </div>

        <div className="Courses">
          <h2>Courses</h2>

          <Card bordered={false} style={{ width: '500px' }}>
            <div className="meta-card">
              <img
                style={{ width: '70px', height: '70px', borderRadius: '100%' }}
                src="images/teacher6.jpg"
                alt=""
              />
              <span>
                <h2>Informatic Course</h2>
                <p>John Doe, 19June</p>
              </span>
              <ArrowRightOutlined />
            </div>
          </Card>
              <br />
          <Card bordered={false} style={{ width: '500px' }}>
            <div className="meta-card">
              <img
                style={{ width: '70px', height: '70px', borderRadius: '100%' }}
                src="images/teacher2.jpg"
                alt=""
              />
              <span>
                <h2>Live drawing</h2>
                <p>Michel, 19June</p>
              </span>
              <ArrowRightOutlined />
            </div>
          </Card>
              <br />
          <Card bordered={false} style={{ width: '500px' }}>
            <div className="meta-card">
              <img
                style={{ width: '70px', height: '70px', borderRadius: '100%' }}
                src="images/teacher8.jpg"
                alt=""
              />
              <span>
                <h2>Art</h2>
                <p>Mickel, 19June</p>
              </span>
              <ArrowRightOutlined />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Parents;
