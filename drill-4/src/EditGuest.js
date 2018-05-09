import React, { Component } from 'react';
import './EditGuest.css';

function EditGuest(props) {
  return (
      <div className="modal-bg">
          <div className="modal">
              <input
              value={props.guest} 
              onChange={props.edit}
              className="modal-input"/>
              <button 
              onClick={props.update}
              className="modal-btn">Update</button>
              <button 
              onClick={props.hide}
              className="modal-btn">Cancel</button>
          </div>
      </div>
)
}

export default EditGuest;
