import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FormControl } from "react-bootstrap";
import {db, storage} from "./firebase.js";
import {ref,update} from "firebase/database";
import {uploadBytes, ref as sRef } from "firebase/storage";


function uploadImage() {
    const imageInput = document.getElementById('file_input');
    const file = imageInput.files[0];
    const storageRef = sRef(storage, `images/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}

const uploadCategories = [
	{
		category: "Weight Training",
		subCategory: ["Arm", "Back", "Chest", "Core", "Legs"]
	},

	{
		category: "Cardio",
		subCategory: ["High Intensity", "Steady State"]
	},

	{
		category: "Flexibility",
		subCategory: ["Pilates", "Stretching", "Yoga"]
	}
]

export default function Upload() {
  const [{ category, subCategory }, setData] = useState({
    category: "Weight Training",
    subCategory: ""
  });

  const firstTag = uploadCategories.map((tag1) => (
    <option key={tag1.category} value={tag1.category}>
      {tag1.category}
    </option>
  ));

  const secondTag = uploadCategories.find(tag2 => tag2.category === category)?.subCategory.map((sub) => (
    <option key={sub} value={sub}>
      {sub}
    </option>
  ));

  function handleCategory(event) {
    setData(() => ({ subCategory: '', category: event.target.value }));
  }

  function handleSubCategory(event) {
    setData(data => ({ ...data, subCategory: event.target.value }));
  }

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        setPreviewImageSrc(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
        setPreviewImageSrc('/img/photoupload-uploadpg.jpg');
    }
    setFile(file);
  }

  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileUpload, setFile] = useState("");
  const [picturePath, setPicturePath] = useState("");
  const [previewImageSrc, setPreviewImageSrc] = useState('/img/photoupload-uploadpg.jpg');


  const handleInputChange = (e) => {
    const {id , value} = e.target;
      if(id === "username"){
        setUsername(value);
      }
      if(id === "title"){
        setTitle(value);
      }
      if(id === "content_input"){
        setContent(value);
      }
      if(id === "file_input"){
        setFile(value);
      }
  }

  const handleSubmit = (e) =>{
    if (username.trim() === "" || title.trim() === "" || content.trim() === "" ) {
      alert("Please fill out all the required fields.");
      return;
    }

    const file = document.getElementById('file_input').files[0]
    let obj = {
      username : username,
      postTitle: title,
      content: content,
      category: category,
      subCategory: subCategory,
      picturePath: `images/${file.name}`
    }
    const updates = {};
    updates['/' + obj.postTitle] = obj
    setUsername('');
    setTitle('');
    setContent('');
    setFile('');
    setPreviewImageSrc('/img/photoupload-uploadpg.jpg');
    document.getElementById("content_input").value = "";
    return update(ref(db, obj.category), updates);
}

  function submitResult() {
    if (window.confirm("Do you wish to submit?") === false) {
      return false;
    } else {
      handleSubmit(); uploadImage(); alert("Form submitted");
    }
  }

  return(
    <main className="upload_main d-flex justify-content-center align-content-center">
      <Form className="upload-inputs" aria-label="Upload Form">
        <Form.Group className="upload-input-sections">
          <Form.Label className="upload-labels">Username:</Form.Label>
          <Form.Control aria-label="Username" className="form-control smtext" id="username" placeholder="Username"
            value={username}
            onChange={(e) => handleInputChange(e)}>
            </Form.Control>
        </Form.Group>

        <Form.Group className="upload-input-sections">
          <Form.Label className="upload-labels">Title:</Form.Label>
          <Form.Control aria-label="Title" className="form-control smtext" id="title" placeholder="Title"
            value={title}
            onChange = {(e) => handleInputChange(e)}>
          </Form.Control>
        </Form.Group>

        <Form.Group className="upload-input-sections">
          <Form.Label className="upload-labels">Tag:</Form.Label>
            <Form.Select aria-label="First Tag" className="form-control dropdown" name="categories" id="categories"
              value={category} onChange={handleCategory}>
              {firstTag}
            </Form.Select>
        </Form.Group>

        <Form.Group className="upload-input-sections">
          <Form.Label className="upload-labels" >Tag 2:</Form.Label>
          <Form.Select aria-label="Second Tag" className="form-control dropdown" name="Subcategories" id="Subcategories"
            value={subCategory} onChange={handleSubCategory}>
            {secondTag}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className="upload-labels">Upload Image:</Form.Label>
          <Form.Group className="mb-4 d-flex justify-content-center">
            <img aria-label="Photo Preview" id="preview-image" src={previewImageSrc}></img>
          </Form.Group>
        </Form.Group>

         <Form.Group  className="mb-3">
         <FormLabel htmlFor="file_input" className="upload-labels">Choose an image to upload:</FormLabel>
          <input aria-label="File Input" className="form-control lgtext" id="file_input" type="file" accept="image/*"
            onChange={handleFileInputChange}/>
        </Form.Group>

        <Form.Group className="upload-input-sections">
          <Form.Label className="upload-labels">Post Content:</Form.Label>
          <Form.Control aria-label="Post Content" className="form-control lgtext" id="content_input" placeholder="Enter Text Here"
            value={content}
            onChange = {(e) => handleInputChange(e)}>
          </Form.Control>
        </Form.Group>

        <Button aria-label="Submit" className="btn btn-dark submitbutton" type="button" onClick={()=> {submitResult();}}>Submit</Button>
      </Form>
    </main>
  );
}