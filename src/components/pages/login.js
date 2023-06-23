import "../css/login.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    let nav = useNavigate();
    let [showPassword, setShowPassword] = useState(false);
    let [refresher, setRefresher] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleSub = (eve) => {
        if (eve.email.length <= 8) {
            toast.error("Plese enter valid mail");
            return
        }
        if (localStorage.getItem("regMail") == null) {
            toast.error("Plese register before login")
            nav("/register")
            return
        }
        if (localStorage.getItem("regMail") == eve.email && localStorage.getItem("regPass") == eve.password) {
            toast.success("Login successfully")
            localStorage.setItem("loginStatus", true)
            nav("/Dashboard")
            return
        }
        if (localStorage.getItem("regMail") != eve.email || localStorage.getItem("regPass") != eve.password) {
            toast.error("Please enter correct email & password")
            reset();
            return
        }
    }
    return (
        <>
            <div className="registerContainer shadow p-3 mb-3 bg-body-tertiary rounded">
                <form onSubmit={handleSubmit((data) => handleSub(data))}>
                    <div class="mb-4">
                        <center>
                            <img className="logo" src="https://lh3.googleusercontent.com/p/AF1QipPemdxXt1t-KUPD8m9rEJGIqLJGxbNzjjCAPKbP=s1360-w1360-h1020" />
                            <span className="loginTitle">Login to your account</span>
                        </center>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', { required: true })} />
                        {errors.email && <div id="emailHelp" class="form-text">Email is required.</div>}

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type={showPassword ? "text" : "password"} class="form-control" id="exampleInputPassword1" {...register('password', { required: true })} />
                        {errors.password && <div id="emailHelp" class="form-text">Password is required.</div>}
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
            <span className="link" onClick={() => nav("/register")}>Create an account</span>
        </>

    )
}