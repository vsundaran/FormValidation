import "../css/login.css"
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    let nav = useNavigate();
    let [showPassword, setShowPassword] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const handleSub = (eve) => {
        if (eve.email.length <= 8) {
            toast.error("Plese enter valid mail");
            return
        }
        if (eve.password != eve.confrimPassword) {
            toast.error("Plese enter same password");
            return
        }
        localStorage.setItem("regMail", eve.email);
        localStorage.setItem("regPass", eve.password);
        toast.success("Registered succesfully");
        nav("/");
    }
    return (
        <>
            <div className="registerContainer shadow p-3 mb-3 bg-body-tertiary rounded">
                <form onSubmit={handleSubmit((data) => handleSub(data))}>
                    <div class="mb-4">
                        <center>
                            <img className="logo" src="https://lh3.googleusercontent.com/p/AF1QipPemdxXt1t-KUPD8m9rEJGIqLJGxbNzjjCAPKbP=s1360-w1360-h1020" />
                            <span className="loginTitle">Create your account</span>
                        </center>
                    </div>
                    <div class="mb-3 d-flex">
                        <div>
                            <label class="form-check-label" for="exampleCheck1">First name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" {...register('firstName', { required: true })} />
                            {errors.firstName && <div id="emailHelp" class="form-text">First name is required.</div>}
                        </div>
                        <div>
                            <label class="form-check-label" for="exampleCheck1">Last name</label>
                            <input type="text" class="form-control mx-1" id="exampleInputPassword1" {...register('lastName', { required: true })} />
                            {errors.lastName && <div id="emailHelp" class="form-text">Last name is required.</div>}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', { required: true })} />
                        {errors.email && <div id="emailHelp" class="form-text">Email is required.</div>}

                    </div>
                    <div class="mb-3 d-flex">
                        <div>
                            <label class="form-check-label" for="exampleCheck1">Password</label>
                            <input type={showPassword ? "text" : "password"} class="form-control " id="exampleInputPassword1" {...register('password', { required: true })} />
                            {errors.password && <div id="emailHelp" class="form-text">Password is required.</div>}
                        </div>
                        <div>
                            <label class="form-check-label" for="exampleCheck1">Confrim password</label>
                            <input type={showPassword ? "text" : "password"} class="form-control mx-1" id="exampleInputPassword1" {...register('confrimPassword', { required: true })} />
                            {errors.confrimPassword && <div id="emailHelp" class="form-text">Confrim password is required.</div>}
                        </div>
                    </div>
                    <div class="mb-3 form-check">
                        <input onChange={(eve) => setShowPassword(eve.target.checked)} type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <center>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </center>
                </form>
            </div>
            <span className="link" onClick={() => nav("/")}>Already have an account</span>
        </>

    )
}