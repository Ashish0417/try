import React, { useRef, useState } from 'react'
import './Upload.css'
import user_1 from '../../assets/main.png'
// import { Link } from 'react-router-dom'

const Upload = () => {
    const inputRef = useRef(null) ;
    const[image,setImage] = useState(user_1);
    const[selectedFile,setSelectedFile] = useState(null);

    const handleImageClick=()=>{
        inputRef.current.click();
    }

    const handleImageChange=(e)=>{
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file))
        setSelectedFile(file)
    }
    const handleUpload = () => {
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formdata = new FormData();
        formdata.append('file', selectedFile, selectedFile.name);

        const requestOptions = {
            method: 'POST',
            body: formdata
        };

        fetch('http://127.0.0.1:8000/', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImage(imageObjectURL);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to upload image.');
            });
    };
// const handleUpload=()=>{
//     const formdata = new FormData();
//     formdata.append(
//         'file',
//         selectedFile,
//         selectedFile.name
//     )
    
//     const requestOptions ={
//         method:'POST',
//         body : formdata
//     }
//     fetch('http://127.0.0.1:8000/',requestOptions).then(
//         response =>{
//             if(!response.ok){
//                 throw new Error('Network response was not ok');
//             }
//             return response.blob;
//         })
//         .then(imageBlob => {
//           const imageObjectURL = URL.createObjectURL(imageBlob);
//           setImage(imageObjectURL);
//         })
        
// }
const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'downloaded_image.png'; // You can set the default file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
    return (
        <div className='upload'>
            <div className='upload-info'>
                <h2>Photo Colourizer</h2>
                <p>Convert black and white photos to color online for free, and turn your old photo into a colorful reality.
                </p>
                <div className='upload-photo-place'>
                    <img src={image} alt='' />
                    <div className='upload-dragdrop'>
                        <div className='dragdrop' onClick={handleImageClick}>
                            <h4>Drag image here or click to upload</h4>
                            <input type='file' ref = {inputRef} onChange={handleImageChange}/>
                        </div>
                        <span className="privacy-note">*All files are stored privately & encrypted. Only you will see them.</span>
                        <button  className='btn dark-btn' onClick={handleUpload}>Upload</button>
                        <button className='btn dark-btn' onClick={handleDownload}>
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload