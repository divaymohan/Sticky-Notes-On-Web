import React from "react";
import Draggable from "react-draggable";

const NoteComponent = (props) => {
  return (
    <Draggable>
      <div className="row">
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default NoteComponent;
