import React, { Component } from "react";
import Draggable from "react-draggable";

class Note extends Component {
  state = {};
  render() {
    return (
      <Draggable>
        <div className="row">
          <div className="col s4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <div className="card-title">
                  <div class="input-field">
                    <input id="input_text" type="text" data-length="10"></input>
                  </div>
                </div>

                <p>
                  <div className="row">
                    <div className="input-field">
                      <textarea
                        id="textarea2"
                        className="materialize-textarea"
                        data-length="400"
                      ></textarea>
                    </div>
                  </div>
                </p>
              </div>
              <div className="card-action">
                <button class="btn-floating btn-large waves-effect waves-light red pulse">
                  <i class="material-icons">add</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
