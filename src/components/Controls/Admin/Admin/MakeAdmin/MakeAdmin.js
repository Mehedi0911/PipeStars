import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = "https://peaceful-wildwood-58192.herokuapp.com/makeAdmin"
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log("server side response", res);
            })
    }
  
    return (
        <div className="p-5" style={{ background: '#171717', height: '92vh', borderRadius: '5px' }}>
            <div>
                <h6 className="text-white">Make admin</h6>
                <hr />
            </div>
            <div>
                <form className="service-form" onSubmit={handleSubmit(onSubmit)}>

                    <input name="admin" type="email" class="form-control w-75" placeholder="Enter Email Address" {...register("admin")} required />
                    
                    
                    <input className="brand-btn-primary ml-0" type="submit" value="Make Admin"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;