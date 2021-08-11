import React from 'react';
import './new.css';
import { useHistory } from 'react-router-dom';

function New(props) {
    const history = useHistory()
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
            <input type="file" />
          </div>

          <div className="middle">
            <label htmlFor="">First Name*</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Roll No*</label>
            <input type="text" />
            <label htmlFor="">Date of Birth*</label>
            <input type="text" />
            <label htmlFor="">Parents Name*</label>
            <input type="text" />
          </div>
          <div className="right">
            <label htmlFor="">Last Name*</label>
            <input type="text" />
            <label htmlFor="">Registration Date*</label>
            <input type="text" />
            <label htmlFor="">Class*</label>
            <input type="text" />
            <label htmlFor="">Blood Group*</label>
            <input type="text" />
            <label htmlFor="">Parents Mobile NU.*</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-footer">
          
            <button onClick={()=> history.push(props.name)}>Cancel</button>
            <button onClick={()=> history.push(props.name)}>Submit</button>
          
        </div>
      </div>
    </div>
  );
}

export default New;
