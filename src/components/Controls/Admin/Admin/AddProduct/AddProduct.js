import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] =useState(null);

    //Handle Form Submission....
    const onSubmit = data => {
        const serviceData = {
                title : data.serviceTitle,
                description: data.serviceDetails,
                price: data.servicePrice,
                imgURL : imageURL
        }
        const url = `http://localhost:5000/addServices`
        if (imageURL !== null) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            })
                .then(res => {
                    console.log("server side response", res);
                })
        }
        else {
            alert("image is not uploaded yet, please wait");
        }
        console.log(imageURL);
        setImageURL(null);
    };

    //Image upload handling.......
    const handleImageUpload =  (event) => {
       
        const imgData = new FormData();
        imgData.set('key', 'd5dd157c9b69b49e9027a5a5ad62a42d');
        imgData.append('image', event.target.files[0]);
        console.log(event.target.files[0]);
         axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageURL(response.data.data.url);
                console.log('image uploaded', response.data.data.url);
                
               
               
            })
            
            
            .catch(function (error) {
                console.log(error);
            });
            
    }

    return (
        <div className="p-5" style={{ background: 'white', height: '92vh', borderRadius: '5px' }}>
            <h6>Add a Product</h6>
            <hr />
            <div>
                <form className="service-form" onSubmit={handleSubmit(onSubmit)}>

                    <input name="serviceTitle" type="text" class="form-control w-75" placeholder="Service Title" {...register("serviceTitle")} required /> 
                    <textarea name="serviceDetails" class="form-control w-75" id="exampleFormControlTextarea1" rows="3" placeholder="Description" {...register("serviceDetails")} required></textarea>
                    <input name="servicePrice" type="text" class="form-control w-25" placeholder="Price" {...register("servicePrice")} required />
                    <input name="serviceImage" onChange={handleImageUpload} type="file"/> <br />
                    <input className="brand-btn-primary ml-0" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;