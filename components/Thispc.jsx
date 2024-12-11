"use client";
import React, { useState, useEffect } from "react";
import thispc from "../asset/thispc.png";
import axios from "axios";

function Thispc({ setcurrent, setminimize, array1, instanceid }) {
  const [file, setfile] = useState(null);
  const [files, setFiles] = useState([]); // State to hold the list of uploaded files
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

  const handlefilechange = (e) => {
    setfile(e.target.files[0]);
  };

  const uploadfile = async (e) => {
    e.preventDefault();
    if (file == null) {
      alert("Please choose a file");
      return;
    }

    const formdata = new FormData();
    formdata.append("file", file);

    try {
      const response = await axios.post("https://backend-gamma-ten-58.vercel.app/upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully");
      fetchFiles(); // Fetch the files again after a successful upload
    } catch (error) {
      alert("Unable to upload");
      console.error("Upload error:", error);
    }
  };

  // Function to fetch uploaded files
  const fetchFiles = async () => {
    try {
      const response = await axios.get("https://backend-gamma-ten-58.vercel.app/files"); // Fetch files from server
      setFiles(response.data); // Update state with the fetched files
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Fetch files when the component mounts
  useEffect(() => {
    fetchFiles();
  }, []);

  const onclick = () => {
    if (array1.length === 0) {
      setcurrent(false);
    } else {
      let index = -1;
      for (let ele of array1) {
        index += 1;
        if (ele[0] === instanceid) {
          break;
        }
      }
      array1.splice(index, 1);
    }

    setcurrent(false);
  };

  const onclickmini = () => {
    if (array1.length !== 0) {
      let flag = false;
      for (let ele of array1) {
        if (ele[0] === instanceid) {
          flag = true;
          setcurrent(false);
          break;
        } else {
          flag = false;
        }
      }
      if (flag) {
        setcurrent(false);
      } else {
        setminimize([...array1, [instanceid, thispc, "Thispc"]]);
        setcurrent(false);
      }
    } else {
      setminimize([...array1, [instanceid, thispc, "Thispc"]]);
      setcurrent(false);
    }
  };

  const openImage = (filename) => {
    const imageUrl = `https://backend-gamma-ten-58.vercel.app/file/${filename}`; // Construct the URL for the image
    setSelectedImage(imageUrl); // Set the selected image URL
  };

  return (
    <div className="h-[60vh] w-[60vw] flex-col outline outline-1 flex bg-white">
      <div className="h-[50px] flex items-center justify-end w-full">
        <div
          onClick={onclick}
          className="text-white mr-1 hover:cursor-pointer hover:opacity-80 transition-all duration-150"
        >
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/multiply-2.png"
            alt="close"
          />
        </div>
        <div
          onClick={onclickmini}
          className="text-white mr-1 hover:cursor-pointer hover:opacity-80 transition-all duration-150"
        >
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/glyph-neue/64/minimize-window.png"
            alt="minimize"
          />
        </div>
      </div>
      <div id="boxarea" className="h-full w-full flex items-center justify-center flex-col">
        <p>This PC</p>
        <p>{instanceid}</p>
        <form className="outline outline-1" onSubmit={uploadfile}>
          <input type="file" onChange={handlefilechange} />
          <button type="submit">Upload File</button>
        </form>
        
        <div className="mt-4">
          <h3 className="font-bold">Uploaded Files:</h3>
          {files.length === 0 ? (
            <p>No files uploaded yet.</p>
          ) : (
            <ul>
              {files.map((file) => (
                <li key={file._id}>
                  <strong>Filename:</strong> {file.filename} - <strong>Upload Date:</strong> {new Date(file.uploadDate).toLocaleString()}
                  <button 
                    onClick={() => openImage(file.filename)} 
                    className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    View Image
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Conditional Rendering for the Selected Image */}
        {selectedImage && (
          <div className="mt-4">
            <h4 className="font-bold">Selected Image:</h4>
            <img src={selectedImage} alt="Selected" className="mt-2 w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Thispc;
