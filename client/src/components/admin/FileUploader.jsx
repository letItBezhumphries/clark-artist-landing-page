import React, { Component } from "react";
// import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import Message from "./Message";
// import Progress from "./Progress";
import { addImage } from "../../actions/admin";

import axios from "axios";

class FileUploader extends Component {
  state = {
    images: [],
    uploadPercentage: 0,
    selectedFile: null,
    currentFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      selectedFileName: event.target.files[0].name
    });
  };

  fileUploadHandler = e => {
    e.preventDefault();

    console.log(`fileUploadHandler: ${this.state.selectedFile}`);
    console.log(`fileUploadHandler: ${this.state.selectedFileName}`);
    const formData = new FormData();
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFileName
    );

    axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          this.setState({
            uploadPercentage: parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          });
          setTimeout(
            () =>
              this.setState({
                uploadPercentage: 0
              }),
            1000
          );
        }
      })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
      
        <input
          style={{ display: "none" }}
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>

      </div>
    );
  }
}

export default connect(
  null,
  { addImage }
)(FileUploader);
