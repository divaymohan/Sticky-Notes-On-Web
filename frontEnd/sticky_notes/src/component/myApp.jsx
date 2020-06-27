import React, { Component } from "react";
import Note from "./NoteBody/note";
import NoteComponent from "./common/noteComponent";

class MyApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Note />
        <NoteComponent />
      </div>
    );
  }
}

export default MyApp;
