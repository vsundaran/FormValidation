import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    let nav = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("loginStatus")) {
            toast.error("Please login before enter")
            nav("/");
        }
    })
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}