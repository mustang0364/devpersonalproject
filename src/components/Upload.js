import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

// import './upload.css'


export default class UploadForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            uploadedFileCloudinaryUrl: []
        }
    }

    handleImageUpload = (file) => {

             axios.get('/api/upload').then(response => {
            console.log(response.data.signature)
        

 let formData = new FormData();
        formData.append("signature", response.data.signature)
        formData.append("api_key", "272672298114153");
        formData.append("timestamp", response.data.timestamp)
        formData.append("file", file[0]);




      


        for(var pair of formData.entries()) {
         console.log(pair); 
          }

        axios.post('https://api.cloudinary.com/v1_1/meetyolo/image/upload', formData).then(response => {
            console.log('response.data',response.data);

                
                      this.state.uploadedFileCloudinaryUrl.push(response.data.secure_url) 
               this.forceUpdate();
            }).catch( err => {
                console.log(err);
            }) 
        })
    }     

    render() {


        const displayImages=this.state.uploadedFileCloudinaryUrl.map((e,i)=>{
            return(
                 <img  key={i} src={e}  alt ="hello"/>
            )
        })
        return (
            <div className='upload-form'>
            { 
            this.state.uploadedFileCloudinaryUrl
            ? 
            <div className='image-container'>
                {/* <img src={this.state.uploadedFileCloudinaryUrl} alt='cloudinary example'/> */}
                {displayImages}
                <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.handleImageUpload}
                        className='dropzone'
                        >
                       <button>Upload</button>
                    </Dropzone>
            </div>
            :
            <div>
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.handleImageUpload}
                    className='dropzone'
                    >
                    <p>Upload</p>
                    
                </Dropzone>

             
               <input type='file' onChange={(e) => this.handleImageUpload(e.target.files)} /> 
            </div>
            }
            </div>
        );
    }
}