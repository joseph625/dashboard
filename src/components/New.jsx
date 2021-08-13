import React, { useState } from 'react';
import './new.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function New(props) {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleImage = (e) => {
    setImage({
      files: URL.createObjectURL(e.target.files[0]),
    });
  };

  const add = () => {
    dispatch(
      props.add({
        id: props.length + 1,
        name: firstName + ' ' + lastName,
        img: image,
        email: email,
        address: address,
        grade: grade,
      })
    );
    history.push(props.name);
  };

  return (
    <div className="new">
      <h1>Add New {props.name}</h1>
      <div className="form">
        <div className="form-header">
          <h2>Basic info</h2>
          <hr />
        </div>

        <div className="form-content">
          <div className="left">
            <label htmlFor="">Choose an Image...</label>
            <input
              type="file"
              id="img"
              accept="image/*"
              onChange={handleImage}
            />
            <br />
            <img
              src={image.files}
              alt=""
              style={{ width: '150px', marginTop: '30px', textAlign: 'center' }}
               />
          </div>

          <div className="middle">
            <label htmlFor="">First Name*</label>
            <input type="text" onChange={(e) => handleFirstName(e)} />
            <label htmlFor="">Email</label>
            <input
              type="email"
              onChange={(e) => handleEmail(e)}
              defaultValue="@gmail.com"
            />
            <label htmlFor="">Address*</label>
            <input type="text" onChange={(e) => handleAddress(e)} />
            <label htmlFor="">Date of Birth*</label>
            <input type="text" placeholder="Optional" />
            <label htmlFor="">Parents Name*</label>
            <input type="text" placeholder="Optional" />
          </div>
          <div className="right">
            <label htmlFor="">Last Name*</label>
            <input type="text" onChange={(e) => handleLastName(e)} />
            <label htmlFor="">Registration Date*</label>
            <input type="text" placeholder="Optional" />
            <label htmlFor="">Grade for Teacher write(BCS, MSc, PHD...)*</label>
            <input type="text" onChange={(e) => handleGrade(e)} />
            <label htmlFor="">Blood Group*</label>
            <input type="text" placeholder="Optional" />
            <label htmlFor="">Parents Mobile NU.*</label>
            <input type="text" placeholder="Optional" />
          </div>
        </div>

        <div className="form-footer">
          <button onClick={() => history.push(props.name)}>Cancel</button>
          <button onClick={add}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default New;
