import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addImage } from '../../actions/admin';


const AddImageForm = ({ addImage, images }) => {
  console.log('this is the props in AddImageForm', props);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [formData, setFormData] = useState({
    title: '',
    file: '',
    description: '',
    height: '',
    width: '',
    dateOfCreation: '',
    portfolio: ''
  });
  

  const { title, description, height, width, dateOfCreation, portfolio } = formData;

  const onChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const onFileChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setFormData({
      ...formData, file: file
    });
  }

  const onSubmit = async e => {
    e.preventDefault();
    addImage({ title, file, description, height, width, dateOfCreation, portfolio });
  }

  return (
    <Fragment>
      <h1 className="large text-primary image-form">Add details to Image</h1>

      <form className="image-form" onSubmit={e => onSubmit(e)}>
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onFileChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Title of image"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Add a description"
            cols="30"
            rows="5"
            name="description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Height of image"
            name="height"
            value={height}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Width of image"
            name="width"
            value={width}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>Date of Production</h4>
          <input
            type="date"
            name="dateOfCreation"
            value={dateOfCreation}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>Which Portfolio does this image belong?</h4>
          <input
            type="text"
            name="portfolio"
            value={portfolio}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="upload" />
      </form>
    </Fragment>
  );
}

AddImageForm.propTypes = {
  addImage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  images: state.images
})

export default connect(mapStateToProps, {addImage})(AddImageForm);
