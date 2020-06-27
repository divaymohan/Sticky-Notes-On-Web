import React, { Component } from "react";
import Note from "./NoteBody/note";
import NoteComponent from "./common/noteComponent";

class MyApp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Note />
        <NoteComponent />
      </React.Fragment>
    );
  }
}

export default MyApp;
