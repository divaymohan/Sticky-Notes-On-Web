import React, { Component } from "react";

class Note extends Component {
  state = {
    style: {
      position: "absolute",
      zindex: 9,
    },
    changableStyle: {
      padding: "10px",
      cursor: "move",
      zindex: 10,
    },
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <input className="form-control form-control-lg" type="text"></input>
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
    );
  }
}

export default Note;
