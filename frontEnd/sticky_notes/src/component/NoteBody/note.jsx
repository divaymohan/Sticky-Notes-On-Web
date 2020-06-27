import React, { Component } from "react";
import Draggable from "react-draggable";

class Note extends Component {
  state = {};
  render() {
    return (
      <Draggable>
        <div
          className="card bg-light"
          style={{ width: "18rem", cursor: "move" }}
        >
          <div className="card-body">
            <h5 className="card-title">
              <input
                className="form-control form-control-lg"
                type="text"
              ></input>
            </h5>
            <p className="card-text">
              <div clasName="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                >
                  {"divay"}
                </textarea>
              </div>
            </p>
            <a href="#" className="btn btn-primary">
              Save
            </a>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
