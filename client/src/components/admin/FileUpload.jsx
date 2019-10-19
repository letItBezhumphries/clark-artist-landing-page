import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Message from "./Message.jsx";
import Progress from "./Progress.jsx";
import { addImage, uploadImage } from '../../actions/admin';
import axios from "axios";
import { setAlert } from '../../actions/alert';



const FileUpload = ({ setAlert, uploadImage, addImage, admin: { imageForm, images, gallery, loading, portfolios } }) => {
  
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  

  const onChange = e => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(e.target.files[0].name)
    imageUpload()
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      // imageUpload(fileName);
      
      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit} className="upload-form">
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            name="file"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
            <Link className="btn btn-primary btn-block mt-4 mb-4" to='upload/:imageId'>Go to Image Form</Link>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

FileUpload.propTypes = {
  addImage: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  // images: PropTypes.array.isRequired,
}


const mapStateToProps = state => ({
  images: state.admin.images,
  imageForm: state.admin.imageForm,
  gallery: state.admin.gallery,
  portfolios: state.admin.portfolios
});


// // export default withRouter(FileUpload);
export default connect(mapStateToProps, { uploadImage, addImage })(FileUpload);


